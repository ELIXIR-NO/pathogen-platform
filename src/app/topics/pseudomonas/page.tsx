import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import ContributorsPanel from "@/components/contributors-panel";
import Link from "next/link";

const norwegianResources: {
	title: string;
	description: string;
	image: string;
	link: string;
}[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description: "Overview of a Pseudomonas infection outbreak in Norway.",
		image: "FHI-logo.png",
		link: "https://www.fhi.no/ut/utbrudd/oversikt-over-storre-utbrudd/utbrudd-av-pseudomonas-infeksjon-i-/",
	},
	{
		title: "World Health Organisation (WHO)",
		description:
			"WHO list of bacteria for which new antibiotics are urgently needed.",
		image: "WHO-logo.png",
		link: "https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed",
	},
	{
		title: "Pseudomonas aeruginosa Outbreak",
		description:
			"Countrywide outbreak of Pseudomonas aeruginosa in Norwegian hospitals.",
		image: "eurosurveillance-logo.jpg",
		link: "https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2022.27.18.2200312",
	},
];

export default function PseudomonasPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota", "sebastian"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Pseudomonas</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/topics/pseudomonas/pseudomonas-aeruginosa.jpg"
							alt="Image of pseudomonas aeruginosa"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							href="https://nanosept-disinfectant.com/pathogens/pseudomonas-aeruginosa/"
							className="text-primary hover:underline"
						>
							Nanosept
						</a>{" "}
					</HoverCardContent>
				</HoverCard>
				<p>
					<span className="font-bold">Pseudomonas</span> species are
					Gram-negative aerobic rods, forming granular and dry colonies of
					various <span className="italic">colours</span>. Their measure is from
					0.5 to 0.8 μm by 1.5 to 3.0 μm. They inhabit environments like soil
					(coastal areas), water, and plant and animal tissues, easily surviving
					environmental stresses. <span className="italic">Pseudomonas</span>{" "}
					means “false unit”, while <span className="italic">aeruginosa</span>{" "}
					refers to the blue-green colour of laboratory cultures discovered by
					Carle Gessard, a French scientist, in 1882. He found that under
					ultraviolet light, water-soluble pigments of{" "}
					<span className="italic">P. aeruginosa</span> turn blue-green.{" "}
					<span className="italic">Pseudomonas aeruginosa</span> primarily
					affects immunocompromised individuals. Healthy people are usually not
					at risk of infection from this microbe.{" "}
					<span className="italic">P. aeruginosa</span> is an opportunistic
					pathogen. It requires a break in the body&#39;s first line of defense,
					such as trauma, cystic fibrosis, surgeries, cancer, AIDS, or other
					immunosuppressive conditions. These bacteria are known for their
					resistance to antibiotics and disinfectants, as they can expel
					antibiotics from within the cell. They primarily infect the urinary
					and respiratory tracts, swimmer&#39;s ears, cornea, wounds, and cause
					folliculitis. <span className="italic">P. aeruginosa</span> is listed
					as a CRITICAL priority on the antimicrobial pathogen list published by
					the{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed"
					>
						World Health Organization (WHO)
					</a>
					.
				</p>
				<p>
					In the{" "}
					<span className="font-bold italic">Pseudomonas aeruginosa</span>{" "}
					database, you can find genomes of the species along with relevant
					metadata about the pathogen source.
				</p>
				<h3 className="text-2xl font-bold">Norwegian Resources</h3>
				<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{norwegianResources.map((resource) => (
						<Card
							key={resource.title}
							className="flex h-full flex-col transition-shadow duration-300 hover:shadow-2xl"
						>
							<Link href={resource.link} className="flex h-full flex-col">
								<CardHeader>
									<CardTitle className="text-lg">{resource.title}</CardTitle>
									<CardDescription></CardDescription>
								</CardHeader>
								<CardContent className="flex flex-col items-center justify-center space-y-6">
									<Image
										src={`/topics/pseudomonas/${resource.image}`}
										alt={resource.title}
										width={500}
										height={250}
										className="aspect-video self-center object-fill"
									/>
									<p className="text-justify text-sm">{resource.description}</p>
								</CardContent>
							</Link>
						</Card>
					))}
				</div>
				<div>
					<h2 className="pb-2 text-2xl font-bold">External Resources</h2>
					<ul className="list-disc pl-5">
						<li>
							Latest publication in{" "}
							<a
								href="https://app.cristin.no/search.jsf?t=pseudomonas&type=result&filter=category_idfacet~ARTICLE&sort=PUBL_YEAR_DESC"
								className="text-primary hover:underline"
							>
								Cristin
							</a>
						</li>
						<li>
							Ongoing projects listed in{" "}
							<a
								href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&Kilde=EU&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=pseudomonas"
								className="text-primary hover:underline"
							>
								Prosjektbanken
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
