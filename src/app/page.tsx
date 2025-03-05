import HighlightPanel from "@/components/highlight-panel";
import QuickView from "@/components/quick-view";

export default function Home() {
	return (
		<main className="flex w-full flex-col gap-y-3">
			<div className="text-center text-3xl font-bold">
				Pathogen Portal Norway
			</div>
			<div className="text-justify">
				The portal provides information about available datasets, resources,
				tools, and services related to pandemic preparedness in Norway. The
				portal gives researchers, clinicians and policymakers access to an
				extensive collection of biomolecular data about pathogens. The Portal
				will also be the main access to the Norwegian Pathogen Data Hub which
				enables sharing pathogen data and their associated
				clinical/epidemiological metadata under controlled access.
			</div>
			<HighlightPanel />
			<QuickView title="One Health" searchFor="tags" searchTerm="One health" />
			<QuickView
				title="Antimicrobial resistance"
				searchFor="tags"
				searchTerm="Antimicrobial resistance"
			/>
			<QuickView
				title="Infectious disease"
				searchFor="tags"
				searchTerm="Infectious disease"
			/>
		</main>
	);
}
