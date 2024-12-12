import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";
import CardGrid, { CardGridData } from "@/components/card-grid";
import CentralImage from "@/components/central-image";

const resources: CardGridData[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description:
			"Mycoplasma pneumoniae infections - handbook for health professionals.",
		link: "https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/mycoplasma-pneumoniae-infeksjoner/?term=",
		image: "/logos/FHI.png",
	},
	{
		title: "FHI - Folkehelseinstituttet",
		description: "Varied informations regarding Mycoplasma infections",
		link: "https://www.fhi.no/sys/sok/?term=Mycoplasma",
		image: "/logos/FHI.png",
	},
	{
		title: "FHI - Folkehelseinstituttet",
		description:
			"Weekly summaries and graphs of samples with respectively detected respiratory viruses and detected respiratory bacteria",
		link: "https://www.fhi.no/publ/statusrapporter/luftveisinfeksjoner/",
		image: "/logos/FHI.png",
	},
	{
		title: "WHO - World Health Organisation",
		description: "Disease Outbreak News.",
		link: "https://www.who.int/emergencies/disease-outbreak-news/item/2023-DON494",
		image: "/logos/WHO.png",
	},
	{
		title: "CDC",
		description: "About Mycoplasma pneumoniae Infection.",
		link: "https://www.cdc.gov/mycoplasma/about/index.html",
		image: "/logos/cdc.svg",
	},
];

export default function MpoxPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h1 className="text-3xl font-bold">Mycoplasma</h1>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/topics/mycoplasma/mycoplasma.png"
							alt="Mycoplasma"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent>Generate by AI</HoverCardContent>
				</HoverCard>
				<p className="text-justify">
					<strong>Mycoplasma</strong> are small, typically between 0.1 to 0.3
					micrometers in diameter, and are pleomorphic, meaning they can vary in
					shape example: spherical, ovoid, or even branched under a microscope.
					This feature allows them to squeeze through tight spaces and avoid
					some antibiotics, especially those that target cell walls, like
					penicillin. They are unique in that they lack a cell wall, unlike most
					bacteria, which gives them unusual flexibility and resilience.
				</p>
				<p className="text-justify">
					<strong>
						<i>Mycoplasma pneumoniae</i>
					</strong>{" "}
					infections have been on the rise in Europe, including Norway,
					following a recent trend of increased cases across multiple countries{" "}
					<strong>(Figure 1)</strong>. Known for causing respiratory infections
					such as &quot;walking pneumonia&quot;, <i>Mycoplasma pneumoniae</i>{" "}
					primarily affects children and young adults and often results in mild
					symptoms like a persistent cough and fever. Recently, however, some
					regions have reported more severe symptoms and a notable rise in
					hospital visits due to complications, particularly in younger children
					under age five, a demographic not typically as impacted by Mycoplasma
					infections in the past.
				</p>
				<p className="text-justify">
					In Norway, public health authorities are closely monitoring the
					situation and coordinating with European and U.S. health agencies to
					understand the potential for antibiotic resistance in these cases.
					While <i>Mycoplasma pneumoniae</i>
					infections are usually treated with macrolides, resistance to these
					antibiotics has been observed, particularly in regions like Asia and
					occasionally in the United States and Europe. Norway&#39;s health
					services are advising vigilance in monitoring symptoms and have issued
					guidance on treatment practices to address this emerging resistance
					concern.
				</p>

				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/topics/mycoplasma/mykoplasma1.png"
							alt="Influenza Virus"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-[400px]">
						Figure 1. Number of detections of Mycoplasma pneumoniae per week, 3
						January 2022 - 18 August 2024. Source: FHI, MSIS lab database.
					</HoverCardContent>
				</HoverCard>

				<h2 className="text-2xl font-bold">
					<strong>
						<i>Mycoplasma pneumoniae</i>
					</strong>{" "}
					facts in Norway
				</h2>
				<h3 className="text-2xl font-bold">
					<strong>Outbreak Overview</strong>
				</h3>
				<ul className="flex flex-col space-y-1">
					<li>
						Norway is currently experiencing a significant outbreak of{" "}
						<i>Mycoplasma pneumoniae</i>.
					</li>
					<li>
						The outbreak began intensifying in <strong>late summer 2023</strong>{" "}
						and has continued into <strong>2024</strong>.
					</li>
					<li>
						There is over <strong>3,500</strong> cases detected since the
						beginning of July 2023. The most affected groups are school children
						between 5-14 years old. However, there is significant number of
						hospitalized young adults.
					</li>
					<li>
						The common symptoms are general cold-like symptoms and persistent
						cough.
					</li>
				</ul>

				<h3 className="text-2xl font-bold">
					<strong>Antibiotic Resistance Concerns</strong>
				</h3>
				<p className="text-justify">
					There is growing concern about resistance to macrolide antibiotics
					(e.g., azithromycin), the first-line treatment for{" "}
					<i>Mycoplasma pneumoniae</i>.
				</p>
				<h3 className="text-2xl font-bold">
					<strong>Treatment Options</strong>
				</h3>
				<p className="text-justify">
					First-Line Antibiotics: Macrolides (e.g., azithromycin, erythromycin)
					are typically prescribed.
				</p>

				<h2 className="text-2xl font-bold">Resources</h2>
				<CardGrid data={resources} />
				<h2 className="text-2xl font-bold">External Resource</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=mycoplasma&type=result&filter=category_idfacet~ARTICLE"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=Mycoplasma"
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
