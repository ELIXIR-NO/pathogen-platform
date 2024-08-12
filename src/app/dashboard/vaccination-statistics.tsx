"use client";

import { useQuery } from "@tanstack/react-query";
import {
	FHIVaccinationStatisticsDimensionsAPIResponse,
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
import { useEffect, useState } from "react";

export function VaccinationStatistics() {
	const [open, setOpen] = useState(false);
	const [values, setValues] = useState([""]);

	useEffect(() => {
		console.log(values);
	}, [values]);

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
													if (values.includes(selectedValue)) {
														const val = values.filter(
															(it) => it !== selectedValue
														);
														setValues([...val]);
													} else {
														setValues([...values, selectedValue]);
													}
												}}
											>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														values.includes(it.location)
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
					<Button variant="outline" onClick={() => setValues([])}>
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
}
