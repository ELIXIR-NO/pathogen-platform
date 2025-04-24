"use client";

import { NormDataRecord } from "@/lib/data/csvUtils";
import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Bar,
	BarChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Cell,
	ComposedChart,
	Line,
	Legend,
} from "recharts";
import * as d3 from "d3";
import { geoPath, geoMercator, GeoProjection } from "d3-geo";
import { GeoJson } from "@/lib/data/geojsonLoader";
import * as turf from "@turf/turf";
import { Checkbox } from "@/components/ui/checkbox";
import { SimpleLinearRegression } from "ml-regression-simple-linear";
import { Download, Info, Maximize2 } from "lucide-react";
import {
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { getDescription } from "@/hooks/getMicrobeDescription";
import {
	ChartDialog,
	exportChartImage,
	ExportOptionsDialog,
} from "@/lib/exportImageUtils";
import DownloadCSV from "@/lib/data/csvExport";

export default function Atlas({
	data,
	geoData,
}: {
	data: NormDataRecord[];
	geoData: GeoJson;
}) {
	const [selectedMicrobe, setSelectedMicrobe] =
		useState<string>("Enterobacter");
	const [selectedAntibiotic, setSelectedAntibiotic] =
		useState<string>("Cefotaxim");
	const [selectedRegions, setSelectedRegions] = useState<string[]>(["Norge"]);
	const [selectedDataSet, setSelectedDataSet] = useState<
		"Blod" | "Sår" | "Urin" | "Luft"
	>("Blod");
	const [selectedYear, setSelectedYear] = useState<number>(2022);
	const [hoveredRegion, setHoveredRegion] = useState<string[] | null>(null);
	const [chartCall, setChartCall] = useState<string>("");

	const filteredData = useMemo(() => {
		return data.filter((record) => record.Opplegg === selectedDataSet);
	}, [data, selectedDataSet]);

	const availableYears = useMemo(() => {
		const years = new Set(
			filteredData
				.filter(
					(record) =>
						(!selectedMicrobe || record.Mikrobe === selectedMicrobe) &&
						(!selectedAntibiotic || record.Antibiotika === selectedAntibiotic)
				)
				.map((record) => parseInt(record.ProveAar))
		);
		return Array.from(years).sort((a, b) => a - b);
	}, [filteredData, selectedMicrobe, selectedAntibiotic]);

	const handleSelectionChange = (microbe: string, antibiotic: string) => {
		setSelectedMicrobe(microbe);
		setSelectedAntibiotic(antibiotic);
	};

	const handleRegionChange = (region: string) => {
		setSelectedRegions((prev) =>
			prev.includes(region)
				? prev.filter((r) => r !== region)
				: [...prev, region]
		);
	};

	const handleHover = (region: string[] | null, chartCall: string) => {
		setHoveredRegion((prev) =>
			prev?.join(",") !== region?.join(",") ? region : prev
		);
		setChartCall(chartCall);
	};

	return (
		<div className="mx-0 grid grid-cols-6 gap-2">
			<div className="col-span-1 flex flex-col space-y-4">
				<MicrobeSelector
					data={filteredData}
					selectedMicrobe={selectedMicrobe}
					selectedAntibiotic={selectedAntibiotic}
					onSelectionChange={handleSelectionChange}
				/>
				<RegionSelector
					selectedRegions={selectedRegions}
					onRegionChange={handleRegionChange}
				/>
			</div>
			<div className="col-span-3 p-4">
				<div className="space-y-4">
					<YearSelector
						availableYears={availableYears}
						selectedYear={selectedYear}
						onYearChange={setSelectedYear}
					/>
					<MyChart
						geoData={geoData}
						hoveredRegion={hoveredRegion}
						onHover={handleHover}
						data={data}
						selectedMicrobe={selectedMicrobe}
						selectedAntibiotic={selectedAntibiotic}
						selectedDataSet={selectedDataSet}
						selectedYear={selectedYear}
						chartCall={chartCall}
					/>
					<ResistanceTrendChart
						data={data}
						selectedMicrobe={selectedMicrobe}
						selectedAntibiotic={selectedAntibiotic}
						selectedRegions={selectedRegions}
						selectedDataSet={selectedDataSet}
					/>
				</div>
			</div>
			<div className="col-span-2">
				<div className="space-y-4">
					<DataSetSelector
						selectedDataSet={selectedDataSet}
						onDataSetChange={setSelectedDataSet}
					/>
					<ResistanceChart
						data={data}
						selectedMicrobe={selectedMicrobe}
						selectedAntibiotic={selectedAntibiotic}
						selectedYear={selectedYear}
						hoveredRegion={hoveredRegion}
						selectedDataSet={selectedDataSet}
						onHover={handleHover}
						chartCall={chartCall}
					/>
					<TableView
						data={data}
						selectedMicrobe={selectedMicrobe}
						selectedAntibiotic={selectedAntibiotic}
						selectedYear={selectedYear}
						hoveredRegion={hoveredRegion}
						selectedDataSet={selectedDataSet}
						onHover={handleHover}
					/>
				</div>
			</div>
		</div>
	);
}

const getGradientColor = (value: number) => {
	if (value < 1) return "hsl(var(--red-1))";
	if (value > 1 && value <= 2.5) return "hsl(var(--red-2))";
	if (value > 2.5 && value <= 5) return "hsl(var(--red-3))";
	if (value > 5 && value <= 10) return "hsl(var(--red-4))";
	if (value > 10 && value <= 15) return "hsl(var(--red-5))";
	if (value > 15 && value <= 25) return "hsl(var(--red-6))";
	if (value > 25 && value <= 50) return "hsl(var(--red-7))";
	return "hsl(var(--red-8))";
};

interface MicrobeSelectorProps {
	data: NormDataRecord[];
	selectedMicrobe: string;
	selectedAntibiotic: string;
	onSelectionChange: (microbe: string, antibiotic: string) => void;
}

export function MicrobeSelector({
	data,
	selectedMicrobe,
	selectedAntibiotic,
	onSelectionChange,
}: MicrobeSelectorProps) {
	const microbeAntibiotics = useMemo(() => {
		const mapping: { [key: string]: Set<string> } = {};

		data.forEach((record) => {
			if (!mapping[record.Mikrobe]) {
				mapping[record.Mikrobe] = new Set();
			}
			mapping[record.Mikrobe].add(record.Antibiotika);
		});

		return Object.fromEntries(
			Object.entries(mapping).map(([microbe, antibiotics]) => [
				microbe,
				Array.from(antibiotics).sort(),
			])
		);
	}, [data]);

	const handleAntibioticClick = (microbe: string, antibiotic: string) => {
		onSelectionChange(microbe, antibiotic);
	};

	return (
		<ScrollArea className="h-[600px] rounded-md border p-4">
			<Accordion type="single" collapsible className="w-full">
				{Object.entries(microbeAntibiotics)
					.sort()
					.map(([microbe, antibiotics]) => (
						<AccordionItem key={microbe} value={microbe}>
							<AccordionTrigger className="inline-flex items-center justify-between gap-2 rounded-md px-2 text-sm hover:bg-accent/50 hover:no-underline">
								<div className="flex items-center gap-2">
									<span>{microbe}</span>

									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger asChild>
												<div className="justify-self-end">
													<Info size={16} />
												</div>
											</TooltipTrigger>
											<TooltipContent side="right">
												{getDescription(microbe)}
												<TooltipArrow
													className="-my-px border-none fill-[var(--tooltip-color)] drop-shadow-[0_1px_0_white]"
													width={11}
													height={5}
												/>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div className="flex flex-col space-y-1">
									{antibiotics.map((antibiotic) => (
										<button
											key={`${microbe}-${antibiotic}`}
											className={`rounded-md px-4 py-1 text-left text-sm transition-colors hover:bg-accent ${
												selectedMicrobe === microbe &&
												selectedAntibiotic === antibiotic
													? "bg-accent"
													: ""
											}`}
											onClick={() => handleAntibioticClick(microbe, antibiotic)}
										>
											{antibiotic}
										</button>
									))}
								</div>
							</AccordionContent>
						</AccordionItem>
					))}
			</Accordion>
		</ScrollArea>
	);
}

interface RegionSelectorProps {
	selectedRegions: string[];
	onRegionChange: (region: string) => void;
}

function RegionSelector({
	selectedRegions,
	onRegionChange,
}: RegionSelectorProps) {
	const regions = [
		"Norge",
		"Nord",
		"Midt",
		"Vest",
		"Sør",
		"Øst",
		"Oslo/Akershus",
	];

	return (
		<ScrollArea className="h-[350px] rounded-md border p-4">
			<div className="flex flex-col space-y-2">
				<h3 className="font-medium">Velg regioner</h3>
				{regions.map((region) => (
					<button
						key={region}
						className={`rounded-md px-4 py-2 text-left text-sm transition-colors hover:bg-accent ${
							selectedRegions.includes(region) ? "bg-accent" : ""
						}`}
						onClick={() => onRegionChange(region)}
					>
						{region}
					</button>
				))}
			</div>
		</ScrollArea>
	);
}

interface DataSetSelectorProps {
	selectedDataSet: "Blod" | "Sår" | "Urin" | "Luft";
	onDataSetChange: (dataSet: "Blod" | "Sår" | "Urin" | "Luft") => void;
}

function DataSetSelector({
	selectedDataSet,
	onDataSetChange,
}: DataSetSelectorProps) {
	const dataSets = ["Blod", "Urin", "Luft", "Sår"] as const;

	return (
		<div className="flex flex-row space-x-2">
			{dataSets.map((dataSet) => (
				<Button
					key={dataSet}
					variant={selectedDataSet === dataSet ? "default" : "outline"}
					className="w-full"
					onClick={() => onDataSetChange(dataSet)}
				>
					{dataSet}
				</Button>
			))}
		</div>
	);
}

interface YearSelectorProps {
	availableYears: number[];
	selectedYear?: number;
	onYearChange: (year: number) => void;
}

function YearSelector({
	availableYears,
	selectedYear,
	onYearChange,
}: YearSelectorProps) {
	return (
		<div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
			<ScrollArea className="w-full whitespace-nowrap">
				<div className="flex flex-row justify-center space-x-2 pb-2">
					{availableYears.map((year) => (
						<Button
							key={year}
							variant={selectedYear === year ? "default" : "outline"}
							className="shrink-0"
							onClick={() => onYearChange(year)}
						>
							{year}
						</Button>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
}

interface TableViewProps {
	data: NormDataRecord[];
	selectedMicrobe: string;
	selectedAntibiotic: string;
	selectedYear?: number;
	hoveredRegion: string[] | null;
	selectedDataSet: string;
	onHover: (region: string[] | null, chartCall: string) => void;
}

function TableView({
	data,
	selectedMicrobe,
	selectedAntibiotic,
	selectedYear,
	hoveredRegion,
	selectedDataSet,
	onHover,
}: TableViewProps) {
	const call = "Table";
	const tableData = useMemo(() => {
		if (!selectedMicrobe || !selectedAntibiotic || !selectedYear) {
			return [];
		}

		const regions = ["Oslo/Akershus", "Nord", "Midt", "Vest", "Sør", "Øst"];

		return regions
			.map((region) => {
				const regionData = data.filter(
					(record) =>
						record.region === region &&
						record.Mikrobe === selectedMicrobe &&
						record.Antibiotika === selectedAntibiotic &&
						record.Opplegg === selectedDataSet &&
						parseInt(record.ProveAar) === selectedYear
				);

				if (regionData.length === 0) {
					return {
						region,
						total: "Ikke data",
						resistant: "Ikke data",
						percentage: "Ikke data",
					};
				}

				const total = regionData.reduce(
					(sum, record) => sum + (record.antall || 0),
					0
				);
				const resistant = regionData.reduce(
					(sum, record) => sum + (record.antall_R || 0),
					0
				);
				const percentage =
					total > 0 ? ((resistant / total) * 100).toFixed(1) : "0";

				return {
					region,
					total,
					resistant,
					percentage,
				};
			})
			.sort((a, b) => {
				if (a.total === "Ikke data") return 1;
				if (b.total === "Ikke data") return -1;
				return (Number(b.total) || 0) - (Number(a.total) || 0);
			});
	}, [
		data,
		selectedMicrobe,
		selectedAntibiotic,
		selectedYear,
		selectedDataSet,
	]);

	return (
		<div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Region</TableHead>
						<TableHead className="text-right">Antall (n)</TableHead>
						<TableHead className="text-right">Resistente (n)</TableHead>
						<TableHead className="text-right">
							%-andel ({selectedYear})
						</TableHead>
						<TableHead className="px-0 text-center">
							<Button
								onClick={() => {
									DownloadCSV(tableData, "tableData");
								}}
								variant="ghost"
							>
								<Download />
							</Button>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tableData.map((row) => (
						<TableRow
							key={row.region}
							className={hoveredRegion?.includes(row.region) ? "bg-accent" : ""}
							onMouseEnter={() => onHover([row.region], call)}
							onMouseLeave={() => onHover(null, "")}
						>
							<TableCell>{row.region}</TableCell>
							<TableCell className="text-right">{row.total}</TableCell>
							<TableCell className="text-right">{row.resistant}</TableCell>
							<TableCell className="text-right">{row.percentage}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

interface ResistanceChartProps {
	data: NormDataRecord[];
	selectedMicrobe: string;
	selectedAntibiotic: string;
	selectedYear?: number;
	selectedDataSet: string;
	hoveredRegion: string[] | null;
	onHover: (region: string[] | null, chartCall: string) => void;
	chartCall: string;
}

function ResistanceChart({
	data,
	selectedMicrobe,
	selectedAntibiotic,
	selectedYear,
	selectedDataSet,
	hoveredRegion,
	onHover,
	chartCall,
}: ResistanceChartProps) {
	const call = "Bar";
	const chartRef = useRef<HTMLDivElement>(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [exportOptionsOpen, setExportOptionsOpen] = useState(false);
	const saveName = "ResistanceChart";

	const handleExport = (format: "png" | "svg", resolution: 1 | 2) => {
		exportChartImage(
			"ResistanceChart-id",
			format === "svg",
			saveName,
			resolution
		);
	};

	const openChartInDialog = () => {
		setDialogOpen(true);
	};

	const chartData = useMemo(() => {
		if (!selectedMicrobe || !selectedAntibiotic || !selectedYear) {
			return [];
		}

		const regions = ["Oslo/Akershus", "Nord", "Midt", "Vest", "Sør", "Øst"];
		return regions
			.map((region) => {
				const regionData = data.filter(
					(record) =>
						record.region === region &&
						record.Mikrobe === selectedMicrobe &&
						record.Antibiotika === selectedAntibiotic &&
						record.Opplegg === selectedDataSet &&
						parseInt(record.ProveAar) === selectedYear
				);

				if (regionData.length === 0) {
					return { region, resistance: 0 };
				}

				const total = regionData.reduce(
					(sum, record) => sum + (record.antall || 0),
					0
				);
				const resistant = regionData.reduce(
					(sum, record) => sum + (record.antall_R || 0),
					0
				);
				const percentage = total > 0 ? (resistant / total) * 100 : 0;

				return {
					region,
					resistance: Number(percentage.toFixed(1)),
					fill: getGradientColor(percentage),
				};
			})
			.sort((a, b) => b.resistance - a.resistance);
	}, [
		data,
		selectedMicrobe,
		selectedAntibiotic,
		selectedYear,
		selectedDataSet,
		hoveredRegion,
		chartCall,
	]);

	const maxResistance = useMemo(() => {
		return Math.ceil(Math.max(...chartData.map((d) => d.resistance)));
	}, [chartData]);

	const chartConfig = {
		resistance: {
			label: "Resistens",
			color: "hsl(var(--chart-1))",
		},
	} satisfies ChartConfig;

	if (!selectedMicrobe || !selectedAntibiotic || !selectedYear) {
		return null;
	}

	const renderChart = (aspect: string) => (
		<ChartContainer config={chartConfig} className={`${aspect} w-full`}>
			<BarChart
				data={chartData}
				accessibilityLayer
				margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
				onMouseLeave={() => onHover(null, "")}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="region"
					tickLine={false}
					fontSize={12}
					angle={-45}
					textAnchor="end"
					height={70}
				/>
				<YAxis
					tickLine={false}
					fontSize={12}
					domain={[0, maxResistance]}
					unit="%"
					label={{
						value: "Prosent resistente isolater",
						angle: -90,
						position: "center",
						dx: -20,
					}}
				/>
				{hoveredRegion?.length !== undefined ? (
					chartCall !== call ? (
						<ChartTooltip
							content={<ChartTooltipContent />}
							defaultIndex={chartData.findIndex(
								(item) =>
									item.region ===
									(Array.isArray(hoveredRegion)
										? hoveredRegion[0]
										: (hoveredRegion ?? ""))
							)}
						/>
					) : (
						<ChartTooltip content={<ChartTooltipContent />} />
					)
				) : (
					<ChartTooltip active={false} />
				)}
				<Bar
					dataKey="resistance"
					radius={4}
					onMouseEnter={(data) => onHover([data.region], call)}
				>
					{chartData.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.fill} />
					))}
				</Bar>
			</BarChart>
		</ChartContainer>
	);

	return (
		<div className="rounded-lg border bg-card p-4">
			<div className="mb-2 flex justify-end">
				<Button onClick={() => setExportOptionsOpen(true)} variant="ghost">
					<Download />
				</Button>
				<Button onClick={openChartInDialog} variant="ghost">
					<Maximize2 />
				</Button>
			</div>
			<ExportOptionsDialog
				open={exportOptionsOpen}
				onOpenChange={setExportOptionsOpen}
				onConfirm={handleExport}
			/>
			<div id="ResistanceChart-id" ref={chartRef}>
				{renderChart("aspect-[4/3]")}
			</div>
			<ChartDialog
				open={dialogOpen}
				onOpenChange={setDialogOpen}
				saveName={saveName}
			>
				{dialogOpen && <div>{renderChart("aspect-[5/2]")}</div>}
			</ChartDialog>
		</div>
	);
}

interface ResistanceTrendChartProps {
	data: NormDataRecord[];
	selectedMicrobe: string;
	selectedAntibiotic: string;
	selectedRegions: string[];
	selectedDataSet: string;
}

interface YearDataEntry extends Record<string, number> {
	year: number;
}

function ResistanceTrendChart({
	data,
	selectedMicrobe,
	selectedAntibiotic,
	selectedRegions,
	selectedDataSet,
}: ResistanceTrendChartProps) {
	const [showLineChart, setShowLineChart] = useState(true);
	const [showRegression, setShowRegression] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [exportOptionsOpen, setExportOptionsOpen] = useState(false);
	const saveName = "ResistanceTrendChart";

	const handleExport = (format: "png" | "svg", resolution: 1 | 2) => {
		exportChartImage(
			"ResistanceTrendChart-id",
			format === "svg",
			saveName,
			resolution
		);
	};

	const openChartInDialog = () => {
		setDialogOpen(true);
	};

	const generateRegressionData = (data: YearDataEntry[]) => {
		const years = data.map((entry) => entry.year);

		return selectedRegions.map((region, index) => {
			const regionDataX = years;
			const regionDataY = data.map((entry) => entry.y);

			const regression = new SimpleLinearRegression(regionDataX, regionDataY);
			const regressionLine = regionDataX.map((xValue) => ({
				year: xValue,
				y: regression.predict(xValue),
			}));

			return { region, regressionLine };
		});
	};

	const chartData = useMemo<YearDataEntry[]>(() => {
		if (
			!selectedMicrobe ||
			!selectedAntibiotic ||
			selectedRegions.length === 0
		) {
			return [];
		}

		const yearData = new Map<number, YearDataEntry>();

		data
			.filter(
				(record) =>
					record.Mikrobe === selectedMicrobe &&
					record.Antibiotika === selectedAntibiotic &&
					record.Opplegg === selectedDataSet &&
					selectedRegions.includes(record.region)
			)
			.forEach((record) => {
				const year = parseInt(record.ProveAar);
				if (!yearData.has(year)) {
					yearData.set(year, { year } as YearDataEntry);
				}

				const yearEntry = yearData.get(year)!;
				const region = record.region;

				const total = record.antall || 0;
				const resistant = record.antall_R || 0;

				if (total > 0) {
					yearEntry[region] = Number(((resistant / total) * 100).toFixed(1));
					yearEntry[`${region}-total`] = total;
				}
			});

		const yearArray = Array.from(yearData.values()).sort(
			(a, b) => a.year - b.year
		);

		selectedRegions.forEach((region) => {
			const regionData = yearArray
				.map((entry) => ({
					year: entry.year,
					y: entry[region] ?? 0,
				}))
				.filter((point) => point.y !== 0);

			const regressionLine = generateRegressionData(regionData).find(
				(line) => line.region === region
			)?.regressionLine;

			if (regressionLine && regressionLine.length > 1) {
				const firstPoint = regressionLine.at(0);
				const lastPoint = regressionLine.at(-1);

				[firstPoint, lastPoint].forEach((point) => {
					if (point) {
						const yearEntry = yearData.get(point.year);
						if (yearEntry) {
							yearEntry[`${region}-regression`] = point.y;
						}
					}
				});
			}
		});

		return yearArray;
	}, [
		data,
		selectedMicrobe,
		selectedAntibiotic,
		selectedRegions,
		selectedDataSet,
	]);

	const maxResistance = useMemo(() => {
		if (chartData.length === 0) return 100;
		const maxValues = chartData.map((entry) =>
			Math.max(...selectedRegions.map((region) => entry[region] || 0))
		);
		return Math.ceil(Math.max(...maxValues));
	}, [chartData, selectedRegions]);

	const maxTotal = useMemo(() => {
		if (chartData.length === 0) return 250;
		const maxValues = chartData.map((entry) =>
			Math.max(
				...selectedRegions.map((region) => entry[`${region}-total`] || 0)
			)
		);
		return Math.ceil(Math.max(...maxValues));
	}, [chartData, selectedRegions]);

	const regionColors: { [key: string]: string } = {
		"Oslo/Akershus": "hsl(var(--chart-1))",
		Nord: "hsl(var(--chart-2))",
		Midt: "hsl(var(--chart-3))",
		Vest: "hsl(var(--chart-4))",
		Sør: "hsl(var(--chart-5))",
		Øst: "hsl(var(--chart-6))",
		Norge: "hsl(var(--chart-7))",
	};

	const chartConfig = Object.fromEntries(
		selectedRegions.map((region) => [
			region,
			{
				label: region,
				color: regionColors[region],
			},
		])
	) satisfies ChartConfig;

	if (!selectedMicrobe || !selectedAntibiotic || selectedRegions.length === 0) {
		return null;
	}

	const handleLineChartChange = (checked: boolean) => {
		if (checked) {
			setShowLineChart(true);
			setShowRegression(false);
		} else {
			setShowLineChart(false);
		}
	};

	const handleRegressionChange = (checked: boolean) => {
		if (checked) {
			setShowRegression(true);
			setShowLineChart(false);
		} else {
			setShowRegression(false);
		}
	};

	const renderChart = (aspect: string) => (
		<div>
			<div className="mb-4 flex items-center space-x-4">
				<div className="flex items-center space-x-2">
					<Checkbox
						id="show-line-chart"
						className="peer rounded-none border-2 border-gray-400"
						checked={showLineChart}
						onCheckedChange={(checked) =>
							handleLineChartChange(checked === true)
						}
					/>
					<label
						htmlFor="show-line-chart"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Antall prøveisolater
					</label>
				</div>

				<div className="flex items-center space-x-2">
					<Checkbox
						id="show-regression-line"
						className="peer rounded-none border-2 border-gray-400"
						checked={showRegression}
						onCheckedChange={(checked) =>
							handleRegressionChange(checked === true)
						}
					/>
					<label
						htmlFor="show-regression-line"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Trend
					</label>
				</div>
			</div>

			<ChartContainer config={chartConfig} className={`${aspect} w-full`}>
				<ComposedChart
					data={chartData}
					margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
				>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="year" tickLine={false} fontSize={12} />
					<YAxis
						tickLine={false}
						fontSize={12}
						domain={[0, maxResistance]}
						unit="%"
						label={{
							value: "Prosent resistente isolater",
							angle: -90,
							position: "center",
							dx: -20,
						}}
						yAxisId="left"
						orientation="left"
					/>
					{showLineChart && (
						<YAxis
							tickLine={false}
							fontSize={12}
							domain={[0, maxTotal]}
							label={{
								value: "Antall prøveisolater",
								angle: -90,
								position: "center",
								dx: 20,
							}}
							yAxisId="right"
							orientation="right"
						/>
					)}
					<ChartTooltip content={<ChartTooltipContent trendChart={true} />} />

					<Legend></Legend>
					{selectedRegions.map((region) => (
						<Bar
							yAxisId="left"
							key={region}
							dataKey={region}
							name={region}
							fill={regionColors[region]}
							radius={4}
							opacity={0.7}
						/>
					))}

					{showLineChart &&
						selectedRegions.map((region) => (
							<Line
								yAxisId="right"
								key={`${region}-total`}
								type="monotone"
								dataKey={`${region}-total`}
								stroke={regionColors[region]}
								legendType="none"
								tooltipType="none"
								strokeWidth={2}
							/>
						))}

					{showRegression &&
						selectedRegions.map((region) => (
							<Line
								yAxisId="left"
								key={`${region}-regression`}
								type="monotone"
								dataKey={`${region}-regression`}
								stroke={regionColors[region]}
								strokeWidth={2}
								legendType="none"
								connectNulls={true}
							/>
						))}
				</ComposedChart>
			</ChartContainer>
		</div>
	);

	return (
		<div className="rounded-lg border bg-card p-4">
			<div className="mb-2 flex justify-end">
				<Button onClick={() => setExportOptionsOpen(true)} variant="ghost">
					<Download />
				</Button>
				<Button onClick={openChartInDialog} variant="ghost">
					<Maximize2 />
				</Button>
			</div>
			<ExportOptionsDialog
				open={exportOptionsOpen}
				onOpenChange={setExportOptionsOpen}
				onConfirm={handleExport}
			/>
			<div id="ResistanceTrendChart-id">{renderChart("aspect-video")}</div>
			<ChartDialog
				open={dialogOpen}
				onOpenChange={setDialogOpen}
				saveName={saveName}
			>
				{dialogOpen && <div>{renderChart("aspect-[5/2]")}</div>}
			</ChartDialog>
		</div>
	);
}

const useWindowSize = () => {
	const [size, setSize] = useState<{ width: number; height: number }>({
		width: 1000,
		height: 800,
	});

	useMemo(() => {
		if (typeof window === "undefined") return;

		const handleResize = () => {
			setSize({ width: window.innerWidth, height: window.innerHeight });
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return size;
};

export interface MyChartProps {
	geoData: GeoJson;
	hoveredRegion: string[] | null;
	onHover: (region: string[] | null, chartCall: string) => void;
	data: NormDataRecord[];
	selectedMicrobe: string;
	selectedAntibiotic: string;
	selectedDataSet: string;
	selectedYear?: number;
	chartCall: string;
}

export const MyChart = forwardRef<SVGSVGElement, MyChartProps>(
	(
		{
			geoData,
			hoveredRegion,
			onHover,
			data,
			selectedMicrobe,
			selectedAntibiotic,
			selectedDataSet,
			selectedYear,
			chartCall,
		},
		ref: React.Ref<SVGSVGElement>
	) => {
		const chartRef = useRef<SVGSVGElement>(null);
		const { width, height } = useWindowSize();
		const [tooltip, setTooltip] = useState<{
			visible: boolean;
			x: number;
			y: number;
			text: string;
		}>({
			visible: false,
			x: 0,
			y: 0,
			text: "",
		});
		const call = "Map";
		const [exportOptionsOpen, setExportOptionsOpen] = useState(false);

		const handleExport = (format: "png" | "svg", resolution: 1 | 2) => {
			exportChartImage(
				"map-chart-id",
				format === "svg",
				"map-chart",
				resolution
			);
		};

		useImperativeHandle(ref, () => chartRef.current!);

		const [forceRender, setForceRender] = useState(false);

		useEffect(() => {
			setForceRender(true);
		}, []);

		useMemo(() => {
			if (!chartRef.current || !geoData) return;

			const svg = d3.select(chartRef.current);
			svg.selectAll("g").remove();

			const projection: GeoProjection = geoMercator()
				.scale(1350)
				.translate([100, 2450]);

			const pathGenerator = geoPath(projection);

			const g = svg.append("g");

			const regions: Record<string, string[]> = {
				Nord: ["Nordland", "Troms", "Finnmark"],
				Midt: ["Trøndelag", "Møre og Romsdal"],
				Vest: ["Vestland", "Rogaland"],
				Sør: ["Telemark", "Agder"],
				Øst: ["Buskerud", "Innlandet", "Vestfold", "Østfold"],
				"Oslo/Akershus": ["Oslo", "Akershus"],
			};

			const stateToRegion: Record<string, string> = {};
			Object.entries(regions).forEach(([region, states]) => {
				states.forEach((state) => {
					stateToRegion[state] = region;
				});
			});

			const tableData = Object.keys(regions).map((region) => {
				const regionData = data.filter(
					(record) =>
						region.includes(record.region) &&
						record.Mikrobe === selectedMicrobe &&
						record.Antibiotika === selectedAntibiotic &&
						record.Opplegg === selectedDataSet &&
						parseInt(record.ProveAar) === selectedYear
				);

				if (regionData.length === 0) {
					return {
						region,
						total: "Ikke data",
						resistant: "Ikke data",
						percentage: "Ikke data",
					};
				}

				const total = regionData.reduce(
					(sum, record) => sum + (record.antall || 0),
					0
				);
				const resistant = regionData.reduce(
					(sum, record) => sum + (record.antall_R || 0),
					0
				);
				const percentage =
					total > 0 ? ((resistant / total) * 100).toFixed(1) : "0";

				return {
					region,
					total,
					resistant,
					percentage,
				};
			});

			const regionResistance: Record<string, string> = tableData.reduce(
				(acc, item) => {
					acc[item.region] = item.percentage;
					return acc;
				},
				{} as Record<string, string>
			);

			function rewind(geo: any) {
				{
					const fixedGeoJSON = { ...geo };
					fixedGeoJSON.features = fixedGeoJSON.features.map((f: any) =>
						turf.rewind(f, { reverse: true })
					);
					return fixedGeoJSON;
				}
			}

			const test = rewind(geoData);

			function getLegendLabel(value: number | string): string {
				if (value === "Ikke data") return "Ikke Data";
				if (typeof value === "string") value = parseFloat(value);
				if (value < 1) return "<1%";
				if (value > 1 && value <= 2.5) return "1-2.5%";
				if (value > 2.5 && value <= 5) return "2.5-5%";
				if (value > 5 && value <= 10) return "5-10%";
				if (value > 10 && value <= 15) return "10-15%";
				if (value > 15 && value <= 25) return "15-25%";
				if (value > 25 && value <= 50) return "25-50%";
				return ">50%";
			}

			g.append("g")
				.selectAll("path")
				.data(test.features)
				.enter()
				.append("path")
				.attr("d", (d: any) => pathGenerator(d))
				.attr("stroke", "#000")
				.attr("fill", "none");

			const highlightedRegions = g
				.append("g")
				.attr("id", "highlighted-regions");

			Object.entries(regions).forEach(([region, states]) => {
				const regionFeatures = test.features.filter((d: any) =>
					states.includes(d.properties.name)
				);

				const regionGroup = highlightedRegions
					.append("g")
					.attr("id", `region-${region}`);

				const regionPaths = regionGroup
					.selectAll("path")
					.data(regionFeatures)
					.enter()
					.append("path")
					.attr("d", (d: any) => pathGenerator(d))
					.attr("stroke", "black")
					.attr("stroke-width", 1)
					.attr("fill", (d: any) => {
						const regionName = stateToRegion[d.properties.name];
						const percentage = regionResistance[regionName] || "0";
						return percentage !== "Ikke data"
							? getGradientColor(parseFloat(percentage))
							: "lightgrey";
					})
					.attr("data-region", region)
					.attr("data-percentage", (d: any) => {
						const regionName = stateToRegion[d.properties.name];
						const rawValue = regionResistance[regionName] || "Ikke data";
						return getLegendLabel(rawValue);
					})
					.attr("region", "region");

				regionPaths
					.on("mouseover", function (event, d: any) {
						const regionName =
							[stateToRegion[d.properties.name]] || hoveredRegion;
						onHover(regionName, call);

						const regionData = tableData.find(
							(item) => item.region === regionName[0]
						);
						const percentage = regionData
							? `${regionData.percentage}%`
							: "Ikke data";

						d3.selectAll(`[region=region]`).style("opacity", 0.3);
						d3.selectAll(`[data-region='${regionName}']`).style("opacity", 1);

						if (hoveredRegion) {
							setTooltip({
								visible: true,
								x: event.pageX,
								y: event.pageY,
								text: `${regionName}:, ${percentage}`,
							});
						}
					})
					.on("mouseout", function () {
						onHover(null, "");
						d3.selectAll("path").style("opacity", 1);
						setTooltip({ visible: false, x: 0, y: 0, text: "" });
					});
				setTooltip({ visible: false, x: 0, y: 0, text: "" });

				if (hoveredRegion && chartCall !== call) {
					d3.selectAll(`[region=region]`).style("opacity", 0.3);

					d3.selectAll(`[data-region='${hoveredRegion}']`).style("opacity", 1);
				}
			});

			const legendWidth = 230;
			const legendHeight = 230;

			const legend = svg.append("g").attr("transform", `translate(855, 565)`);

			legend
				.append("rect")
				.attr("width", legendWidth)
				.attr("height", legendHeight)
				.attr("fill", "#fff")
				.attr("stroke", "#000")
				.attr("stroke-width", 1);

			const titleHeight = 30;
			const titlePadding = 10;

			legend
				.append("rect")
				.attr("x", 0)
				.attr("y", 0)
				.attr("width", legendWidth)
				.attr("height", 30)
				.attr("fill", "#d1d5db");

			legend
				.append("text")
				.attr("x", titlePadding)
				.attr("y", titleHeight / 2)
				.attr("dy", ".35em")
				.style("font-size", "16px")
				.style("font-weight", "bold")
				.text("Kategorier: %-andeler");

			const colors = [
				"lightgrey",
				"hsl(var(--red-1))",
				"hsl(var(--red-2))",
				"hsl(var(--red-3))",
				"hsl(var(--red-4))",
				"hsl(var(--red-5))",
				"hsl(var(--red-6))",
				"hsl(var(--red-7))",
				"hsl(var(--red-8))",
			];

			const labels = [
				"Ikke Data",
				"<1%",
				"1-2.5%",
				"2.5-5%",
				"5-10%",
				"10-15%",
				"15-25%",
				"25-50%",
				">50%",
			];

			labels.forEach((label, index) => {
				legend
					.append("rect")
					.attr("x", 10)
					.attr("y", 40 + index * 20)
					.attr("width", 14)
					.attr("height", 14)
					.attr("fill", colors[index])
					.attr("data-percentage-label", label);

				legend
					.append("text")
					.attr("x", 30)
					.attr("y", 47 + index * 20)
					.attr("dy", ".35em")
					.style("font-size", "16px")
					.text(label)
					.attr("data-percentage-label", label);
			});
			legend
				.selectAll("text")
				.on("mouseenter", function () {
					const label = d3.select(this).attr("data-percentage-label");

					if (!d3.selectAll(`[data-percentage='${label}']`).node()) {
						d3.selectAll(`[data-percentage-label]`).style("opacity", 0.3);
						d3.selectAll(`[data-percentage-label='${label}']`).style(
							"opacity",
							1
						);
					} else {
						const uniqueRegions = d3
							.selectAll(`[data-percentage='${label}']`)
							.nodes()
							.map((node) =>
								node instanceof Element
									? node.getAttribute("data-region")
									: null
							)
							.filter((region): region is string => region !== null);

						const uniqueRegionNames = [...new Set(uniqueRegions)];

						onHover(uniqueRegionNames, call);
						d3.selectAll(`[data-percentage-label]`).style("opacity", 0.3);
						d3.selectAll(`[data-percentage-label='${label}']`).style(
							"opacity",
							1
						);
						d3.selectAll(`[data-percentage]`).style("opacity", 0.3);
						d3.selectAll(`[data-percentage='${label}']`).style("opacity", 1);
					}
				})
				.on("mouseleave", function () {
					d3.selectAll(`[data-region]`).style("opacity", 1);
					d3.selectAll(`[data-percentage-label]`).style("opacity", 1);
					onHover(null, "");
				});
		}, [
			geoData,
			width,
			height,
			data,
			hoveredRegion,
			selectedMicrobe,
			selectedAntibiotic,
			selectedDataSet,
			selectedYear,
			forceRender,
		]);

		return (
			<div className="chart-container rounded-lg border bg-card pb-4 text-card-foreground shadow-sm">
				<div className="mb-2">
					<div className="flex items-center justify-between rounded-t-lg bg-gray-300 px-4 py-3 font-bold text-gray-800 shadow-md">
						<span>
							{selectedDataSet} (Andel R): {selectedMicrobe} -{" "}
							{selectedAntibiotic} ({selectedYear})
						</span>
						<div className="flex gap-2">
							<Button
								onClick={() => setExportOptionsOpen(true)}
								variant="ghost"
							>
								<Download />
							</Button>
						</div>
					</div>
				</div>
				<ExportOptionsDialog
					open={exportOptionsOpen}
					onOpenChange={setExportOptionsOpen}
					onConfirm={handleExport}
				/>

				<ScrollArea className="w-full whitespace-nowrap">
					<svg
						id="map-chart-id"
						ref={chartRef}
						className="chart-svg h-full w-full"
						viewBox="0 0 1100 800"
						preserveAspectRatio="xMidYMid meet"
					></svg>
				</ScrollArea>

				{hoveredRegion && tooltip.visible && (
					<div
						className={`tooltip absolute z-50 rounded bg-black bg-opacity-70 p-2 text-sm text-white ${
							hoveredRegion ? "visible" : ""
						}`}
						style={{
							left: `${tooltip.x + 10}px`,
							top: `${tooltip.y + 10}px`,
						}}
					>
						{tooltip.text}
					</div>
				)}
			</div>
		);
	}
);

MyChart.displayName = "MyChart";
