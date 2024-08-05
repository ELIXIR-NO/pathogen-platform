import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Covid19Page() {
	return (
		<section className="flex flex-col space-y-6">
			<h2 className="text-3xl font-bold">COVID-19</h2>
			<h3 className="text-2xl font-bold">
				Coronavirus disease (COVID-19) is an infectious disease caused by the
				novel SARS-CoV-2 virus.
			</h3>
			<p>
				Most people infected with the virus will experience mild to moderate
				respiratory illness and recover without requiring special treatment.
				However, some will become seriously ill and require medical attention.
				Older people and those with underlying medical conditions like
				cardiovascular disease, diabetes, chronic respiratory disease, or cancer
				are more likely to develop serious illness. Anyone can get sick with
				COVID-19 and become seriously ill or die at any age.
			</p>
			<div className="columns-3 gap-3">
				<InfoCard
					image="/topics/covid-19/regjeringen.jpg"
					imageAlt="Regjeringen logo"
					title="Norwegian news timeline"
					description="Timeline for news and press releases in English from Norwegian
								Ministries about the Coronavirus disease COVID-19."
					link="https://www.regjeringen.no/en/topics/koronavirus-covid-19/timeline-for-news-from-norwegian-ministries-about-the-coronavirus-disease-covid-19/id2692402/"
				/>
				<InfoCard
					title="National COVID-19 portal"
					description="ELIXIR Norway host the Norwegian COVID-19 Data Portal to enable Norwegian scientists to share and access research data on the coronavirus disease (COVID-19) "
					image="/topics/covid-19/covid-19-data-portal.png"
					imageAlt="Covid-19 data portal logo"
					link="https://covid19dataportal.no/"
				/>
				<InfoCard
					title="Data repositories"
					description="SARS-CoV-2 Database is a knowledge database for SARS-CoV-2 virus research compiled from publicly available resources.  It consists of two databases, the SARS-CoV-2 contextual and sequence database and the SARS-CoV-2 BLAST database"
					image="/topics/covid-19/SARS-CoV-2DB.png"
					imageAlt="SARS-CoV-2 Database image"
					link="https://covid19.sfb.uit.no/"
				/>
				<InfoCard
					title="Description of Disease"
					description="World Health Organization pages on Coronavirus disease (COVID-19) with link to international resources "
					image="/topics/covid-19/WHO-logo.png"
					imageAlt="World Health Organization Logo"
					link="https://www.who.int/health-topics/coronavirus#tab=tab_1"
				/>
				<InfoCard
					title="National statistics about COVID-19"
					description="National and regional statistics about COVID-19 notifications and vaccination against COVID-19 can be found at the Norwegian Institute of Public Health"
					image="/topics/covid-19/FHI-logo.png"
					imageAlt="FHI logo"
					link="https://allvis.fhi.no/sysvak/antall-vaksinerte?etter=diagnose&fordeltPaa=dag&diagnose=COVID_19"
				/>
			</div>
		</section>
	);
}

function InfoCard({
	title,
	description,
	image,
	imageAlt,
	link,
}: {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	link: string;
}) {
	return (
		<Card className="mb-3 aspect-square max-w-sm break-inside-avoid hover:shadow-2xl">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Image
					src={image}
					alt={imageAlt}
					width={300}
					height={250}
					className="mx-auto"
				/>
			</CardContent>
			<CardFooter>
				<Button asChild className="w-full">
					<a href={link}>Go to Source</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
