import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import CardGrid, { CardGridData } from "@/components/card-grid";

const references: Reference[] = [
	{
		referenceNumber: 1,
		reference:
			"Jeffery S, Van Der Putten W. Soil Borne Human Diseases. EUR 24893 EN. Luxembourg (Luxembourg): Publications Office of the European Union; 2011. JRC65787",
		pmcid: "",
		link: "https://publications.jrc.ec.europa.eu/repository/handle/JRC65787",
	},
];

const resources: CardGridData[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description:
			"The FHI is a central institution for monitoring infectious diseases, including those transmitted through environmental sources.",
		link: "https://www.fhi.no/",
		image: "/logos/FHI.png",
	},
	{
		title: "MSIS",
		description:
			"The health registry MSIS (Meldingssystem for smittsomme sykdommer) is the official system for monitoring infectious diseases in humans, including those transmitted through environmental sources.",
		link: "https://msis.no/",
		image: "/logos/FHI.png",
	},
	{
		title: "Mattilsynet",
		description:
			"Mattilsynet (Norwegian Food Safety Authority) is responsible for ensuring the safety of food and water, which includes monitoring and controlling pathogens that can be transmitted through these environmental mediums. The authority conducts inspections, enforces regulations, and responds to contamination incidents that could lead to public health risks.",
		link: "https://www.mattilsynet.no/",
		image: "/logos/mattilsynet.png",
	},
];

export default function EnvironmentallyTransmittedPathogenPage() {
	return (
		<>
			<ContributorsPanel contributors={["erik"]} />
			<ReferencesPanel references={references} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Environmentally transmitted pathogens
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/one-health/environmentally-transmitted-pathogen/jacek-kadaj-oG88wo81y70-unsplash.jpg"
							alt="Photo by Jacek Kadaj on Unsplash"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/@jacekkadaj?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Jacek Kadaj
						</a>{" "}
						on{" "}
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/photos/an-aerial-view-of-a-blue-lake-surrounded-by-trees-oG88wo81y70?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					Many human pathogens can be transmitted only by direct or close
					contact with an infected person. However, some pathogenic
					microorganisms can be found in the environment and are capable of
					infecting humans and causing disease.
				</p>
				<p>
					Environmentally transmitted pathogens include bacteria, parasites, and
					viruses, and can be found in various environments such as water, soil,
					and waste. Some of these pathogens are dependent on the host and can
					only live hours outside the host (e.g.{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5340262/"
					>
						Neisseria meningitidis
					</a>
					), while others spend most or all of their lives in the environment
					(e.g.{" "}
					<a
						className="text-primary hover:underline"
						href="https://pubmed.ncbi.nlm.nih.gov/11207747/"
					>
						Legionella pneumophila
					</a>
					). The European Commission&apos;s Joint Research Centre (JRC) has made
					a report giving an overview of soil-borne diseases of humans (
					<ReferenceOneHoverCard />
					).
				</p>
				<h3 className="font-bold">Norwegian resources</h3>
				<p>
					In Norway, several public resources and institutions are dedicated to
					monitoring and managing environmentally transmitted pathogens. These
					pathogens, which can be spread through environmental sources such as
					water, soil, and air, pose risks to public health and require
					coordinated efforts for surveillance and control.
				</p>
				<p>
					The National Institute of Public Health (
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						Folkehelseinstituttet
					</a>
					) is responsible for monitoring the occurrence of food- and waterborne
					diseases and zoonoses in humans and providing advice on infection
					control measures. Read more about the surveillance and measures{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/sm/smitte-fra-mat-vann-dyr/"
					>
						here
					</a>
					.{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						Folkehelseinstituttet
					</a>{" "}
					is operating{" "}
					<a className="text-primary hover:underline" href="https://vesuv.no/">
						Vesuv
					</a>
					, a web-based outbreak alert system for specialist and municipal
					health services as well as Mattilsynet.
				</p>
				<CardGrid data={resources} />
				<h2 className="pb-2 text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=Environmental%20pathogens&type=result"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=date&sortOrder=desc&resultCount=30&offset=0&Fritekst=%22Environmental+pathogens%22+%22Environmentally+transmitted+pathogens%22+%22Soil+pathogens%22&Portefoljestyrer.1=Portef%C3%B8lje+Mat+og+bioressurser"
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

function ReferenceOneHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={1}
			paper="Soil Borne Human Diseases. EUR 24893 EN. Luxembourg (Luxembourg): Publications Office of the European Union; 2011. JRC65787"
			pmcid=""
			href="https://publications.jrc.ec.europa.eu/repository/handle/JRC65787"
		/>
	);
}

function ReferenceHoverCard({
	refNumber,
	paper,
	pmcid,
	href,
}: {
	refNumber: number;
	paper: string;
	pmcid: string;
	href: string;
}) {
	return (
		<HoverCard>
			<HoverCardTrigger className="cursor-pointer text-primary hover:underline">
				{refNumber}
			</HoverCardTrigger>
			<HoverCardContent className="text-small w-[500px] text-justify">
				{paper};PMCID:
				<a href={href} className="text-primary hover:underline">
					{pmcid}
				</a>
			</HoverCardContent>
		</HoverCard>
	);
}
