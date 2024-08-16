import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function DatabasesPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["dorota", "erik"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Databases and public repositories</h2>
				<p>
					On this page you will find descriptions and links to databases and data repositories relevant for research on pathogen data. We have selected these resources because they are public and freely available.
				</p>
				<h3 className="text-2xl font-semibold">The Pathogens Portal</h3>
				<p>
					A web portal for accessing open data on emerging and endemic pathogens. Developed and maintained by EMBL-EBI
					<a
						className="text-primary hover:underline"
						href="https://www.pathogensportal.org/"
					>
						https://www.pathogensportal.org/
					</a>
				</p>
				<h3 className="text-2xl font-semibold">European Nucleotide Archive</h3>
				<p>
					The European Nucleotide Archive (ENA) is a repository providing free and unrestricted access to annotated DNA and RNA sequences: 
					<a
						className="text-primary hover:underline"
						href="https://www.ebi.ac.uk/ena/browser/home"
					>
						https://www.ebi.ac.uk/ena/browser/home
					</a>
				</p>
			</section>
		</div>
	);
}
