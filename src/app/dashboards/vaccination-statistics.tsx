"use client";

import { useQueries, useQuery } from "@tanstack/react-query";
import {
	convertFHIVaccinationStatsFromJsonStatsToSimpleObject,
	getFHIVaccinationStatisticsLocations,
} from "@/lib/data/fetchFHIStatistics";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useMemo, useState } from "react";
import { getVaccinationStatisticsQuery } from "@/hooks/getVaccinationStatisticsQuery";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";

export function VaccinationStatistics() {
	const [open, setOpen] = useState(false);
	const [selectedLocations, setSelectedLocations] = useState([""]);

	useEffect(() => {
		console.log(selectedLocations);
	}, [selectedLocations]);

	const {
		data: locationData,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["vaccinationLocations"],
		queryFn: async () => {
			const data = await fetch(
				"https://statistikk-data.fhi.no/api/open/v1/nokkel/Table/173/dimension"
			);
			return await data.json();
		},
	});
	if (isLoading) return <div>Loading ...</div>;
	if (error) return <div>Error: {error.message}</div>;

	const locations = getFHIVaccinationStatisticsLocations(locationData);
	const selectedLocationIds = selectedLocations.flatMap((location) =>
		locations
			.filter((item) => item.location === location)
			.map((item) => item.id)
	);

	return (
		<div className="flex flex-row space-x-3">
			<div className="flex flex-col">
				<h3 className="font-bold">Filters</h3>
				<div className="flex flex-row items-center space-x-2">
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={open}
								className="max-w-[200px]"
							>
								Select Location
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search location..." />
								<CommandList>
									<CommandEmpty>No such location</CommandEmpty>
									<CommandGroup>
										{locations.map((it) => (
											<CommandItem
												key={it.id}
												value={it.location}
												onSelect={(selectedValue) => {
													if (selectedLocations.includes(selectedValue)) {
														const val = selectedLocations.filter(
															(it) => it !== selectedValue
														);
														setSelectedLocations([...val]);
													} else {
														setSelectedLocations([
															...selectedLocations,
															selectedValue,
														]);
													}
												}}
											>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														selectedLocations.includes(it.location)
															? "opacity-100"
															: "opacity-0"
													)}
												/>
												{it.location}
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
					<Button variant="outline" onClick={() => setSelectedLocations([])}>
						Reset
					</Button>
				</div>
			</div>
			<VaccinationStatisticsBarPlot selectedIds={selectedLocationIds} />
		</div>
	);
}

interface VaccinationStatisticsProps {
	selectedIds: string[];
}

interface LocationData {
	location: Record<string, string>;
	years: string[];
	rates: number[];
	ratios: number[];
}

interface ProcessedDataPoint {
	year: string;
	[key: string]: string | number;
}

function VaccinationStatisticsBarPlot({
	selectedIds,
}: VaccinationStatisticsProps) {
	const queries = useMemo(
		() => selectedIds.map((id) => getVaccinationStatisticsQuery(id)),
		[selectedIds]
	);

	const queryResults = useQueries({ queries });

	const isLoading = queryResults.some((query) => query.isLoading);
	const isError = queryResults.some((query) => query.isError);
	const isSuccess = queryResults.every((query) => query.isSuccess);

	const { processedData, chartConfig } = useMemo(() => {
		if (!isSuccess)
			return { processedData: null, chartConfig: {} as ChartConfig };

		const data = queryResults
			.map((query) =>
				convertFHIVaccinationStatsFromJsonStatsToSimpleObject(query.data)
			)
			.filter((d): d is LocationData => d !== null && d !== undefined);

		if (data.length === 0)
			return { processedData: null, chartConfig: {} as ChartConfig };

		// Generate dynamic chart config
		const config: ChartConfig = {};
		const colors = [
			"hsl(var(--chart-1))",
			"hsl(var(--chart-2))",
			"hsl(var(--chart-3))",
			"hsl(var(--chart-4))",
			"hsl(var(--chart-5))",
		];

		// Find the dataset with the most years to use as a base
		const baseData = data.reduce((prev, current) =>
			(prev.years?.length || 0) > (current.years?.length || 0) ? prev : current
		);

		data.forEach((locationData, index) => {
			const locationKey = Object.values(locationData.location)[0];
			if (locationKey) {
				config[locationKey] = {
					label: locationKey,
					color: colors[index % colors.length],
				};
			}
		});

		// Restructure data for bar chart
		const processedData: ProcessedDataPoint[] = baseData.years.map(
			(year, index) => {
				const yearData: ProcessedDataPoint = { year };
				data.forEach((locationData) => {
					const locationKey = Object.values(locationData.location)[0];
					if (
						locationKey &&
						locationData.rates &&
						locationData.rates[index] !== undefined
					) {
						yearData[locationKey] = locationData.rates[index];
					}
				});
				return yearData;
			}
		);

		return { processedData, chartConfig: config };
	}, [isSuccess, queryResults]);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error occurred in fetching data</div>;
	if (!processedData || processedData.length === 0)
		return <div>No data available</div>;

	return (
		<div className="flex flex-col">
			<ChartContainer config={chartConfig} className="h-[400px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={processedData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="year" />
						<YAxis
							label={{ value: "Andel (%)", angle: -90, position: "insideLeft" }}
							domain={[0, 100]}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<Legend />
						{Object.keys(chartConfig).map((key) => (
							<Bar key={key} dataKey={key} fill={chartConfig[key].color} />
						))}
					</BarChart>
				</ResponsiveContainer>
			</ChartContainer>
		</div>
	);
}
