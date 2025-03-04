"use client";

import { NormDataRecord } from "@/lib/data/csvUtils";
import React, {
	forwardRef,
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
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Cell } from "recharts";
import * as d3 from "d3";
import { geoPath, geoMercator, GeoProjection } from "d3-geo";
import { GeoJson } from "@/lib/data/geojsonLoader";

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
	const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

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
			<div className="col-span-3">
				<div className="space-y-4">
					<div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
						<div className="text-sm">
							{selectedMicrobe && selectedAntibiotic ? (
								<span>
									Viser data for{" "}
									<span className="font-semibold">{selectedMicrobe}</span> mot{" "}
									<span className="font-semibold">{selectedAntibiotic}</span> i{" "}
									<span className="font-semibold">{selectedYear}</span>
								</span>
							) : (
								<span>Velg mikrobe og antibiotika for å se data</span>
							)}
						</div>
					</div>
					<YearSelector
						availableYears={availableYears}
						selectedYear={selectedYear}
						onYearChange={setSelectedYear}
					/>
					<MyChart
						geoData={geoData}
						hoveredRegion={hoveredRegion}
						onHover={setHoveredRegion}
						data={data}
						selectedMicrobe={selectedMicrobe}
						selectedAntibiotic={selectedAntibiotic}
						selectedDataSet={selectedDataSet}
						selectedYear={selectedYear}
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
						selectedDataSet={selectedDataSet}
						onHover={setHoveredRegion}
					/>
					<TableView
						data={data}
						selectedMicrobe={selectedMicrobe}
						selectedAntibiotic={selectedAntibiotic}
						selectedYear={selectedYear}
						hoveredRegion={hoveredRegion}
						selectedDataSet={selectedDataSet}
						onHover={setHoveredRegion}
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
							<AccordionTrigger className="rounded-md px-2 text-sm hover:bg-accent/50 hover:no-underline">
								{microbe}
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
	hoveredRegion: string | null;
	selectedDataSet: string;
	onHover: (region: string | null) => void;
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
					</TableRow>
				</TableHeader>
				<TableBody>
					{tableData.map((row) => (
						<TableRow
							key={row.region}
							className={hoveredRegion === row.region ? "bg-accent" : ""}
							onMouseEnter={() => onHover(row.region)}
							onMouseLeave={() => onHover(null)}
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
	onHover: (region: string | null) => void;
}

function ResistanceChart({
	data,
	selectedMicrobe,
	selectedAntibiotic,
	selectedYear,
	selectedDataSet,
	onHover,
}: ResistanceChartProps) {
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

	return (
		<div className="rounded-lg border bg-card p-4">
			<ChartContainer config={chartConfig} className="aspect-[4/3] w-full">
				<BarChart
					data={chartData}
					accessibilityLayer
					margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
					onMouseLeave={() => onHover(null)}
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
							value: "Resistens (%)",
							angle: -90,
							position: "insideLeft",
						}}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<Bar
						dataKey="resistance"
						radius={4}
						onMouseEnter={(data) => onHover(data.region)}
					>
						{chartData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.fill} />
						))}
					</Bar>
				</BarChart>
			</ChartContainer>
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
					yearEntry[region] = (resistant / total) * 100;
				}
			});

		return Array.from(yearData.values()).sort((a, b) => a.year - b.year);
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

	return (
		<div className="rounded-lg border bg-card p-4">
			<ChartContainer config={chartConfig} className="aspect-video w-full">
				<BarChart
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
							value: "Resistens (%)",
							angle: -90,
							position: "insideLeft",
						}}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					{selectedRegions.map((region) => (
						<Bar
							key={region}
							dataKey={region}
							name={region}
							fill={regionColors[region]}
							radius={4}
						/>
					))}
				</BarChart>
			</ChartContainer>
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
	hoveredRegion: string | null;
	onHover: (region: string | null) => void;
	data: NormDataRecord[];
	selectedMicrobe: string;
	selectedAntibiotic: string;
	selectedDataSet: string;
	selectedYear?: number;
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
		},
		ref: React.Ref<SVGSVGElement>
	) => {
		const chartRef = useRef<SVGSVGElement>(null);
		const { width, height } = useWindowSize();
		const [mouseOn, setMouseOn] = useState<boolean | null>(null);
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

		useImperativeHandle(ref, () => chartRef.current!);

		useMemo(() => {
			if (!chartRef.current || !geoData) return;

			const svg = d3.select(chartRef.current);
			svg.selectAll("g").remove();

			const projection: GeoProjection = geoMercator()
				.scale(1000)
				.translate([100, 1900]);

			const pathGenerator = geoPath(projection);

			const g = svg.append("g").attr("id", "areas");

			const regions: Record<string, string[]> = {
				Nord: ["Nordland", "Troms", "Finnmark"],
				Midt: ["Sør-Trøndelag", "Nord-Trøndelag"],
				Vest: ["Hordaland", "Sogn og Fjordane", "Møre og Romsdal", "Rogaland"],
				Sør: ["Telemark", "Aust-Agder", "Vest-Agder"],
				Øst: ["Buskerud", "Oppland", "Hedmark", "Vestfold", "Østfold"],
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

			const regionResistance: Record<string, number> = tableData.reduce(
				(acc, item) => {
					acc[item.region] = parseFloat(item.percentage);
					return acc;
				},
				{} as Record<string, number>
			);

			g.append("g")
				.selectAll("path")
				.data(geoData.features)
				.enter()
				.append("path")
				.attr("d", (d: any) => pathGenerator(d))
				.attr("stroke", "#000")
				.attr("fill", "none");

			const highlightedRegions = g
				.append("g")
				.attr("id", "highlighted-regions");

			Object.entries(regions).forEach(([region, states]) => {
				const regionFeatures = geoData.features.filter((d: any) =>
					states.includes(d.properties.NAVN)
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
						const regionName = stateToRegion[d.properties.NAVN];
						const percentage = regionResistance[regionName] || 0;
						return getGradientColor(percentage);
					})
					.attr("data-region", region)
					.attr("region", "region");

				regionPaths
					.on("mouseenter", function (event, d: any) {
						const regionName =
							stateToRegion[d.properties.NAVN] || hoveredRegion;
						onHover(regionName);
						setMouseOn(true);

						const regionData = tableData.find(
							(item) => item.region === regionName
						);
						const percentage = regionData
							? `${regionData.percentage}%`
							: "Ikke data";

						d3.selectAll(`[region=region]`).style("opacity", 0.3);
						d3.selectAll(`[data-region='${regionName}']`).style("opacity", 1);

						setTooltip({
							visible: true,
							x: event.pageX,
							y: event.pageY,
							text: `${regionName}:, ${percentage}`,
						});
					})
					.on("mousemove", function (event) {
						setTooltip((prev) => ({
							...prev,
							x: event.pageX,
							y: event.pageY,
						}));
					})
					.on("mouseleave", function () {
						onHover(null);
						setMouseOn(false);
						d3.selectAll("path").style("opacity", 1);
						setTooltip({ visible: false, x: 0, y: 0, text: "" });
					});

				if (hoveredRegion && !mouseOn) {
					d3.selectAll(`[region=region]`).style("opacity", 0.3);

					d3.selectAll(`[data-region='${hoveredRegion}']`).style("opacity", 1);
				} else {
					d3.selectAll("path").style("opacity", 1);
				}
			});

			const legendWidth = 200;
			const legendHeight = 180;

			const legend = svg.append("g").attr("transform", `translate(800, 620)`);

			legend
				.append("rect")
				.attr("width", legendWidth)
				.attr("height", legendHeight)
				.attr("fill", "#fff")
				.attr("stroke", "#000")
				.attr("stroke-width", 1);

			const colors = [
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
					.attr("y", 13 + index * 20)
					.attr("width", 14)
					.attr("height", 14)
					.attr("fill", colors[index]);

				legend
					.append("text")
					.attr("x", 30)
					.attr("y", 20 + index * 20)
					.attr("dy", ".35em")
					.style("font-size", "16px")
					.text(label);
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
		]);

		return (
			<div className="chart-container rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
				<ScrollArea className="w-full whitespace-nowrap">
					<svg
						ref={chartRef}
						className="chart-svg h-full w-full"
						viewBox="0 0 1000 800"
						preserveAspectRatio="xMidYMid meet"
					></svg>
				</ScrollArea>

				{tooltip.visible && (
					<div
						className="tooltip pointer-events-none absolute z-50 rounded bg-black bg-opacity-70 p-2 text-sm text-white"
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
