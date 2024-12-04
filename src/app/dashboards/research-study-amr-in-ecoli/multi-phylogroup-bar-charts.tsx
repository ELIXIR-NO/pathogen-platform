"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

const generateHslColor = (index: number, total: number) => {
	const safeHues = [210, 0, 120, 30, 270, 180, 45, 60, 75];
	const hue = safeHues[index % safeHues.length];
	return `hsl(${hue}, 70%, 50%)`;
};

export function SampleBarChart({
	collections,
	phylogroups,
	samples,
	data,
}: {
	collections: string[];
	phylogroups: string[];
	samples: string[];
	data: any[];
}) {
	const genotypes = [
		"PPN-AMINOGLYCOSIDE/QUINOLONE",
		"PPN=BETA-LACTAM",
		"PPN-QUINOLONE",
		"PPN-QUATERNARY AMMONIUM",
		"PPN-Mobile Colistin?",
		"PPN-SULFONAMIDE",
		"PPN-TRIMETHOPRIM",
	];
	const chartType: string[] = ["Phenotype", "Genotype"];

	const phenotypes = [
		"Amoxicillin-clavulanic_acid_category_i.v.",
		"Amoxicillin-clavulanic_acid_category_uncomplicated UTI only",
		"Piperacillin-tazobactam_category",
		"Temocillin_category_UTI",
		"Cefoxitin_category_screen ",
		"Cefuroxime_category_oral_uncomplicated UTI only",
		"Ceftazidime_category",
		"Cefotaxime_category",
		"Cefepime_category",
		"Ceftazidime-avibactam_category",
		"Ertapenem_category",
		"Meropenem_category",
		"Imipenem_category",
		"Doripenem_category",
		"Aztreonam_category",
		"Amikacin_category",
		"Gentamicin_category",
		"Tobramycin_category",
		"Ciprofloxacin_category",
		"Trimethoprim-sulfamethoxazole_category",
		"Trimethoprim_category",
		"Nitrofurantoin_category",
		"Fosfomycin_category_iv",
		"Fosfomycin_category_UTI",
		"Colistin_category",
		"Tigecycline_category",
	];

	const [selectedSamples, setSelectedSamples] = useState<string[]>(samples);
	const [selectedCollections, setSelectedCollections] =
		useState<string[]>(collections);
	const [selectedPhylogroup, setSelectedPhylogroup] =
		useState<string[]>(phylogroups);
	const [selectedGenotypes, setSelectedGenotypes] = useState<string[]>([
		"PPN-AMINOGLYCOSIDE/QUINOLONE",
	]);
	const [selectedPhenotypes, setSelectedPhenotypes] = useState<string[]>([
		"Amoxicillin-clavulanic_acid_category_i.v.",
	]);
	const [selectedchartType, setSelectedChartType] =
		useState<string>("Phenotype");

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
			selectedSamples.length === 0 ||
			selectedCollections.length === 0 ||
			selectedPhylogroup.length === 0 ||
			selectedGenotypes.length === 0
		) {
			return [];
		}

		const filtered = data.filter(
			(item) =>
				selectedSamples.includes(item["PPN-DDM-Sample material"]) &&
				selectedCollections.includes(item["PPN-DDM-Collection"]) &&
				selectedPhylogroup.includes(item["Phylogroup"])
		);

		return selectedGenotypes.map((genotype) => {
			const groupedByPhylogroup = selectedPhylogroup.map((phylogroup) => {
				const sampleCounts: {
					phylogroup: string;
					[key: string]: number | string;
				} = {
					phylogroup,
				};

				["NORM-Blood culture", "NORM-Urine", "Tromsø 7-Feces"].forEach(
					(key) => {
						const [collection, sample] = key.split("-");
						sampleCounts[key] = filtered
							.filter(
								(item) =>
									item["Phylogroup"] === phylogroup &&
									item["PPN-DDM-Collection"] === collection &&
									item["PPN-DDM-Sample material"] === sample
							)
							.reduce((sum, item) => sum + (Number(item[genotype]) || 0), 0);
					}
				);

				return sampleCounts;
			});
			return { genotype, data: groupedByPhylogroup };
		});
	}, [
		data,
		selectedSamples,
		selectedGenotypes,
		selectedCollections,
		selectedPhylogroup,
	]);

	const phenotypeData = useMemo(() => {
		if (
			selectedSamples.length === 0 ||
			selectedCollections.length === 0 ||
			selectedPhylogroup.length === 0
		) {
			return [];
		}

		const filtered = data.filter(
			(item) =>
				selectedSamples.includes(item["PPN-DDM-Sample material"]) &&
				selectedCollections.includes(item["PPN-DDM-Collection"]) &&
				selectedPhylogroup.includes(item["Phylogroup"])
		);

		return selectedPhenotypes.map((phenotype) => {
			const groupedByPhylogroup = selectedPhylogroup.map((phylogroup) => {
				const sampleCounts: {
					phylogroup: string;
					[key: string]: number | string;
				} = {
					phylogroup,
				};

				["NORM-Blood culture", "NORM-Urine", "Tromsø 7-Feces"].forEach(
					(key) => {
						const [collection, sample] = key.split("-");

						const filteredItems = filtered.filter(
							(item) =>
								item["Phylogroup"] === phylogroup &&
								item["PPN-DDM-Sample material"] === sample &&
								item["PPN-DDM-Collection"] === collection
						);

						const counts = filteredItems.reduce(
							(acc, item) => {
								const value = item[phenotype as keyof typeof item];

								if (value === "S") {
									acc[`${collection}-${sample}-S`] += 1;
								} else if (value === "R") {
									acc[`${collection}-${sample}-R`] += 1;
								} else if (value === "I") {
									acc[`${collection}-${sample}-I`] += 1;
								}
								return acc;
							},
							{
								[`${collection}-${sample}-S`]: 0,
								[`${collection}-${sample}-R`]: 0,
								[`${collection}-${sample}-I`]: 0,
							}
						);

						Object.keys(counts).forEach((key) => {
							sampleCounts[key] = counts[key];
						});
					}
				);

				return sampleCounts;
			});

			return { phenotype, data: groupedByPhylogroup };
		});
	}, [
		data,
		selectedSamples,
		selectedCollections,
		selectedPhylogroup,
		selectedPhenotypes,
	]);

	const initialChartConfig = useMemo(() => {
		const phenotypeKeys = collections.flatMap((collection) =>
			samples.flatMap((sample) =>
				["S", "R", "I"].map((letter) => `${collection}-${sample}-${letter}`)
			)
		);

		const genotypeKeys = collections.flatMap((collection) =>
			samples.map((sample) => `${collection}-${sample}`)
		);

		const allKeys = [...phenotypeKeys, ...genotypeKeys];

		return allKeys.reduce(
			(acc, key, index) => {
				acc[key] = {
					label: key.replace("-", " - "),
					color: generateHslColor(index, allKeys.length),
				};
				return acc;
			},
			{} as Record<string, { label: string; color: string }>
		);
	}, [collections, samples]);

	const chartConfig = initialChartConfig;

	const resetSelections = useCallback(() => {
		setSelectedSamples([]);
		setSelectedCollections([]);
		setSelectedPhylogroup([]);
		setSelectedGenotypes([]);
	}, []);

	const renderDropdown = (
		title: string,
		items: string[],
		selectedItems: string[],
		onChange: (item: string) => void,
		all: boolean = true
	) => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{title}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{all && (
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

	const handleChartTypeChange = (item: string) => {
		setSelectedChartType(item);
	};

	return (
		<div className="flex w-full flex-col space-y-4">
			<div className="flex flex-row space-x-2">
				<h2 className="text-xl font-bold">Filters</h2>
				{renderDropdown(
					"Select Chart Type",
					chartType,
					[selectedchartType],
					handleChartTypeChange,
					false
				)}
				{renderDropdown(
					"Select Sample Type",
					samples,
					selectedSamples,
					handleSelectionChange(setSelectedSamples)
				)}
				{renderDropdown(
					"Select Collections",
					collections,
					selectedCollections,
					handleSelectionChange(setSelectedCollections)
				)}
				{renderDropdown(
					"Select Phylogroup",
					phylogroups,
					selectedPhylogroup,
					handleSelectionChange(setSelectedPhylogroup)
				)}
				{selectedchartType.includes("Genotype")
					? renderDropdown(
							"Select Genotypes",
							genotypes,
							selectedGenotypes,
							handleSelectionChange(setSelectedGenotypes)
						)
					: renderDropdown(
							"Select Phenotypes",
							phenotypes,
							selectedPhenotypes,
							handleSelectionChange(setSelectedPhenotypes)
						)}
				<Button variant="outline" onClick={resetSelections}>
					Reset All
				</Button>
			</div>

			{selectedchartType.includes("Genotype")
				? filteredData.map((genotypeData) => (
						<ChartContainer
							key={genotypeData.genotype}
							config={chartConfig}
							className="h-[300px] w-full"
						>
							<div className="h-full w-full py-3">
								<h3 className="text-center text-lg font-bold">
									{genotypeData.genotype}
								</h3>
								<ResponsiveContainer width="100%" height="100%">
									<BarChart data={genotypeData.data}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="phylogroup" />
										<YAxis
											label={{
												value: "Count",
												angle: -90,
												position: "insideLeft",
											}}
										/>
										<Tooltip />
										<ChartLegend content={<ChartLegendContent />} />
										{["NORM-Blood culture", "NORM-Urine", "Tromsø 7-Feces"].map(
											(key, index) => (
												<Bar
													key={key}
													dataKey={key}
													stackId="a"
													fill={chartConfig[key]?.color || "#ccc"}
													name={key.replace("-", " - ")}
												/>
											)
										)}
									</BarChart>
								</ResponsiveContainer>
							</div>
						</ChartContainer>
					))
				: phenotypeData.map((phenotype) => (
						<ChartContainer
							key={phenotype.phenotype}
							config={chartConfig}
							className="h-[300px] w-full"
						>
							<div className="h-full w-full py-3">
								<h3 className="text-center text-lg font-bold">
									{phenotype.phenotype}
								</h3>
								<ResponsiveContainer width="100%" height="100%">
									<BarChart data={phenotype.data}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="phylogroup" />
										<YAxis
											label={{
												value: "Count",
												angle: -90,
												position: "insideLeft",
											}}
										/>
										<Tooltip />
										<Legend />
										{["NORM-Blood culture", "NORM-Urine", "Tromsø 7-Feces"].map(
											(key) => (
												<React.Fragment key={key}>
													{["S", "R", "I"].map((letter) => (
														<Bar
															key={`${key}-${letter}`}
															dataKey={`${key}-${letter}`}
															stackId="a"
															fill={
																chartConfig[`${key}-${letter}`]?.color || "#ccc"
															}
															name={`${key.replace("-", " - ")} - ${letter}`}
														/>
													))}
												</React.Fragment>
											)
										)}
									</BarChart>
								</ResponsiveContainer>
							</div>
						</ChartContainer>
					))}
		</div>
	);
}
