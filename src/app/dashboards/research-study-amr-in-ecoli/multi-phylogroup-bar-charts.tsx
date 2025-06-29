"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
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
import DownloadCSV from "@/lib/data/dataExport";
import { MyChart } from "./chart";
import { TreeNode } from "@/lib/data/newick-loader";
import { DownloadNewick, serializeSVG } from "@/lib/data/newick-save";
import { AnnTreeNodeRecord } from "@/lib/data/csvUtils";

const generateHslColor = (index: number, total: number) => {
	const safeHues = [330, 210, 0, 120, 30, 270, 180, 45, 60, 75, 210, 0, 30];
	const hue = safeHues[index % safeHues.length];
	return `hsl(${hue}, 70%, 50%)`;
};

export function SampleBarChart({
	collections,
	phylogroups,
	samples,
	data,
	TreeData,
	annotations,
	labels,
	phylogroup,
	fimtype,
}: {
	collections: string[];
	phylogroups: string[];
	samples: string[];
	data: any[];
	TreeData: TreeNode[];
	annotations: AnnTreeNodeRecord[];
	labels: number[];
	phylogroup: string[];
	fimtype: number[];
}) {
	const chartRef = useRef<SVGSVGElement | null>(null);
	const genotypes = [
		"AMINOGLYCOSIDE",
		"AMINOGLYCOSIDE/QUINOLONE",
		"BETA-LACTAM",
		"QUINOLONE",
		"QUATERNARY AMMONIUM",
		"Mobile Colistin",
		"SULFONAMIDE",
		"TRIMETHOPRIM",
	];
	const dataType: string[] = ["Phenotype", "Genotype"];

	const chartType: string[] = ["Sample BarChart", "Radial Tree Chart"];

	const annotationType: string[] = ["Label", "FimType", "Phylogroup", "ESBL"];

	const phenotypes = [
		"Amoxicillin-clavulanic_acid_i.v.",
		"Amoxicillin-clavulanic_acid_uncomplicated UTI only",
		"Piperacillin-tazobactam",
		"Temocillin_UTI",
		"Cefoxitin_screen ",
		"Cefuroxime_oral_uncomplicated UTI only",
		"Ceftazidime",
		"Cefotaxime",
		"Cefepime",
		"Ceftazidime-avibactam",
		"Ertapenem",
		"Meropenem",
		"Imipenem",
		"Doripenem",
		"Aztreonam",
		"Amikacin",
		"Gentamicin",
		"Tobramycin",
		"Ciprofloxacin",
		"Trimethoprim-sulfamethoxazole",
		"Trimethoprim",
		"Nitrofurantoin",
		"Fosfomycin_iv",
		"Fosfomycin_UTI",
		"Colistin",
		"Tigecycline",
	];

	const [selectedSamples, setSelectedSamples] = useState<string[]>(samples);
	const [selectedCollections, setSelectedCollections] =
		useState<string[]>(collections);
	const [selectedPhylogroup, setSelectedPhylogroup] =
		useState<string[]>(phylogroups);
	const [selectedGenotypes, setSelectedGenotypes] = useState<string[]>([
		"AMINOGLYCOSIDE/QUINOLONE",
	]);
	const [selectedPhenotypes, setSelectedPhenotypes] = useState<string[]>([
		"Amoxicillin-clavulanic_acid_i.v.",
	]);
	const [selectedDataType, setSelectedDataType] = useState<string>("Phenotype");
	const [selectedChartType, setSelectedChartType] = useState<string[]>([
		"Sample BarChart",
	]);

	const [selectedAnnotations, setSelectedAnnotations] = useState<string[]>([
		"Label",
		"FimType",
		"Phylogroup",
		"ESBL",
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

	const collectionsSamples: string[] = [
		"NORM-Blood culture",
		"NORM-Urine",
		"Tromsø 7-Feces",
	];

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
				selectedSamples.includes(item["DDM-Sample material"]) &&
				selectedCollections.includes(item["DDM-Collection"]) &&
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

				collectionsSamples.forEach((key) => {
					const [collection, sample] = key.split("-");
					sampleCounts[key] = filtered
						.filter(
							(item) =>
								item["Phylogroup"] === phylogroup &&
								item["DDM-Collection"] === collection &&
								item["DDM-Sample material"] === sample
						)
						.reduce((sum, item) => sum + (Number(item[genotype]) || 0), 0);
				});

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
			selectedPhylogroup.length === 0 ||
			selectedPhenotypes.length === 0
		) {
			return [];
		}

		const filtered = data.filter(
			(item) =>
				selectedSamples.includes(item["DDM-Sample material"]) &&
				selectedCollections.includes(item["DDM-Collection"]) &&
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

				collectionsSamples.forEach((key) => {
					const [collection, sample] = key.split("-");

					const filteredItems = filtered.filter(
						(item) =>
							item["Phylogroup"] === phylogroup &&
							item["DDM-Sample material"] === sample &&
							item["DDM-Collection"] === collection
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
				});

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
		const phenotypeKeys = collectionsSamples.flatMap((collection) =>
			["S", "R", "I"].map((letter) => `${collection}-${letter}`)
		);

		const genotypeKeys = collectionsSamples;

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
		setSelectedPhenotypes([]);
		setSelectedChartType([]);
	}, []);

	const renderDropdown = (
		title: string,
		items: string[],
		selectedItems: string[],
		onChange: (item: string) => void,
		all: boolean = true
	) => (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{title}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="max-h-80 overflow-auto">
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

	const handleDataTypeChange = (item: string) => {
		setSelectedDataType(item);
	};

	const filterAndMapData = () => {
		return data
			.filter((item) => {
				const matchSample = selectedSamples.includes(
					item["DDM-Sample material"]
				);
				const matchCollection = selectedCollections.includes(
					item["DDM-Collection"]
				);
				const matchPhylogroup = selectedPhylogroup.includes(item["Phylogroup"]);

				return (
					matchSample &&
					matchCollection &&
					matchPhylogroup &&
					(selectedPhenotypes.length !== 0 || selectedGenotypes.length !== 0)
				);
			})
			.map((item) => {
				return Object.keys(item).reduce(
					(prev, curr) => {
						if (item[curr] !== undefined) {
							prev[curr] = item[curr];
						}
						return prev;
					},
					{} as { [key: string]: string | number }
				);
			});
	};

	const filteredDownload = filterAndMapData();

	const filterTreeData = (
		treeData: TreeNode,
		sampleIDs: string[]
	): TreeNode | null => {
		const hasMatchingSampleID = (node: TreeNode): boolean => {
			if (sampleIDs.includes(node.name || "")) {
				return true;
			}
			if (node.branchset) {
				return node.branchset.some((child) => hasMatchingSampleID(child));
			}
			return false;
		};

		const filterNode = (node: TreeNode): TreeNode | null => {
			if (hasMatchingSampleID(node)) {
				const filteredNode: TreeNode = {
					name: node.name,
					length: node.length,
				};

				if (node.branchset) {
					filteredNode.branchset = node.branchset
						.map((child) => filterNode(child))
						.filter((child): child is TreeNode => child !== null);
				}

				return filteredNode;
			}

			return null;
		};

		return filterNode(treeData);
	};

	const filteredSampleIDs: string[] = filteredDownload
		.map((entry) => entry["Sample ID"])
		.filter((id): id is string => typeof id === "string");

	const filteredTreeData = useMemo(() => {
		return filterTreeData(TreeData, filteredSampleIDs);
	}, [TreeData, filteredSampleIDs]);

	const filterAnnotationsBySampleID = (
		annotations: any[],
		filteredSampleIDs: string[]
	) => {
		return annotations.filter((row) => filteredSampleIDs.includes(row.Node));
	};

	const handleDownload = () => {
		DownloadCSV(filteredDownload, "Filtered_Data");
	};

	const handleDownloadNewick = () => {
		DownloadNewick(filteredTreeData!, "Newick_Filtered_Data");
	};

	const handleDownloadAnnotation = () => {
		DownloadCSV(
			filterAnnotationsBySampleID(annotations, filteredSampleIDs),
			"Filtered_Annoation"
		);
	};

	const handleExportSVG = () => {
		if (chartRef.current) {
			const svgBlob = serializeSVG(chartRef.current);

			const url = URL.createObjectURL(svgBlob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "chart.svg";
			a.click();
			URL.revokeObjectURL(url);
		}
	};

	return (
		<div className="flex w-full flex-col space-y-4">
			<div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2">
				<h2 className="py-3 text-xl font-bold">Filters</h2>
				{renderDropdown(
					"Select Chart Type",
					chartType,
					selectedChartType,
					handleSelectionChange(setSelectedChartType)
				)}
				{renderDropdown(
					"Select Data Type",
					dataType,
					[selectedDataType],
					handleDataTypeChange,
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
				{selectedDataType.includes("Genotype")
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
				{selectedChartType.includes("Radial Tree Chart") &&
					renderDropdown(
						"Select Annotations",
						annotationType,
						selectedAnnotations,
						handleSelectionChange(setSelectedAnnotations)
					)}
				<Button variant="outline" onClick={resetSelections}>
					Reset All
				</Button>
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" disabled={filteredDownload.length === 0}>
							Download Data
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="flex max-h-80 flex-col gap-2 overflow-auto p-2">
						<Button
							variant="outline"
							disabled={
								filteredDownload === null || filteredDownload.length === 0
							}
							onClick={handleDownload}
							className="w-full"
						>
							Download Barchart Data
						</Button>
						<Button
							variant="outline"
							disabled={filteredTreeData === null}
							onClick={handleDownloadNewick}
							className="w-full"
						>
							Download Radial Tree Data
						</Button>
						<Button
							variant="outline"
							disabled={
								filteredDownload === null || filteredDownload.length === 0
							}
							onClick={handleDownloadAnnotation}
							className="w-full"
						>
							Download Annotation Data
						</Button>
						<Button
							variant="outline"
							disabled={filteredTreeData === null}
							onClick={handleExportSVG}
							className="w-full"
						>
							Download Radial Tree(SVG)
						</Button>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div>
				{selectedChartType.includes("Sample BarChart") && (
					<>
						<h3 className="text-lg font-bold">Sample Bar Chart</h3>
						{selectedDataType.includes("Genotype")
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
													{collectionsSamples.map((key, index) => (
														<Bar
															key={key}
															dataKey={key}
															stackId="a"
															fill={chartConfig[key]?.color || "#ccc"}
															name={key.replace("-", " - ")}
														/>
													))}
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
													{collectionsSamples.map((key) =>
														["S", "R", "I"].map((letter) => (
															<Bar
																key={`${key}-${letter}`}
																dataKey={`${key}-${letter}`}
																stackId="a"
																fill={
																	chartConfig[`${key}-${letter}`]?.color ||
																	"#ccc"
																}
																name={`${key.replace("-", " - ")} - ${letter}`}
															/>
														))
													)}
												</BarChart>
											</ResponsiveContainer>
										</div>
									</ChartContainer>
								))}
					</>
				)}
				{selectedChartType.includes("Radial Tree Chart") && (
					<div className="py-3">
						<h3 className="py-5 text-lg font-bold">Radial Tree Chart</h3>
						<MyChart
							data={filteredTreeData}
							annotations={annotations}
							labels={labels}
							phylogroup={phylogroup}
							fimtype={fimtype}
							validNodes={filteredSampleIDs}
							selectedAnnotations={selectedAnnotations}
							ref={chartRef}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
