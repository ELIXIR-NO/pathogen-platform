"use client";

import { NormDataRecord } from "@/lib/data/csvUtils";
import React, { useMemo, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function Atlas({ data }: { data: NormDataRecord[] }) {
	const [selectedMicrobe, setSelectedMicrobe] = useState<string>("");
	const [selectedAntibiotic, setSelectedAntibiotic] = useState<string>("");
	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [selectedDataSet, setSelectedDataSet] = useState<
		"Blod" | "Sår" | "Urin" | "Luft"
	>("Blod");

	const filteredData = useMemo(() => {
		return data.filter((record) => record.Opplegg === selectedDataSet);
	}, [data, selectedDataSet]);

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
		<div className="mx-0 grid grid-cols-6 gap-4">
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
			{/* For Dev only */}
			<div className="col-span-3 p-4">
				<div className="space-y-4">
					<div>
						<h3 className="font-medium">Selected Microbe:</h3>
						<p>{selectedMicrobe || "None"}</p>
					</div>
					<div>
						<h3 className="font-medium">Selected Antibiotic:</h3>
						<p>{selectedAntibiotic || "None"}</p>
					</div>
					<div>
						<h3 className="font-medium">Selected Regions:</h3>
						<p>
							{selectedRegions.length > 0 ? selectedRegions.join(", ") : "None"}
						</p>
					</div>
				</div>
				<DataSetSelector
					selectedDataSet={selectedDataSet}
					onDataSetChange={setSelectedDataSet}
				/>
			</div>
			{/* For Dev only */}
			<div className="col-span-2"></div>
		</div>
	);
}

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
				<h3 className="font-medium">Select Regions</h3>
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
