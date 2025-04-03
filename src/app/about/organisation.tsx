import { ThemeImage } from "@/components/themeImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface Partner {
	title: string;
	logo: { light: string; dark: string };
	description: (string | JSX.Element)[];
}

const partners: Partner[] = [
	{
		title: "Research Council of Norway",
		logo: {
			light: "/logos/Forskningsradet_Stottet-logo_Bokmal_01_Weller_RGB.svg",
			dark: "/logos/Forskningsradet_Stottet-logo_Bokmal_01_Waals_RGB.svg",
		},
		description: [
			"ELIXIR Norway is funded by the ",
			<Link
				key="elixir-europe"
				className="text-primary hover:underline"
				href="https://www.forskningsradet.no/"
			>
				Research Council of Norway
			</Link>,
			" and builds upon the Norwegian Bioinformatics Platform, which has provided support and tools for Norwegian life science research for nearly two decades.",
		],
	},
	{
		title: "BY-COVID consortium",
		logo: {
			light: "/logos/by-covid-logo-light-bg.svg",
			dark: "/logos/by-covid-logo-dark-bg.svg",
		},
		description: [
			"The first version of the Pathogens Portal Norway was funded by the ",
			<Link
				key="PDN"
				className="text-primary hover:underline"
				href="https://by-covid.org/"
			>
				BY-COVID consortium
			</Link>,
			". The BeYond-COVID (BY-COVID) was a Horizon project ",
			<Link
				key="PDN"
				className="text-primary hover:underline"
				href="https://by-covid.org/news-events/by-covid-launch/"
			>
				funded by the European Commission
			</Link>,
			" and brought together ",
			<Link
				key="PDN"
				className="text-primary hover:underline"
				href="https://by-covid.org/about"
			>
				53 partners from 19 countries
			</Link>,
			". Stakeholders included individuals and organisation from multiple areas, including the biomedical field, hospitals, public health, social sciences and humanities.",
		],
	},
];

export default function Partners() {
	return (
		<section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{partners.map((partner, index) => (
				<Card
					key={index}
					className="h-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
				>
					<CardHeader>
						<CardTitle>{partner.title}</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col">
						<div className="mb-6 flex h-48 w-full justify-center">
							<ThemeImage
								lightSrc={partner.logo.light}
								darkSrc={partner.logo.dark}
								alt={`${partner.title} logo`}
							/>
						</div>
						<p className="whitespace-pre-line text-justify">
							{partner.description.map((part, i) => (
								<React.Fragment key={i}>{part}</React.Fragment>
							))}
						</p>
					</CardContent>
				</Card>
			))}
		</section>
	);
}
