import DataLoader from "./data-loader";

export default function AntibioticResistanceAndDiseasesDashboards3() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<h1 className="text-3xl font-bold">
				Antimicrobial resistance occurrence (NORM)
				Antimicrobial resistance occurrence (NORM)
			</h1>
			<p>
				Norsk overvåkingssystem for antibiotikaresistens hos mikrober (
				<a 
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline" 
				>
					NORM
				</a>){" "}
				is the Norwegian Surveillance System for Antimicrobial Resistance in Microbes. 
				The health registry collect and analyse data on antibiotic resistance, working 
				with reference labs to ensure high-quality testing and data interpretation.
			</p>
			<h2 className="text-2xl font-bold">Plotting filters:</h2>
				<ul className="flex list-decimal flex-col space-y-1 pl-5">
					<li>
						<strong>Select Sample Type</strong> - allows only one sample type
					</li>
					<li>
						<strong>Select Microbes</strong> - - allows only one microbe
					</li>
					<li>
						<strong>Select Regions</strong> - allows multiple regions to be displayed as individual lines
					</li>
					<li>
						<strong>Select Antibiotics</strong> - allows multiple antibiotics to be displayed as synchronised plots
					</li>
				</ul>
			<DataLoader />
			<p className="italic">
				The data is being fetched from the national health registry{" "}
				<a
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline"
				>
					Norwegian Surveillance System for Antimicrobial Resistance in Microbes
					(NORM)
				</a>
				.
			</p>
		</section>
	);
}
