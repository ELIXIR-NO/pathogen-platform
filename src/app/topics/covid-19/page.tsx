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
		title: "Timeline Norwegian Government",
		description:
			"Timeline for news and press releases in English from Norwegian Ministries about the Coronavirus disease COVID-19.",
		image: "regjeringen.jpg",
		link: "https://www.regjeringen.no/en/topics/koronavirus-covid-19/timeline-for-news-from-norwegian-ministries-about-the-coronavirus-disease-covid-19/id2692402/",
	},
	{
		title: "National COVID-19 portal",
		description:
			"ELIXIR Norway host the Norwegian COVID-19 Data Portal to enable Norwegian scientists to share and access research data on the coronavirus disease.",
		image: "covid-19-data-portal.png",
		link: "https://covid19dataportal.no/",
	},
	{
		title: "Data repositories",
		description:
			"SARS-CoV-2 Database is a knowledge database for SARS-CoV-2 virus research compiled from publicly available resources. It consists of two databases, the SARS-CoV-2 contextual and sequence database and the SARS-CoV-2 BLAST database.",
		image: "SARS-CoV-2DB.png",
		link: "https://covid19.sfb.uit.no/",
	},
	{
		title: "Helsedirektoratet",
		description:
			"Helsedirektoratet (The Directorate of Health) was a key player in managing the health system's response to COVID-19. Helsedirektoratet collaborates with FHI to implement national health strategies, ensure hospital preparedness, and disseminate public health information.",
		image: "helsedirektoratet.png",
		link: "https://www.helsedirektoratet.no/",
	},
	{
		title: "National statistics about COVID-19",
		description:
			"National and regional statistics about COVID-19 notifications and vaccination against COVID-19 can be found at FHI (Norwegian Institute of Public Health).",
		image: "FHI-logo.png",
		link: "https://allvis.fhi.no/sysvak/antall-vaksinerte?etter=diagnose&fordeltPaa=dag&diagnose=COVID_19",
	},
	{
		title: "WHO - Norway statistics about COVID-19",
		description:
			"World Health Organisation (WHO) dashboard for number of COVID-19 cases reported  from Norway",
		image: "WHO-logo.png",
		link: "https://data.who.int/dashboards/covid19/cases?m49=578&n=c",
	},
];

export default function Covid19Page() {
	return (
		<>
			<ContributorsPanel contributors={["erik"]} />
			<section className="flex flex-col space-y-6">
				<h1 className="text-3xl font-bold">
					Coronavirus disease (COVID-19) is an infectious disease caused by the
					novel SARS-CoV-2 virus.
				</h1>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/topics/covid-19/page-image.jpg"
							alt="Monkeypox Transmission"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							href="https://unsplash.com/@trnavskauni?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Trnava University
						</a>{" "}
						on{" "}
						<a
							href="https://unsplash.com/photos/person-in-white-long-sleeve-shirt-holding-blue-pen-Lr_MKzNGhUU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p className="text-justify">
					Coronavirus disease (<span className="font-bold">COVID-19</span>) is
					an infectious disease caused by the novel SARS-CoV-2 virus. Most
					people infected with the virus will experience mild to moderate
					respiratory illness and recover without requiring special treatment.
					However, some will become seriously ill and require medical attention.
					Older people and those with underlying medical conditions like
					cardiovascular disease, diabetes, chronic respiratory disease, or
					cancer are more likely to develop serious illness. Anyone can get sick
					with COVID-19 and become seriously ill or die at any age.
				</p>
				<h2 className="text-2xl font-bold">Norwegian Resources</h2>
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
										src={`/topics/covid-19/${resource.image}`}
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
					<h2 className="pb-2 text-2xl font-bold">External resources</h2>
					<ul className="list-disc pl-5">
						{/*<li>Public data archives</li>*/}
						<li>
							Latest publication in{" "}
							<a
								href="https://app.cristin.no/search.jsf?t=Covid-19&type=result&filter=category_idfacet~ARTICLE"
								className="text-primary hover:underline"
							>
								Cristin
							</a>
						</li>
						<li>
							Ongoing projects listed in{" "}
							<a
								href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&Kilde=EU&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=date&sortOrder=desc&resultCount=30&offset=0&TemaEmne.1=Covid19"
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
