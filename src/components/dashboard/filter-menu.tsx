"use client";

import { useEffect, useState } from "react";
import {
	fetchSampleTypes,
	fetchFilteredMicrobes,
	fetchFilteredAntibiotics,
} from "@/lib/data/fetchData";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface FilterMenuProps {
	onSampleTypeSelect: (value: string) => void;
	onMicrobeSelect: (value: string) => void;
	onAntibioticSelect: (value: string) => void;
	onReset: () => void;
	selectedSampleType: string;
	selectedMicrobe: string;
	selectedAntibiotic: string;
	selectedYear: number;
	availableYears: number[];
	setSelectedYear: (year: number) => void;
}

export default function FilterMenu({
	onSampleTypeSelect,
	onMicrobeSelect,
	onAntibioticSelect,
	onReset,
	selectedSampleType,
	selectedMicrobe,
	selectedAntibiotic,
	selectedYear,
	availableYears,
	setSelectedYear,
}: FilterMenuProps) {
	const [sampleTypes, setSampleTypes] = useState<string[]>([]);
	const [microbes, setMicrobes] = useState<string[]>([]);
	const [antibiotics, setAntibiotics] = useState<string[]>([]);

	useEffect(() => {
		fetchSampleTypes().then((data) => {
			if (data) setSampleTypes(data);
		});
	}, []);

	useEffect(() => {
		if (selectedSampleType) {
			fetchFilteredMicrobes(selectedSampleType).then((data) => {
				setMicrobes(data || []);
				setAntibiotics([]);
			});
		} else {
			setMicrobes([]);
			setAntibiotics([]);
		}
	}, [selectedSampleType]);

	useEffect(() => {
		if (selectedSampleType && selectedMicrobe) {
			fetchFilteredAntibiotics(selectedSampleType, selectedMicrobe).then(
				(data) => setAntibiotics(data || [])
			);
		} else {
			setAntibiotics([]);
		}
	}, [selectedSampleType, selectedMicrobe]);

	return (
		<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
			<div className="flex flex-col space-y-4">
				<div className="flex flex-col items-start">
					<p className="mb-1 font-semibold">Sample type</p>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="default">
								{selectedSampleType || "Select sample type"}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="z-50 max-h-60 overflow-y-auto">
							{sampleTypes.map((type) => (
								<DropdownMenuItem
									key={type}
									onSelect={(e) => {
										e.preventDefault();
										onSampleTypeSelect(type);
									}}
								>
									{type}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="flex flex-col items-start">
					<p className="mb-1 font-semibold">Microbe</p>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								size="default"
								disabled={!selectedSampleType}
							>
								{selectedMicrobe || "Select microbe"}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="max-h-60 overflow-y-auto">
							{microbes.map((m) => (
								<DropdownMenuItem
									key={m}
									onSelect={(e) => {
										e.preventDefault();
										onMicrobeSelect(m);
									}}
								>
									{m}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			<div className="flex flex-col space-y-4">
				<div className="flex flex-col items-start">
					<p className="mb-1 font-semibold">Antibiotics</p>
					<div className="flex max-w-xl flex-wrap gap-2">
						{antibiotics.map((ab) => (
							<Button
								key={ab}
								variant={ab === selectedAntibiotic ? "default" : "outline"}
								onClick={() => onAntibioticSelect(ab)}
							>
								{ab}
							</Button>
						))}
					</div>
				</div>

				<div className="flex flex-col items-start">
					<p className="mb-1 font-semibold">Year</p>
					<div className="flex flex-wrap gap-2">
						{availableYears.map((year) => (
							<Button
								key={year}
								variant={year === selectedYear ? "default" : "outline"}
								onClick={() => setSelectedYear(year)}
							>
								{year}
							</Button>
						))}
					</div>
				</div>

				<div className="flex flex-col items-start">
					<p className="invisible mb-1 font-semibold">placeholder</p>
					<Button variant="destructive" onClick={onReset}>
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
}
