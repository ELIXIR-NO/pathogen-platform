import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import ContributorsPanel from "@/components/contributors-panel";

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
];

export default function MpoxPage() {
	return (
		<>
			<ReferencesPanel references={references} />
			<ContributorsPanel contributors={["terje"]} />
			<section className="flex flex-col space-y-6 p-2">
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
				<Image
					src="/topics/monkeypox/monkeypox-daily-cases.jpg"
					alt="Graph showing daily cases of monkeypox"
					width={700}
					height={500}
					className="mx-auto rounded-md"
				/>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/topics/monkeypox/monkeypox-daily-cases-2.jpg"
							alt="Graph showing daily cases of monkeypox"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent>
						Confirmed cases by the WHO between 2022-05-01 and 2024-02-04.
						Source:
						<a
							href="https://ourworldindata.org/monkeypox"
							className="text-primary hover:underline"
						>
							Our World in data
						</a>{" "}
						(2024-02-27)
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
				<ul className="list-disc">
					<li>
						<a
							href="https://www.fhi.no/en/id/mpox/"
							className="text-primary hover:underline"
						>
							NIPH Mpox topic
						</a>
					</li>
					<li>
						<a
							href="https://www.fhi.no/ss/mpox/fhi-beholder-navnet-apekopper/"
							className="text-primary hover:underline"
						>
							NIPH naming convention in Norwegian
						</a>
					</li>
					<li>
						<a
							href="https://www.regjeringen.no/no/sok/id86008/?isfilteropen=True&term=apekopper"
							className="text-primary hover:underline"
						>
							Press releases from the Norwegian government{" "}
						</a>
					</li>
					<li>
						<a
							href="https://snl.no/.search?query=apekopper"
							className="text-primary hover:underline"
						>
							Store medisinske leksikon
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
			<HoverCardContent className="w-[500px] text-justify text-small">
				{paper};PMCID:
				<a href={href} className="text-primary hover:underline">
					{pmcid}
				</a>
			</HoverCardContent>
		</HoverCard>
	);
}
