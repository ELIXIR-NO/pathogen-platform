import Image from "next/image";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import ContributorsPanel from "@/components/contributors-panel";

const references: Reference[] = [
	{
		referenceNumber: 1,
		reference:
			"Taylor Louise H., Latham Sophia M. and Woolhouse Mark E.J. 2001 Risk factors for human disease emergence Phil. Trans. R. Soc. Lond. B356983–989",
		pmcid: "PMC1088493",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1088493/",
	},
	{
		referenceNumber: 2,
		reference:
			"Swanson David, Koren Clemence, Hopp Petter, Jonsson Malin E, Rø Gunnar Isaksson, White Richard A, Grøneng Gry Marysol. A One Health real-time surveillance system for nowcasting Campylobacter gastrointestinal illness outbreaks, Norway, week 30 2010 to week 11 2022. Euro Surveill. 2022;27(43):pii=2101121",
		pmcid: "PMC9615412",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9615412/",
	}
];

export default function ToolsAndWorkflowsPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
                    <ReferencesPanel references={references} className="py-2" />
					<ContributorsPanel contributors={["dorota", "erik"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Tools and workflows</h2>
				<p>
					On this page you will find descriptions and links to tools, workflows and relevant resources for performing analysis of pathogen data. We have selected these resources because they provide software that are open source and freely available, and that we have hands-on experience working with them.
				</p>
				<p>
					ELIXIR Norway hosts a national instance of <a
						className="text-primary hover:underline"
						href="https://usegalaxy.no/"
					>
						usegalaxy
					</a>, with more than 2000 pre-installed tools and workflows. Galaxy is a web-based platform that provides users with an easy-to-use graphical interface for performing data intensive life science research. This is ideal for users that do not have access to a compute infrastructure, or simply would like to get started with their analysis without thinking about installing tools on their own system.
				</p>
				<h3 className="text-2xl font-semibold">Useful resources</h3>
				<h4 className="text-xl font-semibold">usegalaxy.no</h4>
				<p>
					The Norwegian Galaxy server is operated by ELIXIR Norway and free to use for Norwegian researchers. Multiple tools are available for performing analysis of pathogen data
					<a
						className="text-primary hover:underline"
						href="https://usegalaxy.no/"
					>
						https://usegalaxy.no/
					</a>
				</p>
				<h4 className="text-xl font-semibold">bio.tools</h4>
				<p>
					bio.tools is a comprehensive registry of software and databases maintained by ELIXIR Europe. The registry is indexed and easy to explore to find relevant tools for pathogen data analysis
					<a
						className="text-primary hover:underline"
						href="https://bio.tools/"
					>
						https://bio.tools/
					</a>
				</p>
				<h4 className="text-xl font-semibold">WorkflowHub</h4>
				<p>
					WorkflowHub is a registry for describing, sharing and publishing scientific computational workflows. The browser enables easy filtering of workflows relevant for pathogen data analysis
					<a
						className="text-primary hover:underline"
						href="https://workflowhub.eu/"
					>
						WorkflowHub
					</a>
				</p>
				<h4 className="text-xl font-semibold">GitHub</h4>
				<p>
					GitHub is an online software development platform, used for storing, tracking, and collaborating on software projects. Tools relevant for the analysis of pathogen data that are not yet registered in public tool registries can be found here
					<a
						className="text-primary hover:underline"
						href="https://github.com/"
					>
						GitHub: Let’s build from here
					</a>
				</p>
				<h4 className="text-xl font-semibold">usegalaxy.eu</h4>
				<p>
					The European Galaxy server is maintained primarily by the Freiburg Galaxy Team. Multiple tools are available for performing analysis of pathogen data
					<a
						className="text-primary hover:underline"
						href="https://usegalaxy.eu/"
					>
						https://usegalaxy.eu/
					</a>
				</p>
				<h4 className="text-xl font-semibold">microGalaxy</h4>
				<p>
					microGalaxy is a <a
						className="text-primary hover:underline"
						href="https://galaxyproject.org/community/sig/microbial/#microgalaxy-community"
					>
						community of practice
					</a> in the Galaxy community and provides a Galaxy server dedicated for Microbial data analysis in Galaxy. Multiple tools are available for performing analysis of pathogen data
					<a
						className="text-primary hover:underline"
						href="https://microgalaxy.usegalaxy.eu/"
					>
						https://microgalaxy.usegalaxy.eu/
					</a>
				</p>
			</section>
		</div>
	);
}
