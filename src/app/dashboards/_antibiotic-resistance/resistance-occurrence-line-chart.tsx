"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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
		<div className="flex flex-row space-x-2">
			<div className="flex flex-col space-y-4">
				<h2 className="text-xl font-bold">Filters</h2>
				<Select onValueChange={(value) => setSelectedAntibiotic(value)}>
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
				<Select onValueChange={(value) => setSelectedRegion(value)}>
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
			<pre>{JSON.stringify(filteredData, null, 2)}</pre>
		</div>
	);
}
