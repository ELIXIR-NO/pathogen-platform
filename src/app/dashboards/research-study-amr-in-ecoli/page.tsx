import DataLoader from "./data-loader";

export default function ResearchStudyAMRiEcoli() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<h1 className="text-3xl font-bold">Research study: AMR in <i>E.coli</i></h1>
			<p>
				This dashboard offers a subset of the contextual metadata associated
				with the samples presented in the{" "}
				<a
					href="https://doi.org/10.1128/msphere.00025-23"
					className="text-primary hover:underline"
				>
					study
				</a>{" "}
				hat focused on the prevalence and population structure of ESBL-producing{" "} 
				<i>E. coli.</i> The dashboard enables filtering and visualisation of selected
				phenotypic and genotypic AMR profiles from <i>E. coli</i> in a general adult
				population (
				<a
					href="https://uit.no/research/tromsostudy"
					className="text-primary hover:underline"
				>
					Tromsø 7
				</a>
				), and from clinical isolates (
				<a
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline"
				>
					NORM
				</a>
				)
			</p>
			<DataLoader />
			<p className="italic">
				<br></br>The data is being fetched from study &quot;
				<a
					href="https://doi.org/10.1128/msphere.00025-23"
					className="text-primary hover:underline"
				>
					Community carriage of ESBL-producing Escherichia coli and Klebsiella
					pneumoniae: a cross-sectional study of risk factors and comparative
					genomics of carriage and clinical isolates
				</a>
				&quot;
			</p>
		</section>
	);
}
