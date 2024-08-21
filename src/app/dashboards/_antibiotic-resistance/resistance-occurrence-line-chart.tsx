"use client";

import { useCallback, useMemo, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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
} from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

export function ResistanceOccurrenceLineChart({
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
	const [selectedAntibiotic, setSelectedAntibiotic] = useState<string>("");
	const [selectedRegion, setSelectedRegion] = useState<string>("");
	const [selectedMicrobes, setSelectedMicrobes] = useState<string[]>([]);

	const handleMicrobeSelection = useCallback((microbe: string) => {
		setSelectedMicrobes((prevSelectedMicrobes) => {
			if (prevSelectedMicrobes.includes(microbe)) {
				return prevSelectedMicrobes.filter((item) => item !== microbe);
			} else {
				return [...prevSelectedMicrobes, microbe];
			}
		});
	}, []);

	const filteredData = useMemo(() => {
		if (
			selectedMicrobes.length === 0 ||
			selectedAntibiotic === "" ||
			selectedRegion === ""
		) {
			return [];
		}
		return data.filter((item) => {
			const antibioticMatch =
				!selectedAntibiotic || item.Antibiotika === selectedAntibiotic;
			const regionMatch = !selectedRegion || item.region === selectedRegion;
			const microbeMatch =
				selectedMicrobes.length === 0 ||
				selectedMicrobes.includes(item.Mikrobe);
			return antibioticMatch && regionMatch && microbeMatch;
		});
	}, [selectedAntibiotic, selectedRegion, selectedMicrobes, data]);

	const chartData = useMemo(() => {
		const yearData: { [year: number]: { [microbe: string]: number } } = {};
		filteredData.forEach((item) => {
			const year = parseInt(item.ProveAar);
			if (!yearData[year]) {
				yearData[year] = {};
			}
			yearData[year][item.Mikrobe] = item.Andel_R;
		});
		return Object.entries(yearData)
			.map(([year, microbes]) => ({
				year: parseInt(year),
				...microbes,
			}))
			.sort((a, b) => a.year - b.year);
	}, [filteredData]);

	const generateHslColor = (index: number, total: number) => {
		const hue = (index * 360) / total;
		return `hsl(${hue}, 70%, 50%)`;
	};

	const chartConfig = useMemo(() => {
		return selectedMicrobes.reduce(
			(acc, microbe, index) => {
				acc[microbe] = {
					label: microbe,
					color: generateHslColor(index, selectedMicrobes.length),
				};
				return acc;
			},
			{} as Record<string, { label: string; color: string }>
		);
	}, [selectedMicrobes]);

	const resetMicrobes = useCallback(() => {
		setSelectedMicrobes([]);
	}, []);

	const memoizedMicrobeItems = useMemo(
		() =>
			microbes.map((item) => (
				<DropdownMenuCheckboxItem
					key={item}
					checked={selectedMicrobes.includes(item)}
					onCheckedChange={() => handleMicrobeSelection(item)}
					onSelect={(e) => {
						e.preventDefault();
					}}
				>
					{item}
				</DropdownMenuCheckboxItem>
			)),
		[microbes, selectedMicrobes, handleMicrobeSelection]
	);

	return (
		<div className="flex w-full flex-col space-y-4">
			<div className="flex w-full flex-row space-x-2">
				<div className="flex flex-col space-y-4">
					<h2 className="text-xl font-bold">Filters</h2>
					<Select
						onValueChange={(value: string) => setSelectedAntibiotic(value)}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select an Antibiotic" />
						</SelectTrigger>
						<SelectContent>
							{antibiotics.map((item) => (
								<SelectItem key={item} value={item}>
									{item}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select onValueChange={(value: string) => setSelectedRegion(value)}>
						<SelectTrigger>
							<SelectValue placeholder="Select a region" />
						</SelectTrigger>
						<SelectContent>
							{regions.map((item) => (
								<SelectItem key={item} value={item}>
									{item}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<div className="flex w-full flex-row space-x-1">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline">Select Microbes</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>{memoizedMicrobeItems}</DropdownMenuContent>
						</DropdownMenu>
						<Button variant="outline" onClick={resetMicrobes}>
							Reset
						</Button>
					</div>
				</div>
				<ChartContainer config={chartConfig} className="min-h-[400px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={chartData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis
								dataKey="year"
								type="number"
								domain={["dataMin", "dataMax"]}
								tickFormatter={(value) => value.toString()}
								ticks={chartData.map((item) => item.year)}
								scale="time"
							/>
							<YAxis
								label={{
									value: "Occurrences (%)",
									angle: -90,
									position: "insideLeft",
								}}
							/>
							<ChartTooltip content={<ChartTooltipContent />} />
							<ChartLegend content={<ChartLegendContent />} />
							{selectedMicrobes.map((microbe, _index) => (
								<Line
									key={microbe}
									type="monotone"
									dataKey={microbe}
									stroke={chartConfig[microbe].color}
									activeDot={{ r: 8 }}
								/>
							))}
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</div>
		</div>
	);
}
