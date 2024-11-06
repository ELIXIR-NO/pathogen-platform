import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import CardGrid, { CardGridData } from "@/components/card-grid";

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
	},
];

const resources: CardGridData[] = [
	{
		title: "FHI - One Health concept in Norway",
		description:
			"FHI maintains a topic page for the One Health concept in Norway.",
		link: "https://www.fhi.no/en/in/smitte-fra-mat-vann-og-dyr/artikler/one-health/",
		image: "/logos/FHI.png",
	},
	{
		title: "VI - One Health concept in Norway.",
		description:
			"VI (Veterinærinstituttet) maintains a page concerning the One Health topic. VI also lists projects and initiatives relevant to the veterinary institute. ",
		link: "https://www.vetinst.no/en-helse",
		image: "/logos/VI.png",
	},
	{
		title: "FHI - Outbreak handbook",
		description:
			"FHI provide the outbreak handbook as a tool for medical and scientific personnel. It outlines methods and responsibilities as well as provides a set of tools related to the handling of outbreaks.",
		link: "https://www.fhi.no/ut/utbruddshandboka/?term=",
		image: "/logos/FHI.png",
	},
	{
		title: "FHI - EU Horizon 2020",
		description:
			"FHI manages a webpage about the EU's Horizon 2020 project. It also describes 60 of the sub-projects in which FHI partake.",
		link: "https://www.fhi.no/en/in/smitte-fra-mat-vann-og-dyr/artikler/the-largest-ever-health-project-funded-from-the-eus-horizon-2020/",
		image: "/logos/FHI.png",
	},
];

export default function OneHealthPage() {
	return (
		<>
			<ReferencesPanel references={references} />
			<ContributorsPanel contributors={["terje"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">One Health</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/one-health/joint-tripartite-unep-one-health-graphic.png"
							alt="Figure by the World Health Organization depicting the One Health concept"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Figure by the World Health Organization depicting the One Health
						concept (
						<a
							href="https://www.who.int/news/item/01-12-2021-tripartite-and-unep-support-ohhlep-s-definition-of-one-health"
							className="text-primary hover:underline"
						>
							www.who.int
						</a>
						).
					</HoverCardContent>
				</HoverCard>
				<p className="text-center text-sm">
					Figure by the World Health Organization depicting the One Health
					concept
					<a
						className="ml-1 text-primary hover:underline"
						href="https://www.who.int/news/item/01-12-2021-tripartite-and-unep-support-ohhlep-s-definition-of-one-health"
					>
						(www.who.int)
					</a>
				</p>
				<p>
					One health (called ”en helse” in Norwegian) is an approach that
					recognizes the close connection between human health, animals, and the
					environment. This is an initiative demanding close collaboration
					between institutions working with human data, biodiversity, and the
					environment. Integrating data from these can enhance surveillance and
					the management of known and emerging infectious diseases.
				</p>
				<p>
					It is estimated that approximately 75% of emerging pathogens causing
					illness in humans are zoonotic, being derived from animals through the
					shared environment in which we live (<ReferenceOneHoverCard />
					). One health considers several types of diseases and transmission
					routes. Zoonotic diseases is one of these and represent transmissions
					from animals to humans, such as rabies, avian influenza, Mpox,
					SARS-COV2, and Ebola. Similarly, there are vector-borne diseases
					transmitted by mosquitoes and ticks, including malaria, dengue fever,
					and Lyme disease. Other examples can be found in food-borne Illnesses
					caused by e.g. salmonellosis and E. coli infections contracted through
					contaminated food products. The gastrointestinal illness caused by
					Campylobacter outbreaks in Norway over 12 years is a concrete One
					Health approach to establishing real-time disease surveillance (
					<ReferenceTwoHoverCard />
					). Environmental contamination caused by water pollution (e.g. animal
					waste products in water supply systems) or toxic waste exposure is
					also covered by this approach.
				</p>
				<p>
					By linking humans, animals, and the environment, One Health can help
					to address the full spectrum of disease control – from prevention to
					detection, preparedness, response, and forecasting – and contribute to
					global health security. There are projects in Norway aligning with the
					One health approach like the NMBU-lead{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.nmbu.no/en/research/projects/hunt-one-health"
					>
						HUNT One Health{" "}
					</a>
					and{" "}
					<a
						className="text-primary hover:underline"
						href="https://en.uit.no/project/onehealth"
					>
						The One Health Education and Research project{" "}
					</a>
					hosted by UiT. For the current list of projects by the Research
					Council of Norway see the list below pulled from Prosjektbanken.
				</p>
				<h2 className="text-2xl font-bold">
					Norwegian resources for One Health
				</h2>
				<CardGrid data={resources} />
				<h2 className="pb-2 text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=one%20health"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/statistics?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=one+health"
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
			href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1088493/"
			pmcid="PMC1088493"
			paper="Risk factors for human disease emergence."
		/>
	);
}

function ReferenceTwoHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={2}
			paper="A One Health real-time surveillance system for nowcasting Campylobacter gastrointestinal illness outbreaks, Norway, week 30 2010 to week 11 2022"
			pmcid="PMC9615412"
			href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9615412/"
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
