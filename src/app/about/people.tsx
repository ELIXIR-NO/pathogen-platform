import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contributors: {name: string, image: string, description: string, email: string}[] = [
	{
		name: "Erik Hjerde - Project lead",
		image: "/people/erik.jpg",
		description:
			"Erik Hjerde works as the node leader at ELIXIR@UIT. He has a background in biology with a PhD in Genomics. During his career he has been working mainly with prokaryotes with focus on genomics, transcriptomics and metagenomic analysis on communities from both the human host as well as from various ecological habitats.",
		email: "erik.hjerde@uit.no",
	},
	{
		name: "Peter Kovachich - Team lead",
		image: "/people/peter.jpg",
		description: "",
		email: "peter.w.kovachich@uit.no",
	},
	{
		name: "Joshua Baskaran - System developer",
		image: "/people/joshua.jpg",
		description:
			"Bridging the worlds of molecular biology and software engineering, I bring a unique perspective to my role as a developers' team lead. My expertise lies in crafting user-centric applications, with a primary focus on cutting-edge browser-based solutions. I excel in orchestrating seamless deployments through Kubernetes, ensuring our products are robust, scalable, and always at the forefront of technology. My background in science informs my analytical approach to problem-solving, while my passion for coding drives innovation in every project I lead.",
		email: "joshua.baskaran@uit.no",
	},
	{
		name: "Danilo Martins - System developer",
		image: "/people/danilo.jpg",
		description:
			"With a background in Information Technology and a master's degree in Bioinformatics from the Federal University of Rio Grande do Norte in Brazil, I bring a distinctive perspective to my role in technology development. My expertise is focused on creating innovative solutions, including the design and implementation of pipelines and web applications.",
		email: "danilo.l.martins@uit.no",
	},
	{
		name: "Espen Åberg - Data Steward",
		image: "/people/espen.jpg",
		description:
			"Espen Åberg is the Service Coordinator of ELIXIR Norway and a researcher at UiT The Arctic University of Tromsø. With a PhD in molecular medicine, he has transitioned from wet-lab cancer genomics to bioinformatics, presently focusing on metagenomics and host-microbe interactions. He currently leads ELIXIR Norway's task force on data submission and metadata platforms, mobilizing key microbial data and teaching bioinformatics and FAIR data management as a certified data steward.",
		email: "espen.aberg@uit.no",
	},
	{
		name: "Dorota Buczek - ELIXIR support",
		image: "/people/dorota.jpg",
		description: "",
		email: "dorota.j.buczek@uit.no",
	},
	{
		name: "Terje Klemetsen",
		image: "/people/terje.jpg",
		description:
			"Terje Klemetsen is the work-package leader of ELIXIR 3 Biodiversity at the Tromsø node of UiT The Arctic University of Norway. He holds a PhD in bioinformatics from UiT, specializing in comparative genomics and phylogeny. In addition, since 2017 he has contributed to the design and curation of the Marine Metagenomics Portal (MMP) and the genomic marine prokaryotic databases, including MarRef.",
		email: "terje.klemetsen@uit.no",
	},
	{
		name: "Sebastian Peters - ELIXIR support",
		image: "/people/sebastian.jpg",
		description:
			"Sebastian Peters works as a support being involved in support, helpdesk, training, data curation, and data processing for genomics and transcriptomics projects. He has a background in environmental soil metatranscriptomics focusing on trophic interactions and predatory prokaryotes (myxobacteria) and their role in the soil food web, before switching to marine genomics and transcriptomics with a main focus on phototrophic eukaryotes (microalgae) and their interactions in the phycosphere.",
		email: "sebastian.petters@uit.no",
	},
];

export default function PathogenPortalContributors() {
	return (
		<section className="p-6">
			<h2 className="mb-6 text-3xl font-bold">Pathogen Portal Contributors</h2>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{contributors.map((contributor, index) => (
					<Card key={index} className="flex flex-col items-center">
						<CardHeader className="flex flex-col items-center">
							<div className="mb-4 h-[150px] w-[150px] overflow-hidden rounded-full">
								<Image
									src={contributor.image}
									alt={contributor.name}
									width={150}
									height={150}
									className="h-full w-full rounded-full object-cover"
								/>
							</div>
							<CardTitle className="text-center">{contributor.name}</CardTitle>
							<a
								className="text-center italic text-primary hover:underline"
								href={`mailto:${contributor.email}`}
							>
								{contributor.email}
							</a>
						</CardHeader>
						<CardContent>
							<p className="text-center font-normal">
								{contributor.description}{" "}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
