import ContributorsPanel from "@/components/contributors-panel";
import CardGrid, { CardGridData } from "@/components/card-grid";

const resources: CardGridData[] = [
	{
		title: "usegalaxy.no",
		description:
			"The Norwegian Galaxy server is operated by ELIXIR Norway and is free to use for Norwegian researchers. Multiple tools are available for performing analysis of pathogen data.",
		link: "https://usegalaxy.no/",
		image: "/logos/usegalaxy.png",
	},
	{
		title: "bio.tools",
		description:
			"bio.tools is a comprehensive registry of software and databases maintained by ELIXIR Europe. The registry is indexed and easy to explore to find relevant tools for pathogen data analysis.",
		link: "https://bio.tools/",
		image: "/logos/elixir-biotools.png",
	},
	{
		title: "WorkflowHub",
		description:
			"WorkflowHub is a registry for describing, sharing and publishing scientific computational workflows. The browser enables easy filtering of workflows relevant to pathogen data analysis.",
		link: "https://workflowhub.eu/",
		image: "/logos/workflowhub.png",
	},
	{
		title: "GitHub",
		description:
			"GitHub is an online software development platform, used for storing, tracking, and collaborating on software projects. Tools relevant to the analysis of pathogen data that are not yet registered in public tool registries can be found here.",
		link: "https://github.com/",
		image: "/logos/GitHub.png",
	},
	{
		title: "usegalaxy.eu",
		description:
			"The European Galaxy server is maintained primarily by the Freiburg Galaxy Team. Multiple tools are available for performing analysis of pathogen data.",
		link: "https://usegalaxy.eu/",
		image: "/logos/usegalaxy.png",
	},
	{
		title: "microGalaxy",
		description:
			"microGalaxy is a community of practice in the Galaxy community and provides a Galaxy server dedicated to Microbial data analysis in Galaxy. Multiple tools are available for performing analysis of pathogen data.",
		link: "https://microgalaxy.usegalaxy.eu/",
		image: "/logos/usegalaxy.png",
	},
];

export default function ToolsAndWorkflowsPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota", "erik"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Tools and workflows</h2>
				<p>
					On this page you will find descriptions and links to tools, workflows
					and relevant resources for performing analysis of pathogen data. We
					have selected these resources because they provide software that are
					open source and freely available, and that we have hands-on experience
					working with them.
				</p>
				<p>
					ELIXIR Norway hosts a national instance of{" "}
					<a
						className="text-primary hover:underline"
						href="https://usegalaxy.no/"
					>
						usegalaxy
					</a>
					, with more than 2000 pre-installed tools and workflows. Galaxy is a
					web-based platform that provides users with an easy-to-use graphical
					interface for performing data intensive life science research. This is
					ideal for users that do not have access to a compute infrastructure,
					or simply would like to get started with their analysis without
					thinking about installing tools on their own system.
				</p>
				<h3 className="text-2xl font-bold">Useful resources</h3>
				<CardGrid data={resources} />
			</section>
		</>
	);
}
