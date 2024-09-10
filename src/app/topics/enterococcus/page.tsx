import ContributorsPanel from "@/components/contributors-panel";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";
import CardGrid, { CardGridData } from "@/components/card-grid";

const repositories: CardGridData[] = [
	{
		title: "Journal of Antimicrobial Resistance",
		description:
			"The first tigecycline resistant Enterococcus faecium in Norway was related to tigecycline exposure",
		link: "https://www.sciencedirect.com/science/article/pii/S2213716523002126",
		image: "/logos/science-direct.png",
	},
	{
		title: "WHO - World Health Organisation",
		description:
			"WHO considers Enterococcus as high in terms of requirement for new antibiotics.",
		link: "https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed",
		image: "/logos/WHO.png",
	},
];

export default function EnterococcusPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Enterococcus faecalis (E. faecalis)
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/topics/enterococcus/enterococcus.png"
							alt="enterococcus"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a href="https://phil.cdc.gov/Details.aspx?pid=258">
							Janice Haney Carr on Public Health Image Library (PHIL)
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					<span className="italic">
						<span className="font-bold">Enterococcus faecalis</span> (E.
						faecalis)
					</span>
					,until the year 1984, was classified as a Streptococcus faecalis. It
					is a Gram-positive coccus, and facultative anaerobic belongs to the
					lactic acid bacteria group. It is primarily present in the GI tract of
					humans, animals, and the environment. As a commensal bacterium, it
					lives harmlessly in the healthy human gut. It is commonly used as a
					probiotic i.e. However, <span className="italic">E.faecalis</span>{" "}
					could spread to the other parts of the body, causing infections. The
					bacterium can survive extreme environments such as acid and alkaline.
					Hence the <span className="italic">E.faecalis</span> antimicrobial
					resistance to antibiotics, both intrinsic and acquired, has become
					increasingly common. The resistance is mainly directed to vancomycin.
					Exterminating the bacterium from the human body could be tricky.{" "}
					<span className="italic">E.faecalis</span> is easily transferred via
					physical contact from person to person and also via contact with
					contaminated surfaces. Proper hand-washing techniques and a fibre-rich
					diet play an essential role in not becoming disease-causing members of
					the community. <span className="italic">E.faecalis</span> is listed as
					a HIGH priority on the list of antimicrobial pathogens published by
					the{" "}
					<a
						href="https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed"
						className="text-primary hover:underline"
					>
						World Health Organization (WHO).
					</a>
				</p>
				<p>
					In the <span className="font-bold italic">Enterococcus faecalis</span>{" "}
					database, you will be able to find the genomes of the species and,
					corresponding to them, metadata with relevant information about the
					pathogen source.
				</p>
				<h2 className="text-2xl font-bold">Data repositories</h2>
				<CardGrid data={repositories} />
				<h2 className="pb-2 text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=enterococcus&type=result&sort=PUBL_YEAR_DESC"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&Kilde=EU&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=enterococci"
							className="text-primary hover:underline"
						>
							Prosjektbanken
						</a>
					</li>
				</ul>
			</section>
		</>
	);
}
