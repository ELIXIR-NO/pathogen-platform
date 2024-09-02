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

export function MultiRegionResistanceLineCharts({
	microbes,
	antibiotics,
	regions,
	data,
}: {
	microbes: string[];
	antibiotics: string[];
	regions: string[];
	data: NormDataRecord[];
}) {
	const [selectedAntibiotics, setSelectedAntibiotics] = useState<string[]>([
		"Ceftazidim",
		"Ciprofloxacin",
	]);
	const [selectedRegions, setSelectedRegions] = useState<string[]>([
		"Norge",
		"Nord",
	]);
	const [selectedMicrobes, setSelectedMicrobes] = useState<string[]>([
		"Pseudomonas aeruginosa",
	]);
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
			selectedAntibiotics.length === 0 ||
			selectedRegions.length === 0
		) {
			return [];
		}
		return data.filter((item) => {
			const antibioticMatch = selectedAntibiotics.includes(item.Antibiotika);
			const regionMatch = selectedRegions.includes(item.region);
			const microbeMatch = selectedMicrobes.includes(item.Mikrobe);
			return antibioticMatch && regionMatch && microbeMatch;
		});
	}, [selectedAntibiotics, selectedRegions, selectedMicrobes, data]);

	const chartDataByRegion = useMemo(() => {
		const dataByRegion: Record<string, any[]> = {};
		selectedRegions.forEach((region) => {
			const regionData: Record<number, Record<string, number>> = {};
			filteredData
				.filter((item) => item.region === region)
				.forEach((item) => {
					const year = parseInt(item.ProveAar);
					if (!regionData[year]) regionData[year] = { year };
					const key = `${item.Mikrobe}-${item.Antibiotika}`;
					regionData[year][key] = item.Andel_R;
				});
			dataByRegion[region] = Object.values(regionData).sort(
				(a, b) => a.year - b.year
			);
		});
		return dataByRegion;
	}, [filteredData, selectedRegions]);

	const generateHslColor = (index: number, total: number) => {
		const hue = (index * 360) / total;
		return `hsl(${hue}, 70%, 50%)`;
	};

	const chartConfig = useMemo(() => {
		const keys = selectedMicrobes.flatMap((microbe) =>
			selectedAntibiotics.map((antibiotic) => `${microbe}-${antibiotic}`)
		);
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
	}, [selectedMicrobes, selectedAntibiotics]) satisfies ChartConfig;

	const resetSelections = useCallback(() => {
		setSelectedAntibiotics([]);
		setSelectedRegions([]);
		setSelectedMicrobes([]);
	}, []);

	const renderDropdown = (
		title: string,
		items: string[],
		selectedItems: string[],
		onChange: (item: string) => void
	) => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{title}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
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

	const handleMouseMove = (region: string, props: any) => {
		if (props.activeTooltipIndex !== undefined) {
			const year = chartDataByRegion[region][props.activeTooltipIndex]?.year;
			setHoveredYear(year);
		}
	};

	const handleMouseLeave = () => {
		setHoveredYear(null);
	};

	const CustomTooltip = ({ active, payload, label }: any) => {
		if (active && payload && payload.length) {
			return (
				<div className="rounded border bg-white p-4 shadow">
					<p className="font-bold">{`Year: ${label}`}</p>
					{payload.map((entry: any, index: number) => (
						<p key={index} style={{ color: entry.color }}>
							{`${entry.name}: ${entry.value.toFixed(2)}%`}
						</p>
					))}
				</div>
			);
		}
		return null;
	};

	return (
		<div className="flex w-full flex-col space-y-4">
			<div className="flex flex-row space-x-2">
				<h2 className="text-xl font-bold">Filters</h2>
				{renderDropdown(
					"Select Regions",
					regions,
					selectedRegions,
					handleSelectionChange(setSelectedRegions)
				)}
				{renderDropdown(
					"Select Antibiotics",
					antibiotics,
					selectedAntibiotics,
					handleSelectionChange(setSelectedAntibiotics)
				)}
				{renderDropdown(
					"Select Microbes",
					microbes,
					selectedMicrobes,
					handleSelectionChange(setSelectedMicrobes)
				)}
				<Button variant="outline" onClick={resetSelections}>
					Reset All
				</Button>
			</div>
			<div className="flex flex-col space-y-4">
				{selectedRegions.map((region) => (
					<ChartContainer
						key={region}
						config={chartConfig}
						className="h-[300px] w-full"
					>
						<div className="h-full w-full">
							<h3 className="mb-2 text-lg font-semibold">{region}</h3>
							<ResponsiveContainer width="100%" height="90%">
								<LineChart
									data={chartDataByRegion[region]}
									onMouseMove={(props) => handleMouseMove(region, props)}
									onMouseLeave={handleMouseLeave}
								>
									<CartesianGrid strokeDasharray="5 5" />
									<XAxis
										dataKey="year"
										type="number"
										domain={["dataMin", "dataMax"]}
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
											dot={false}
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
