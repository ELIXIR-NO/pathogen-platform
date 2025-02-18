"use client";

import { useState } from "react";
import DataLoader from "./data-loader";
import FilterMenu from "@/components/dashboard/filter-menu";
import ResistanceMap from "./resistance-map";
import ResistanceLineChart from "./resistance-line-chart";
import ResistanceBarChart from "./resistance-bar-chart";
import ResistanceTable from "./resistance-table";
import { Legend } from "@/components/dashboard/legend";

export default function AntibioticResistanceAtlas() {
	const [selectedSampleType, setSelectedSampleType] = useState("Blood");
	const [selectedMicrobe, setSelectedMicrobe] = useState("Enterobacter");
	const [selectedAntibiotic, setSelectedAntibiotic] = useState("Cefotaxim");
	const [selectedYear, setSelectedYear] = useState<number | null>(2022);
	const [showRegions, setShowRegions] = useState<boolean>(true);
	const [showCounties, setShowCounties] = useState<boolean>(false);
	
	return (
		<section className="flex w-full flex-col space-y-6">
			<h1 className="dark:text-primary-light mb-4 text-center text-3xl font-bold text-primary">
				NORM Atlas: Norwegian Surveillance System for Antimicrobial Drug
				Resistance
			</h1>
			<p className="mb-g text-justify">
				The national health registry{" "}
				<a
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline"
				>
					Norwegian Surveillance System for Antimicrobial Drug Resistance (NORM)
				</a>{" "}
				collects and analyzes antimicrobial resistance test data in humans for
				Norway. The NORM-atlas visualizes antibacterial resistance for selected
				bacterial species and antibiotics, with filters for sample type,
				geographic region, and test year.
			</p>
			<h2 className="mt-2 text-2xl font-bold text-green-600 dark:text-green-400">
				Filter menu:
			</h2>
			<ul className="mb-6 flex list-none flex-col space-y-1 pl-5">
				<li>
					<strong>Sample type:</strong> select a sample type
				</li>
				<li>
					<strong>Microbe:</strong> select an available microbe for that sample
					type
				</li>
				<li>
					<strong>Antibiotics:</strong> use the buttons to see resistance data
					for each antibiotic
				</li>
			</ul>
			<p className="mb-6 text-justify">
				The map, charts, and table show antibiotic resistance data for your
				chosen sample type - microbe - antibiotic combination across all
				available health regions at the latest available year of data by
				default. You can toggle regions off below to see info for all of Norway
				(when available) and use the year selection above or below the map to
				view data for other years.
			</p>
			<DataLoader
				selectedSampleType={selectedSampleType}
				selectedMicrobe={selectedMicrobe}
				selectedAntibiotic={selectedAntibiotic}
				selectedYear={selectedYear ?? 2022}
				setSelectedYear={setSelectedYear}
				showRegions={showRegions}
			>
				{({
				resistanceData,
				geoData,
				loading,
				availableYears,
				selectedRegions,
				}) => (
				<div className="flex flex-col space-y-6">
					<FilterMenu
					onSampleTypeSelect={(value) => {
						setSelectedSampleType(value);
						setSelectedMicrobe("");
						setSelectedAntibiotic("");
						setSelectedYear(null);
					}}
					onMicrobeSelect={(value) => {
						setSelectedMicrobe(value);
						setSelectedAntibiotic("");
						setSelectedYear(null);
					}}
					onAntibioticSelect={setSelectedAntibiotic}
					onReset={() => {
						setSelectedSampleType("");
						setSelectedMicrobe("");
						setSelectedAntibiotic("");
						setSelectedYear(null);
					}}
					selectedSampleType={selectedSampleType}
					selectedMicrobe={selectedMicrobe}
					selectedAntibiotic={selectedAntibiotic}
					selectedYear={selectedYear ?? availableYears[availableYears.length - 1]}
					availableYears={availableYears}
					setSelectedYear={setSelectedYear}
					/>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-12">
					<div className="md:col-span-5 col-span-1">
						<ResistanceMap
						geoData={geoData}
						resistanceData={resistanceData}
						selectedYear={selectedYear ?? 2022}
						showCounties={showCounties}
						/>
						<div className="mt-3 flex justify-center">
						<Legend
							showRegions={showRegions}
							onToggleShowRegions={setShowRegions}
							showCounties={showCounties}
							onToggleShowCounties={setShowCounties}
							onSelectResistance={() => {}}
						/>
						</div>
					</div>

					<div className="md:col-span-7 col-span-1 flex flex-col gap-4">
						{Object.keys(resistanceData).length > 0 ? (
						<>
							<ResistanceLineChart
							resistanceData={resistanceData}
							onRegionClick={(region) => {
								console.log("Clicked line for region:", region);
							}}
							/>
							<ResistanceBarChart
							resistanceData={resistanceData}
							selectedYear={selectedYear ?? 2022}
							/>
							<ResistanceTable
							resistanceData={resistanceData}
							selectedYear={selectedYear ?? 2022}
							/>
						</>
						) : (
						<p className="text-gray-500 dark:text-gray-400">
							No data available
						</p>
						)}
					</div>
					</div>
				</div>
				)}
			</DataLoader>
			<p className="italic">
				All data from the national health registry{" "}
				<a
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline"
				>
					Norwegian Surveillance System for Antimicrobial Drug Resistance (NORM)
				</a>
				.
			</p>
		</section>
	);
}
