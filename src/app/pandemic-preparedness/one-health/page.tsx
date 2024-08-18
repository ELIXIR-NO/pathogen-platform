"use client";

import { useState, useEffect } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import ContributorsPanel from "@/components/contributors-panel";
import CristinResults from '@/components/cristin-result';

const references: Reference[] = [
	{
		referenceNumber: 1,
		reference:
			"Taylor Louise H., Latham Sophia M. and Woolhouse Mark E.J. 2001 Risk factors for human disease emergence Phil. Trans. R. Soc. Lond. B356983–989",
		pmcid: "PMC1088493",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1088493/",
	},
	{
		referenceNumber: 2,
		reference:
			"Swanson David, Koren Clemence, Hopp Petter, Jonsson Malin E, Rø Gunnar Isaksson, White Richard A, Grøneng Gry Marysol. A One Health real-time surveillance system for nowcasting Campylobacter gastrointestinal illness outbreaks, Norway, week 30 2010 to week 11 2022. Euro Surveill. 2022;27(43):pii=2101121",
		pmcid: "PMC9615412",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9615412/",
	}
];

export default function OneHealthPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
                    <ReferencesPanel references={references} className="py-2" />
					<ContributorsPanel contributors={["terje"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">One Health</h2>
				<Image
					src="/pandemic-preparedness/one-health/joint-tripartite-unep-one-health-graphic.png"
					alt="Figure by the World Health Organization depicting the One Health concept"
					width={900}
					height={500}
					className="mx-auto rounded-md"
				/>
				<p className="text-sm text-center">
					Figure by the World Health Organization depicting the One Health concept
					<a
						className="text-primary hover:underline ml-1"
						href="https://www.who.int/news/item/01-12-2021-tripartite-and-unep-support-ohhlep-s-definition-of-one-health"
					>
						(www.who.int)
					</a>
				</p>
				<p>
                    One health (called ”en helse” in Norwegian) is an approach that recognizes the close connection between human health, 
                    animals, and the environment. This is an initiative demanding close collaboration between institutions working with human data, 
                    biodiversity, and the environment. Integrating data from these can enhance surveillance and the management of known and emerging infectious diseases.
				</p>
				<p>
                    It is estimated that approximately 75% of emerging pathogens causing illness in humans are zoonotic, being derived from 
                    animals through the shared environment in which we live (<ReferenceOneHoverCard />). One health considers several types 
                    of diseases and transmission routes. Zoonotic diseases is one of these and represent transmissions from animals to humans, 
                    such as rabies, avian influenza, Mpox, SARS-COV2, and Ebola. Similarly, there are vector-borne diseases transmitted by 
                    mosquitoes and ticks, including malaria, dengue fever, and Lyme disease. Other examples can be found in food-borne Illnesses 
                    caused by e.g. salmonellosis and E. coli infections contracted through contaminated food products. 
                    The gastrointestinal illness caused by Campylobacter outbreaks in Norway over 12 years is a concrete One Health approach to 
                    establishing real-time disease surveillance (<ReferenceTwoHoverCard />). Environmental contamination caused by water 
                    pollution (e.g. animal waste products in water supply systems) or toxic waste exposure is also covered by this approach.
				</p>
				<p>
					By linking humans, animals, and the environment, One Health can help to address the full spectrum of disease control – from 
                    prevention to detection, preparedness, response, and forecasting – and contribute to global health security. There are projects 
                    in Norway aligning with the One health approach like the NMBU-lead
					<a
						className="text-primary hover:underline"
						href="https://www.nmbu.no/en/research/projects/hunt-one-health"
					>
						HUNT One Health
					</a>
					and
					<a
						className="text-primary hover:underline"
						href="https://en.uit.no/project/onehealth"
					>
						The One Health Education and Research project
					</a>
					hosted by UiT. For the current list of projects by the Research Council of Norway see the list below pulled from Prosjektbanken.
				</p>
				<h3 className="font-bold">Norwegian resources for One Health</h3>
				<ul className="list-disc">
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.fhi.no/sm/smitte-fra-mat-vann-dyr/artikler/en-helse/"
						>
							Norwegian Institute of Public Health - One Health
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.vetinst.no/en-helse"
						>
							Norwegian Veterinary Institute - En helse
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.fhi.no/ut/utbruddshandboka/?term="
						>
							Norwegian Institute of Public Health - The outbreak handbook
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.fhi.no/en/in/smitte-fra-mat-vann-og-dyr/artikler/the-largest-ever-health-project-funded-from-the-eus-horizon-2020/"
						>
							Norwegian Institute of Public Health - EU's Horizon 2020 projects
						</a>
					</li>
				</ul>

                <CristinResults title="one health" />
			</section>
		</div>
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
			<HoverCardContent className="w-[500px] text-justify text-small">
				{paper};PMCID:
				<a href={href} className="text-primary hover:underline">
					{pmcid}
				</a>
			</HoverCardContent>
		</HoverCard>
	);
}