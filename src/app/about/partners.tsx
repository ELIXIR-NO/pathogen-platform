import { ThemeImage } from "@/components/themeImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface Partner {
	title: string;
	logo: { light: string; dark: string };
	description: (string | React.JSX.Element)[];
}

const partners: Partner[] = [
	{
		title: "ELIXIR Europe",
		logo: {
			light: "/logos/elixir-logo-white.png",
			dark: "/logos/elixir-logo-black.png",
		},
		description: [
			<Link
				key="elixir"
				className="text-primary hover:underline"
				href="https://elixir-europe.org/"
			>
				ELIXIR
			</Link>,
			" is an intergovernmental organisation that brings together life science resources from across Europe. These resources include databases, software tools, training materials, cloud storage, and supercomputers. Under Web portals (",
			<Link
				key="elixir-europe"
				className="text-primary hover:underline"
				href="https://elixir-europe.org/what-we-offer/portals"
			>
				https://elixir-europe.org/what-we-offer/portals
			</Link>,
			") you will find useful portals to support you in making your data and software FAIR.",
		],
	},
	{
		title: "Pathogen Data Network",
		logo: {
			light: "/logos/PDN-white.png",
			dark: "/logos/PDN-black.png",
		},
		description: [
			"The ",
			<Link
				key="PDN"
				className="text-primary hover:underline"
				href="https://pathogendatanetwork.org/"
			>
				Pathogen Data Network
			</Link>,
			" (PDN) is a global consortium aiming to provide infrastructure, tools, training, outreach and support to FAIR infectious-diseases data sharing and reuse. It will cover diverse biodata types, including host and pathogen genomics, transcriptomics, proteins, pathways and networks, imaging and cohorts.",
		],
	},
	{
		title: "Pathogens Portal",
		logo: {
			light: "/logos/pathogens_logo-white.png",
			dark: "/logos/pathogens_logo-black.png",
		},
		description: [
			"The",
			<Link
				key="pathogens-portal"
				className="text-primary hover:underline"
				href="https://www.pathogensportal.org/"
			>
				Pathogens Portal
			</Link>,
			" is an invaluable resource for researchers, clinicians, and policymakers who need access to the latest and most comprehensive datasets on pathogens. The portal is a collaborative effort between the European Molecular Biology Laboratory's European Bioinformatics Institute (EMBL-EBI) and partners. The Pathogens Portal is based on the ",
			<Link
				key="covid19"
				className="text-primary hover:underline"
				href="https://www.covid19dataportal.org/"
			>
				European COVID-19 Data Portal
			</Link>,
			".",
		],
	},
	{
		title: "The Swedish Pathogens Portal",
		logo: {
			light: "/logos/swe_pathogens_logo-white.png",
			dark: "/logos/swe_pathogens_logo-black.png",
		},
		description: [
			"The Swedish Pathogens Portal provides information about available datasets, resources, tools, and services related to pandemic preparedness in Sweden.\n\n",
			"The Portal is operated by the SciLifeLab Data Centre and partners, who developed an open reference implementation for national data portals using Hugo in combination with Bootstrap for styling, DataTables for tables, and Vega/Vega-Lite and Plotly for interactive graphics. All code used for the Swedish Portal is open source (held under an MIT licence) and is available on GitHub. The development of The Pathogens Portal Norway has been greatly inspired by our highly competent and knowledgable Swedish friends at the ",
			<Link
				key="sciLifeLab"
				className="text-primary hover:underline"
				href="https://scilifelab.se/data/"
			>
				SciLifeLab
			</Link>,
			" and their ",
			<Link
				key="pathogens-portal-sweden"
				className="text-primary hover:underline"
				href="https://www.pathogens.se/"
			>
				Swedish Pathogens Portal
			</Link>,
			".",
		],
	},

	{
		title: "The Swiss Pathogens Portal",
		logo: {
			light: "/logos/ch_pathogens_logo-white.png",
			dark: "/logos/ch_pathogens_logo-black.png",
		},
		description: [
			"The Swiss Pathogens Portal is supporting researchers for pandemic preparedness and response in Switzerland.",
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
