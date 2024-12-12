import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";
import CardGrid, { CardGridData } from "@/components/card-grid";

const resources: CardGridData[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description: "Advice, facts and statistics about influenza.",
		link: "https://www.fhi.no/sys/sok/?term=Influenza&sort=1",
		image: "/logos/FHI.png",
	},
	{
		title: "FHI - Folkehelseinstituttet",
		description:
			"Norwegian Surveillance System for Antiviral Resistance (RAVN)",
		link: "https://www.fhi.no/en/sys/search-result/?term=INFLUENZA&topics=47263&archive=0",
		image: "/logos/FHI.png",
	},
	{
		title: "WHO - World Health Organisation",
		description: "WHO - Global Influenza Programme",
		link: "https://www.who.int/tools/flunet",
		image: "/logos/WHO.png",
	},
	{
		title: "Influenza Center",
		description:
			"Advice, facts, and other useful and important information about Influenza.",
		link: "https://www.influensasenteret.no/",
		image: "/logos/influenza.png",
	},
];

export default function MpoxPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h1 className="text-3xl font-bold">Influenza virus</h1>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/topics/influenza/influenzaTitle.png"
							alt="Influenza Virus"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent>Influenza Virus</HoverCardContent>
				</HoverCard>
				<p className="text-justify">
					Influenza, commonly known as the flu, is a contagious respiratory
					illness caused by influenza viruses. In Norway, as in many countries,
					influenza is a significant public health concern, particularly during
					the winter months. Here&#39;s a comprehensive overview of influenza in
					Norway, including relevant facts and scientific aspects:
				</p>
				<h2 className="text-2xl font-bold">Influenza Types</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						<strong>Seasonal Influenza:</strong> The most common form of
						influenza in Norway, which typically circulates in the winter months
						(November to April).
					</li>
					<li>
						<strong>Pandemic Influenza:</strong> Occasionally, new strains of
						the influenza virus can lead to global pandemics, such as the H1N1
						pandemic in 2009.
					</li>
					<li>
						<strong>Influenza Viruses:</strong> There are two primary types of
						influenza viruses that affect humans: Influenza A and Influenza B.
						Each year, these viruses undergo antigenic drift, causing minor
						changes that necessitate annual vaccination updates.
					</li>
				</ul>
				<h2 className="text-2xl font-bold">Influenza Surveillance in Norway</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						The <strong>Norwegian Institute of Public Health</strong> (
						<a
							href="https://www.fhi.no/en/sys/search-result/?term=influenza"
							className="text-primary hover:underline"
						>
							NIPH
						</a>
						) monitors influenza activity through its Influenza Surveillance
						System, which tracks the spread of the virus, hospitalizations, and
						the effectiveness of vaccines.
					</li>
					<li>
						<strong>Laboratory-confirmed cases</strong> are reported weekly, and
						the data is used to track the severity and spread of influenza
						throughout the country.
					</li>
				</ul>
				<h2 className="text-2xl font-bold">Seasonal Patterns</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Influenza in Norway tends to peak between January and March,
						although sporadic cases can be seen as early as October and as late
						as May.
					</li>
					<li>
						The intensity of the influenza season can vary, with some seasons
						being more severe than others depending on the predominant viral
						strains.
					</li>
				</ul>
				<h2 className="text-2xl font-bold">Vaccination</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						<strong>Annual Influenza Vaccination:</strong>Norway recommends
						influenza vaccines annually, especially for high-risk groups. The
						vaccine is updated each year to match circulating strains.
					</li>
					What are the high-risk groups for vaccination:
					<li>Elderly people (65 years and older)</li>
					<li>Pregnant women</li>
					<li>
						Individuals with chronic illnesses such as asthma, heart disease,
						and diabetes
					</li>
					<li>Healthcare workers</li>
					<li>
						Vaccination coverage in Norway varies, but efforts are made to
						increase uptake, especially among vulnerable populations.
					</li>
				</ul>
				<h2 className="text-2xl font-bold">Impact on Health and Society</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						<strong>Hospitalizations and Deaths:</strong> Influenza causes
						significant morbidity and mortality in Norway each year. The elderly
						and those with underlying conditions are particularly at risk.
					</li>
					<li>
						<strong>Complications:</strong> Influenza can lead to serious
						complications such as pneumonia, bronchitis, and worsening of
						chronic diseases. Secondary bacterial infections are also common.
					</li>
				</ul>
				<h2 className="text-2xl font-bold">Influenza Prevention and Control</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						<strong>Hygiene Measures:</strong> In addition to vaccination,
						Norway emphasizes basic hygiene measures, such as frequent hand
						washing, respiratory hygiene (covering coughs and sneezes), and
						staying home when sick to prevent the spread of the virus.
					</li>
					<li>
						<strong>Public Health Campaigns:</strong> Norwegian health
						authorities run regular public health campaigns to raise awareness
						about the importance of vaccination and hygiene practices during flu
						season.
					</li>
				</ul>
				<h2 className="text-2xl font-bold">Research and Development</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Norway is involved in international{" "}
						<strong>influenza research eg.</strong>{" "}
						<a
							href="https://www.influensasenteret.no/"
							className="text-primary hover:underline"
						>
							The Influenza Centre
						</a>
						, contributing to global efforts to study the virus, improve vaccine
						efficacy, and develop new treatment options.
					</li>
					<li>
						<strong>Influenza vaccination research:</strong> in Norway focuses
						on improving uptake among high-risk groups and evaluating the
						effectiveness of different vaccine formulations.
					</li>
				</ul>

				<h2 className="text-2xl font-bold">Resources</h2>
				<CardGrid data={resources} />
				<h2 className="text-2xl font-bold">External Resource</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=influenza&type=result&filter=category_idfacet~ARTICLE"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&Kilde=EU&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=influenza"
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
