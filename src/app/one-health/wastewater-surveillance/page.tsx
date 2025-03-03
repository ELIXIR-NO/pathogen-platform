import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardGrid, { CardGridData } from "@/components/card-grid";

const resources: CardGridData[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description:
			"The FHI (Folkehelseinstituttet) are partners in the European EU-WISH consortium (EU-Wastewater Integrated Surveillance for Public Health). The objective is to  enhance, extend and consolidate wastewater surveillance for public health.",
		link: "https://www.fhi.no/en/cristin-projects/ongoing/eu-wish-eu4health-joint-action/",
		image: "/logos/FHI.png",
	},
	{
		title: "Veterinærinstituttet",
		description:
			"The VI are partners in the European EU-WISH consortium (EU-Wastewater Integrated Surveillance for Public Health). The objective is to  enhance, extend and consolidate wastewater surveillance for public health.",
		link: "https://msis.no/",
		image: "/logos/VI.png",
	},
];

export default function WastewaterSurveillancePage() {
	return (
		<>
			<ContributorsPanel contributors={["erik"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Wastewater Surveillance</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/one-health/waste-water-surveillance/Wastewater.jpg"
							alt="Photo by Jacek Kadaj on Unsplash"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">AI generated</HoverCardContent>
				</HoverCard>
				<p>
					Wastewater surveillance has emerged as a critical approach to monitor
					public health at a community-wide level. By analyzing sewage, valuable
					information on the prevalence of pathogens can offer early warnings of
					potential outbreaks, and can help to assess public health
					interventions. Wastewater surveillance involves collecting and
					analyzing samples from sewage systems, often at a wastewater treatment
					facility. These samples contain biological (and chemical) traces from
					all individuals contributing to the wastewater, providing an
					aggregated snapshot of a community&apos;s health. By testing for
					specific pathogens, scientists can detect levels of infection and even
					antibiotic resistance. Wastewater surveillance has been widely used to
					track COVID-19 and is expanding to monitor other viral diseases, such
					as influenza and norovirus.
				</p>
				<h3 className="font-bold">Norwegian resources</h3>
				<p>
					The National Institute of Public Health (
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						Folkehelseinstituttet
					</a>
					) coordinates national wastewater surveillance efforts, focusing on
					pathogens such as SARS-CoV-2. They provide guidelines, infrastructure,
					and resources for collecting and processing wastewater samples across
					the country. This initiative was instrumental in informing
					Norway&apos;s COVID-19 response, where samples collected from
					wastewater treatment plants in the following areas: Tromsø, Trondheim,
					Bergen, Oslo and Ullensaker/Gardermoen airport, covering around 30% of
					the Norwegian population. An evaluation of the pilot wastewater
					surveillance for SARS-CoV-2 in Norway was{" "}
					<a
						className="text-primary hover:underline"
						href="https://doi.org/10.1186/s12889-023-16627-2"
					>
						published in BMC in 2022
					</a>
					.
				</p>
				<CardGrid data={resources} />
				<h2 className="pb-2 text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=wastewater%20pathogens"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=date&sortOrder=desc&resultCount=30&offset=0&Fritekst=wastewater+pathogens"
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
