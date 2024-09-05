import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import CardGrid, { CardGridData } from "@/components/card-grid";

const references: Reference[] = [
	{
		referenceNumber: 1,
		reference:
			"Kugelman JR, Johnston SC, Mulembakani PM, Kisalu N, Lee MS, Koroleva G, McCarthy SE, Gestole MC, Wolfe ND, Fair JN, Schneider BS, Wright LL, Huggins J, Whitehouse CA, Wemakoy EO, Muyembe-Tamfum JJ, Hensley LE, Palacios GF, Rimoin AW. Genomic variability of monkeypox virus among humans, Democratic Republic of the Congo. Emerg Infect Dis. 2014 Feb;20(2):232-9. doi: 10.3201/eid2002.130118. PMID: 24457084",
		pmcid: "PMC3901482",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3901482/",
	},
	{
		referenceNumber: 2,
		reference:
			"Masood W, Khan HA, Cheema HA, Shahid A, Bilal W, Kamal MA, Essar MY, Ahmad S, Marzo RR. The Past, Present, and Future of Monkeypox: A Rapid Review Regarding Prevalence and Prevention. Inquiry. 2022 Jan-Dec;59:469580221139366. doi: 10.1177/00469580221139366. PMID: 36484333",
		pmcid: "PMC9742718",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9742718/",
	},
	{
		referenceNumber: 3,
		reference:
			"Karagoz A, Tombuloglu H, Alsaeed M, Tombuloglu G, AlRubaish AA, Mahmoud A, Smajlović S, Ćordić S, Rabaan AA, Alsuhaimi E. Monkeypox (mpox) virus: Classification, origin, transmission, genome organization, antiviral drugs, and molecular diagnosis. J Infect Public Health. 2023 Apr;16(4):531-541. doi: 10.1016/j.jiph.2023.02.003. Epub 2023 Feb 9. PMID: 36801633",
		pmcid: "PMC9908738",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9908738/",
	},
	{
		referenceNumber: 4,
		reference:
			"Mathieu E., Spooner F., Dattani S., Ritchie H. and Roser M. (2022) - “Mpox” Published online at OurWorldInData.org. Retrieved from: 'https://ourworldindata.org/mpox' [Online Resource]",
		pmcid: "",
		link: "https://ourworldindata.org/mpox",
	},
];

const resources: CardGridData[] = [
	{
		title: "FHI - Mpox topic",
		description:
			"FHI (Folkehelseinstituttet) maintains a topic page for the Mpox in Norway.",
		link: "https://www.fhi.no/en/id/mpox/",
		image: "/logos/FHI.png",
	},
	{
		title: "FHI - Mpox naming convention in Norwegian",
		description:
			"FHI (Folkehelseinstituttet) also regulate the official nomenclature and naming related to the viral disease.",
		link: "https://www.fhi.no/ss/mpox/fhi-beholder-navnet-apekopper/",
		image: "/logos/FHI.png",
	},
	{
		title: "Press releases from the Norwegian government",
		description:
			"A filtered search for Mpox related news statemens and press releases by the Norwegian government.",
		link: "https://www.regjeringen.no/no/sok/id86008/?isfilteropen=True&term=apekopper",
		image: "/logos/regjeringen.jpg",
	},
	{
		title: "Store medisinske leksikon - Mpox",
		description: "Mpox related articles by the Norwegian lexicon.",
		link: "https://snl.no/.search?query=apekopper",
		image: "/logos/snl.png",
	},
];

