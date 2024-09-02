import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

interface Contributor {
	name: string;
	position: string;
	image: string;
	description: string;
	email: string;
}

export const contributors: Contributor[] = [
	{
		name: "Erik Hjerde",
		position: "Project lead",
		image: "/people/erik.jpg",
		description:
			"Erik Hjerde works as the node leader at ELIXIR@UIT. He has a background in biology with a PhD in Genomics. During his career he has been working mainly with prokaryotes with focus on genomics, transcriptomics and metagenomic analysis on communities from both the human host as well as from various ecological habitats.",
		email: "erik.hjerde@uit.no",
	},
	{
		name: "Espen Åberg",
		position: "Data Steward",
		image: "/people/espen.jpg",
		description:
			"Espen Åberg is the Service Coordinator of ELIXIR Norway and a researcher at UiT The Arctic University of Tromsø. With a PhD in molecular medicine, he has transitioned from wet-lab cancer genomics to bioinformatics, presently focusing on metagenomics and host-microbe interactions. He currently leads ELIXIR Norway's task force on data submission and metadata platforms, mobilizing key microbial data and teaching bioinformatics and FAIR data management as a certified data steward.",
		email: "espen.aberg@uit.no",
	},
	{
		name: "Terje Klemetsen",
		position: "Analyst",
		image: "/people/terje.jpg",
		description:
			"Terje Klemetsen is the work-package leader of ELIXIR 3 Biodiversity at the Tromsø node of UiT The Arctic University of Norway. He holds a PhD in bioinformatics from UiT, specializing in comparative genomics and phylogeny. In addition, since 2017 he has contributed to the design and curation of the Marine Metagenomics Portal (MMP) and the genomic marine prokaryotic databases, including MarRef.",
		email: "terje.klemetsen@uit.no",
	},
	// {
	// 	name: "Peter Kovachich",
	// 	image: "/people/peter.jpg",
	// 	position: "Team lead",
	// 	description: "",
	// 	email: "peter.w.kovachich@uit.no",
	// },
	{
		name: "Joshua Baskaran",
		position: "System developer",
		image: "/people/joshua.jpg",
		description:
			"Bridging the worlds of molecular biology and software engineering, I bring a unique perspective to my role as a developers' team lead. My expertise lies in crafting user-centric applications, with a primary focus on cutting-edge browser-based solutions. I excel in orchestrating seamless deployments through Kubernetes, ensuring our products are robust, scalable, and always at the forefront of technology. My background in science informs my analytical approach to problem-solving, while my passion for coding drives innovation in every project I lead.",
		email: "joshua.baskaran@uit.no",
	},
	{
		name: "Danilo Martins",
		position: "System developer",
		image: "/people/danilo.jpg",
		description:
			"With a background in Information Technology and a master's degree in Bioinformatics from the Federal University of Rio Grande do Norte in Brazil, I bring a distinctive perspective to my role in technology development. My expertise is focused on creating innovative solutions, including the design and implementation of pipelines and web applications.",
		email: "danilo.l.martins@uit.no",
	},
	// {
	// 	name: "Dorota Buczek",
	// 	position: "ELIXIR support",
	// 	image: "/people/dorota.jpg",
	// 	description: "",
	// 	email: "dorota.j.buczek@uit.no",
	// },
	{
		name: "Sebastian Peters",
		position: "ELIXIR support",
		image: "/people/sebastian.jpg",
		description:
			"Sebastian Peters works as a support being involved in support, helpdesk, training, data curation, and data processing for genomics and transcriptomics projects. He has a background in environmental soil metatranscriptomics focusing on trophic interactions and predatory prokaryotes (myxobacteria) and their role in the soil food web, before switching to marine genomics and transcriptomics with a main focus on phototrophic eukaryotes (microalgae) and their interactions in the phycosphere.",
		email: "sebastian.petters@uit.no",
	},
];

export default function PathogenPortalContributors() {
	return (
		<section className="mt-6 grid grid-cols-3 gap-4">
			{contributors.map((contributor) => (
				<Card
					key={contributor.email}
					className="flex flex-col hover:shadow-2xl"
				>
					<CardHeader>
						<CardTitle>{contributor.name}</CardTitle>
						<CardDescription>{contributor.position}</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-grow flex-col items-center justify-between">
						<Image
							src={contributor.image}
							alt={contributor.name}
							width={200}
							height={200}
							className="mb-4 rounded-full object-cover"
						/>
						<p className="flex-grow text-justify text-sm font-semibold">
							{contributor.description}
						</p>
					</CardContent>
					<CardFooter className="mt-auto">
						<Link href={`mailto:${contributor.email}`} className="w-full">
							<Button
								size="icon"
								variant="default"
								className="flex w-full flex-row items-center space-x-4 p-4"
							>
								<Mail /> <span>{contributor.email}</span>
							</Button>
						</Link>
					</CardFooter>
				</Card>
			))}
		</section>
	);
}
