"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Covid19Record } from "@/lib/data/csvUtils";
import {
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	ComposedChart,
	Bar,
} from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

export function Covid19LineChart({
	years,
	data,
}: {
	years: string[];
	data: Covid19Record[];
}) {
	const [selectedYears, setSelectedYears] = useState<string[]>([
		"2020",
		"2021",
		"2022",
		"2023",
		"2024",
	]);
	const type: string[] = ["Covid-19", "Vaccine"];
	const [selectedType, setSelectedType] = useState<string[]>([
		"Covid-19",
		"Vaccine",
	]);

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
		if (selectedYears.length === 0 || selectedType.length === 0) {
			return [];
		}

		return data
			.filter((item) => selectedYears.includes(item.ProveAar))
			.map((item) => {
				const result: Covid19Record = {
					ProveAar: item.ProveAar,
					Covid19: undefined,
					Vaccine: undefined,
				};

				if (selectedType.includes("Covid-19")) {
					result.Covid19 = item.Covid19;
				}
				if (selectedType.includes("Vaccine")) {
					result.Vaccine = item.Vaccine;
				}

				return result;
			});
	}, [selectedYears, selectedType, data]);

	const sortedData = filteredData.sort(
		(a, b) => parseInt(a.ProveAar) - parseInt(b.ProveAar)
	);

	const resetSelections = useCallback(() => {
		setSelectedYears([]);
		setSelectedType([]);
	}, []);

	const generateHslColor = (index: number, total: number) => {
		const hue = (index * 360) / total;
		return `hsl(${hue}, 70%, 50%)`;
	};

	const chartConfig = {
		Vaccine: {
			label: "Vaccine",
			color: generateHslColor(30, 100),
		},
		Covid19: {
			label: "Covid-19",
			color: generateHslColor(30, 50),
		},
	} satisfies ChartConfig;

	const renderDropdown = (
		title: string,
		items: string[],
		selectedItems: string[],
		onChange: (item: string) => void
	) => (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{title}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="max-h-80 overflow-auto">
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

	return (
		<div className="flex w-full flex-col space-y-4">
			<div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2">
				<h2 className="text-xl font-bold">Filters</h2>
				{renderDropdown(
					"Select Years",
					years,
					selectedYears,
					handleSelectionChange(setSelectedYears)
				)}
				{renderDropdown(
					"Select Data",
					type,
					selectedType,
					handleSelectionChange(setSelectedType)
				)}

				<Button variant="outline" onClick={resetSelections}>
					Reset All
				</Button>
			</div>
			<ChartContainer config={chartConfig} className="h-[300px] w-full">
				<div>
					<div className="h-[400px] w-full">
						<ResponsiveContainer width="100%" height="80%">
							<ComposedChart data={sortedData}>
								<CartesianGrid strokeDasharray="5 5" />
								<XAxis
									dataKey="ProveAar"
									label={{
										value: "",
										position: "insideBottomRight",
										offset: 0,
									}}
								/>
								<YAxis
									label={{
										value: "Occurrences",
										angle: -90,
										position: "outsideLeft",
										dx: -30,
									}}
									yAxisId="left"
									orientation="left"
									stroke={chartConfig.Covid19.color}
									domain={["auto", "auto"]}
								/>
								<YAxis
									label={{ value: "", angle: -90, position: "outsideLeft" }}
									yAxisId="right"
									orientation="right"
									stroke={chartConfig.Vaccine.color}
								/>
								<Tooltip />
								<ChartLegend />
								<Line
									key="Vaccine"
									type="monotone"
									dataKey="Vaccine"
									stroke={chartConfig.Vaccine.color}
									dot={false}
									yAxisId="right"
								/>

								<Bar
									dataKey="Covid19"
									barSize={30}
									fill={chartConfig.Covid19.color}
									yAxisId="left"
								/>
							</ComposedChart>
						</ResponsiveContainer>
					</div>
				</div>
			</ChartContainer>
		</div>
	);
}