export default function MpoxPage() {
	return (
		<>
			<ReferencesPanel references={references} />
			<ContributorsPanel contributors={["terje"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h1 className="text-3xl font-bold">Overview</h1>
				<p className="text-justify">
					The monkeypox virus (MPXV), abbreviated Mpox, is a zoonotic disease
					induced by the monkeypox virus of the genus Orthopoxvirus(
					<ReferenceOneHoverCard />,<ReferenceTwoHoverCard />
					). Its common transmission is through physical contact with infected
					individuals, animals, or contaminated surfaces and is estimated to
					have a 10% fatality rate. The virus is considered endemic to Africa
					and occurs naturally in countries like the Democratic Republic of
					Congo (DRC) (<ReferenceOneHoverCard />
					).
				</p>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/topics/monkeypox/monkeypox-transmission.jpeg"
							alt="Monkeypox Transmission"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent>
						Transmission of MPVX(
						<ReferenceTwoHoverCard />)
					</HoverCardContent>
				</HoverCard>
				<p className="text-justify">
					The Mpox genome sequence is dsDNA-based, has roughly 192,200 bases,
					contains 181 protein-coding genes, and has a highly conserved central
					region (<ReferenceOneHoverCard />
					,<ReferenceThreeHoverCard />
					). The terminal regions are more variable and harbor genes that play
					roles in determining the range of hosts the virus can infect and the
					mechanisms causing disease (<ReferenceOneHoverCard />
					).
				</p>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/topics/monkeypox/daily-cases.png"
							alt="Graph showing daily cases of monkeypox"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-[400px]">
						Daily confirmed cases by the WHO between May 1. 2022 and August 25.
						2024 and cumulative confirmed cases reported around the world.
						Source: Our World in data (
						<a
							href="https://ourworldindata.org/monkeypox"
							className="text-primary hover:underline"
						>
							https://ourworldindata.org/monkeypox
						</a>
						, 2024-08-27, 4)
					</HoverCardContent>
				</HoverCard>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/topics/monkeypox/daily-cases-2.png"
							alt="Daily cases of monkeypox"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-[400px]">
						Daily confirmed cases by the WHO between May 1. 2022 and August 25.
						2024 and cumulative confirmed cases reported around the world.
						Source: Our World in data (
						<a
							href="https://ourworldindata.org/monkeypox"
							className="text-primary hover:underline"
						>
							https://ourworldindata.org/monkeypox
						</a>
						, 2024-08-27, 4)
					</HoverCardContent>
				</HoverCard>
				<p className="text-justify">
					To provide high-value data the Tromsø node of ELIXIR Norway has
					created a{" "}
					<a
						href="https://datawidgets.sfb.uit.no/mPox/browser"
						className="text-primary hover:underline"
					>
						database
					</a>{" "}
					of 5856 manually curated mpox virus sequences. Metadata for these
					sequences have been cleaned, standardized, and enriched with fitting
					ontology terms to better tie the sequence data to available contextual
					information relating the samples to their origins.
				</p>
				<h2 className="text-2xl font-bold">Norwegian resources for Mpox</h2>
				<CardGrid data={resources} />
				<h2 className="text-2xl font-bold">External Resource</h2>
				<ul className="flex list-disc flex-col space-x-2 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=monkey%20pox"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
						<li>
							Ongoing projects listed in{" "}
							<a
								href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=date&sortOrder=desc&resultCount=30&offset=0&Fritekst=Mpox,+monkey+pox."
								className="text-primary hover:underline"
							>
								Projektbanken
							</a>
						</li>
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
			href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3901482/"
			pmcid="PMC3901482"
			paper="Genomic variability of monkeypox virus among humans, Democratic Republic
	 		of the Congo. Emerg Infect Dis."
		/>
	);
}

function ReferenceTwoHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={2}
			paper="The Past, Present, and Future of Monkeypox: A Rapid Review Regarding Prevalence and Prevention. Inquiry. 2022 Jan-Dec"
			pmcid="PMC9742718"
			href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9742718/"
		/>
	);
}

function ReferenceThreeHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={3}
			paper="Monkeypox (mpox) virus: Classification, origin, transmission, genome organization, antiviral drugs, and molecular diagnosis. J Infect Public Health. 2023 Apr;16(4):531-541"
			pmcid="PMC9908738"
			href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9908738/"
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
