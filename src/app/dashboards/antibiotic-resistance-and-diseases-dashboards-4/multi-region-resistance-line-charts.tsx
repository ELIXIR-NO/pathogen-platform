"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { NormDataRecord } from "@/lib/data/csvUtils";
import {
	Line,
	LineChart,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	ReferenceLine,
} from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartConfig,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";
import DownloadCSV from "@/lib/data/dataExport";

export function MultiRegionResistanceLineCharts({
	microbes,
	antibiotics,
	regions,
	sampleType,
	data,
}: {
	microbes: string[];
	antibiotics: string[];
	regions: string[];
	sampleType: string[];
	data: NormDataRecord[];
}) {
	const [selectedAntibiotics, setSelectedAntibiotics] = useState<string[]>([]);
	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [selectedMicrobes, setSelectedMicrobes] = useState<string[]>([]);
	const [selectedSampleType, setSelectedSampleType] = useState<string[]>([]);
	const [hoveredYear, setHoveredYear] = useState<number | null>(null);

	const handleSelectionChange = useCallback(
		(setter: React.Dispatch<React.SetStateAction<string[]>>) =>
			(item: string) => {
				setter((prev) =>
					prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
				);
			},
		[]
	);

	const filteredData = useMemo(() => {
		if (
			selectedMicrobes.length === 0 ||
			selectedSampleType.length === 0 ||
			selectedRegions.length === 0
		) {
			return [];
		}
		return data.filter((item) => {
			const regionMatch = selectedRegions.includes(item.region);
			const microbeMatch = selectedMicrobes.includes(item.Mikrobe);
			const sampleTypeMatch = selectedSampleType.includes(item.Opplegg);
			return regionMatch && microbeMatch && sampleTypeMatch;
		});
	}, [selectedRegions, selectedMicrobes, selectedSampleType, data]);

	const chartDataByAntibiotic = useMemo(() => {
		const dataByAntibiotic: Record<string, any[]> = {};
		selectedAntibiotics.forEach((antibiotic) => {
			const antibioticData: Record<number, Record<string, any>> = {};
			filteredData
				.filter((item) => item.Antibiotika === antibiotic)
				.forEach((item) => {
					const year = parseInt(item.ProveAar);
					if (!antibioticData[year]) {
						antibioticData[year] = { year, antallByRegion: {} };
					}
					if (!antibioticData[year]) {
						antibioticData[year] = { year, antallByRegion: {} };
					}
					const key = `${item.region}`;
					antibioticData[year][key] = item.Andel_R;
					antibioticData[year].antallByRegion[key] = item.antall || "0";
					antibioticData[year].antallByRegion[key] = item.antall || "0";
				});
			dataByAntibiotic[antibiotic] = Object.values(antibioticData).sort(
				(a, b) => a.year - b.year
			);
		});
		return dataByAntibiotic;
	}, [filteredData, selectedAntibiotics]);

	const generateHslColor = (index: number, total: number) => {
		const hue = (index * 360) / total;
		return `hsl(${hue}, 70%, 50%)`;
	};

	const chartConfig = useMemo(() => {
		const keys = selectedRegions.map((region) => `${region}`);
		return keys.reduce(
			(acc, key, index) => {
				acc[key] = {
					label: key,
					color: generateHslColor(index, keys.length),
				};
				return acc;
			},
			{} as Record<string, { label: string; color: string }>
		);
	}, [selectedRegions]) satisfies ChartConfig;

	const resetSelections = useCallback(() => {
		setSelectedAntibiotics([]);
		setSelectedRegions([]);
		setSelectedMicrobes([]);
		setSelectedSampleType([]);
	}, []);

	const renderDropdown = (
		title: string,
		items: string[],
		selectedItems: string[],
		onChange: (item: string) => void,
		all: boolean = true
	) => {
		const isNoData = items.length === 0;
		return (
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" disabled={isNoData}>
						{isNoData ? "Ingen valg tilgjengelig" : title}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="max-h-80 overflow-auto">
					{all && !isNoData && (
						<DropdownMenuCheckboxItem
							key="select-all"
							checked={selectedItems.length === items.length}
							onCheckedChange={(checked) => {
								if (checked) {
									items.forEach((item) => {
										if (!selectedItems.includes(item)) {
											onChange(item);
										}
									});
								} else {
									items.forEach((item) => {
										if (selectedItems.includes(item)) {
											onChange(item);
										}
									});
								}
							}}
						>
							Select All
						</DropdownMenuCheckboxItem>
					)}
					{items.map((item) => (
						<DropdownMenuCheckboxItem
							key={item}
							checked={selectedItems.includes(item)}
							onCheckedChange={() => onChange(item)}
							onSelect={(e) => e.preventDefault()}
						>
							{item}
						</DropdownMenuCheckboxItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	};

	const handleMouseMove = (region: string, props: any) => {
		if (props.activeTooltipIndex !== undefined) {
			const year =
				chartDataByAntibiotic[region][props.activeTooltipIndex]?.year;
			setHoveredYear(year);
		}
	};

	const handleMouseLeave = () => {
		setHoveredYear(null);
	};

	const CustomTooltip = ({ active, payload, label }: any) => {
		if (active && payload && payload.length) {
			const antallByRegion = payload[0]?.payload.antallByRegion || {};

			return (
				<div className="rounded border bg-white p-4 shadow">
					<p className="font-bold">{`Year: ${label}`}</p>
					{payload.map((entry: any, index: number) => {
						const count = antallByRegion[entry.name] || 0;
						return (
							<div key={index} style={{ color: entry.color }}>
								<p>
									{`${entry.name} (Occ % / Samples): ${entry.value.toFixed(2)}% / ${count}`}
								</p>
							</div>
						);
					})}
					{payload.map((entry: any, index: number) => {
						const count = antallByRegion[entry.name] || 0;
						return (
							<div key={index} style={{ color: entry.color }}>
								<p>
									{`${entry.name} (Occ % / Samples): ${entry.value.toFixed(2)}% / ${count}`}
								</p>
							</div>
						);
					})}
				</div>
			);
		}
		return null;
	};

	const handleUniqueChange = useCallback(
		(setter: React.Dispatch<React.SetStateAction<string[]>>) =>
			(item: string) => {
				setSelectedAntibiotics([]);
				setter([item]);
			},
		[]
	);

	const uniqueFiltered = useMemo(() => {
		const uniqueSet = new Set(filteredData.map((item) => item.Antibiotika));
		return Array.from(uniqueSet);
	}, [filteredData]);

	const filteredDownloadData = selectedAntibiotics.flatMap(
		(antibiotic) =>
			filteredData.filter((item) => item.Antibiotika === antibiotic) || []
	);

	return (
		<div className="flex w-full flex-col space-y-4">
			<div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2">
				<h2 className="text-xl font-bold">Filters</h2>
				{renderDropdown(
					"Velg prøvetype",
					sampleType,
					selectedSampleType,
					handleUniqueChange(setSelectedSampleType),
					false
				)}
				{renderDropdown(
					"Velg mikrober",
					microbes,
					selectedMicrobes,
					handleUniqueChange(setSelectedMicrobes),
					false
				)}
				{renderDropdown(
					"Velg regioner",
					regions,
					selectedRegions,
					handleSelectionChange(setSelectedRegions)
				)}
				{renderDropdown(
					"Velg antibiotika",
					uniqueFiltered,
					selectedAntibiotics,
					handleSelectionChange(setSelectedAntibiotics)
				)}
				<Button variant="outline" onClick={resetSelections}>
					Tilbakestill
				</Button>
				<Button
					variant="outline"
					onClick={() => {
						DownloadCSV(filteredDownloadData, "Filtered_Data");
					}}
					disabled={
						filteredDownloadData.length === 0 ||
						selectedAntibiotics.length === 0
					}
				>
					Last ned data
				</Button>
			</div>
			<div className="flex flex-col space-y-4">
				{selectedSampleType.length > 0 &&
					selectedMicrobes.length > 0 &&
					selectedRegions.length > 0 &&
					selectedAntibiotics.length > 0 && (
						<h1 className="mb-2 text-center text-lg font-semibold">
							{selectedSampleType} / {selectedMicrobes}
						</h1>
					)}
				{selectedAntibiotics.map((antibiotic) => (
					<ChartContainer
						key={antibiotic}
						config={chartConfig}
						className="h-[300px] w-full"
					>
						<div className="h-full w-full">
							<h3 className="mb-2 text-lg font-semibold">{antibiotic}</h3>
							<ResponsiveContainer width="100%" height="90%">
								<LineChart
									data={chartDataByAntibiotic[antibiotic]}
									onMouseMove={(props) => handleMouseMove(antibiotic, props)}
									onMouseLeave={handleMouseLeave}
								>
									<CartesianGrid strokeDasharray="5 5" />
									<XAxis
										dataKey="year"
										tickFormatter={(value) => value.toString()}
										tickCount={12}
									/>
									<YAxis
										label={{
											value: "Occurrences (%)",
											angle: -90,
											position: "insideLeft",
										}}
									/>
									<ChartTooltip content={<CustomTooltip />} />
									<ChartLegend content={<ChartLegendContent />} />
									{Object.keys(chartConfig).map((key) => (
										<Line
											key={key}
											type="monotone"
											dataKey={key}
											stroke={chartConfig[key].color}
											dot={true}
										/>
									))}
									{hoveredYear && (
										<ReferenceLine
											x={hoveredYear}
											stroke="red"
											strokeDasharray="3 3"
										/>
									)}
								</LineChart>
							</ResponsiveContainer>
						</div>
					</ChartContainer>
				))}
			</div>
		</div>
	);
}
