import DataLoader from "./data-loader";

export default function AntibioticResistanceAndDiseasesDashboards3() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<h1 className="text-3xl font-bold">
				Antimicrobial resistance occurrence
			</h1>
			<p>
				<a href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober">
					NORM
				</a>{" "}
				data from four different isolation sources “Blood”, “Wound”, “Urine” and
				“Respiratory tract” has been merged. Multiple geographical regions,
				species and resistance genes can be selected, exemplified in the plot
				below.
			</p>
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
