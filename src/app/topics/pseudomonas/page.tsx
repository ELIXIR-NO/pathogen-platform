import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardGrid, { CardGridData } from "@/components/card-grid";

const repositories: CardGridData[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description: "Folkehelseinstituttet lists Pseudomonas outbreaks in Norway.",
		link: "https://www.fhi.no/ut/utbrudd/oversikt-over-storre-utbrudd/utbrudd-av-pseudomonas-infeksjon-i-/",
		image: "/logos/FHI.png",
	},
	{
		title: "WHO - World Health Organisation",
		description:
			"WHO considers Pseudomonas as critical in terms of requirement for new antibiotics.",
		link: "https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed",
		image: "/logos/WHO.png",
	},
	{
		title: "Eurosurveillance",
		description:
			"Pseudomonas aeruginosa countrywide outbreak in Norwegian hospitals ",
		link: "https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2022.27.18.2200312",
		image: "/logos/eurosurveillance.png",
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
						<CentralImage
							src="/topics/pseudomonas/pseudomonas-aeruginosa.png"
							alt="Image of pseudomonas aeruginos"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Source:{" "}
						<a
							href="https://nanosept-disinfectant.com/pathogens/pseudomonas-aeruginosa/"
							className="text-primary hover:underline"
						>
							Nanosept
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					Pseudomonas species are Gram-negative aerobic rods, forming granular
					and dry- colonies of various colors. Their measure is from 0.5 to 0.8
					μm by 1.5 to 3.0 μm. It occupies the environment, mostly soil (coastal
					areas), water, and plant and animal tissues, and it can easily survive
					various environmental stresses. Pseudomonas means ”false unit”,
					aeruginosa refers to the blue-green colour of laboratory cultures of
					the species discovered by Carle Gessard, a French scientist, in 1882.
					In his experiment, water-soluble pigments in the presence of P.
					aeruginosa and under the ultraviolet light turned to a blue-green
					color. <span className="font-bold italic">Pseudomonas aeruginos</span>{" "}
					usually affects immunocompromised people. Healthy people usually would
					not get infected by this microbe.{" "}
					<span className="font-bold italic">P. aeruginosa</span> is an
					opportunistic pathogen, and it needs to be a break in the first
					defence line of the body. The break is a classified example as trauma,
					cystic fibrosis, surgeries, cancer, AIDS, or other immunosuppressed
					stages. These bacteria have an increased ability to erase antibiotics
					from inside the cell, leading to high resistance to antibiotics and
					common disinfectants. It primarily infects the urinary and respiratory
					tracts, swimmer&apos;s ears, cornea, wounds, and folliculitis.
					<span className="font-bold italic"> P. aeruginosa</span> is listed as
					a CRITICAL priority on the antimicrobial pathogen list published by
					the World Health Organization{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed"
					>
						(WHO)
					</a>
					.
				</p>
				<p>
					In the{" "}
					<span className="font-bold italic">Pseudomonas aeruginosa</span>{" "}
					database, you can find the genomes of the species and, corresponding
					to them, metadata with relevant information about the pathogen source
				</p>
				<h2 className="text-2xl font-bold">Data repositories</h2>
				<CardGrid data={repositories} />
				<h2 className="text-2xl font-bold">External Resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=pseudomonas&type=result&sort=PUBL_YEAR_DESC"
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
							Projektbanken
						</a>
					</li>
				</ul>
			</section>
		</>
	);
}
