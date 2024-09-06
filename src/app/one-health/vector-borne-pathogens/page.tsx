import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardGrid, { CardGridData } from "@/components/card-grid";

const resources: CardGridData[] = [
	{
		title: "Annual reports",
		description:
			"The FHI (Folkehelseinstituttet) is responsible for collecting and publishing of annual reports on the surveillance of diseases caused by vector-borne pathogens in Norway.",
		link: "https://www.fhi.no/publ/2024/overvakning-av-infeksjonssykdommer-som-smitter-fra-mat-vann-og-dyr-inkludert-vektorbarne-sykdommer/",
		image: "/logos/FHI.png",
	},
	{
		title: "MSIS",
		description:
			"The health registry MSIS (Meldingssystem for smittsomme sykdommer) is the official system for monitoring infectious diseases in humans, including those transmitted through vector-borne pathogens in Norway.",
		link: "https://msis.no/",
		image: "/logos/FHI.png",
	},
	{
		title: "Flåttsenteret",
		description:
			"Flåttsenteret (The Tick Center) is a national competence center that work to increase knowledge about the diagnosis and treatment of tick-borne diseases. Flåttsenteret offers information and advice on tick-borne diseases, and engage in research.",
		link: "https://www.sshf.no/avdelinger/fagavdelingen/flattsenteret/",
		image: "/logos/sykehus.png",
	},
];

export default function VectorBornePathogensPage() {
	return (
		<>
			<ContributorsPanel contributors={["erik"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Vector-borne pathogens</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/one-health/vector-borne-pathogens/marino-linic-M_krTMIPSLg-unsplash.jpg"
							alt="Photo by Marino Linic on Unsplash"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/@marinolinic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Marino Linic
						</a>{" "}
						on{" "}
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/photos/a-person-holding-a-small-bug-M_krTMIPSLg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					Vector-borne pathogens are transmitted to humans through vectors,
					which are typically arthropods such as mosquitoes, ticks, or fleas.
					The general transmission pathway is that the vector becomes infected
					by feeding on the blood of an infected host (often an animal) and then
					transmits the pathogen to a human host through subsequent bites.
				</p>
				<p>
					The key difference from zoonotic pathogens is that vector-borne
					pathogens require an intermediary vector for transmission to humans.
				</p>
				<h2 className="text-2xl font-bold">Norwegian Resources</h2>
				<p>
					The{" "}
					<a
						href="https://www.fhi.no/"
						className="text-primary hover:underline"
					>
						FHI (Folkehelseinstituttet)
					</a>{" "}
					monitors the occurrence of vector-borne pathogens, such as tick-borne
					encephalitis (TBE) and Lyme disease caused by Borrelia bacteria. They
					are responsible for collecting and publishing{" "}
					<a
						href="https://www.fhi.no/publ/2024/"
						className="text-primary hover:underline"
					>
						annual reports
					</a>{" "}
					on the surveillance of diseases caused by vector-borne pathogens in
					Norway. In addition to vector-borne pathogens, the report (Overvåkning
					av infeksjonssykdommer som smitter fra mat, vann og dyr, inkludert
					vektorbårne sykdommer) includes infectious diseases caused by food-
					and waterborne and zoonotic pathogens.
				</p>
				<CardGrid data={resources} />
				<h2 className="pb-2 text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=Vector-borne&type=result"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=Vector-borne&Portefoljestyrer.1=Portef%C3%B8lje+Mat+og+bioressurser"
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
