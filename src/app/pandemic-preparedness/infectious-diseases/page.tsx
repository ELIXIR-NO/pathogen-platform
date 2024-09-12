import ContributorsPanel from "@/components/contributors-panel";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";
import CardGrid, { CardGridData } from "@/components/card-grid";

const resources: CardGridData[] = [
	{
		title: "IDTK",
		description:
			"On a national level, the Infectious Disease Tool Kit (IDTK) provides a very good overview and general discussion of infectious disease research in Norway and provides information on relevant health authorities and initiatives.",
		link: "https://www.infectious-diseases-toolkit.org/national-resources/norway#introduction",
		image: "/logos/infectious-diseases-toolkit.svg",
	},
	{
		title: "Smittevernhåndboka",
		description:
			"The Smittevernhåndboka is a good reference guide on the prevention and control of infectious diseases.",
		link: "https://www.fhi.no/sm/smittevernhandboka/?term=",
		image: "/logos/FHI.png",
	},
];

const norwegianResources: CardGridData[] = [
	{
		title: "VI - Veterinærinstituttet",
		description:
			"VI is the national Veterinary Institute. VI monitors zoonotic pathogens and pathogens in food and the environment.",
		link: "https://www.vetinst.no/",
		image: "/logos/VI.png",
	},
	{
		title: "NORCE",
		description:
			"NORCE (Norwegian Research Centre AS) engages in genomic research, including studies on the genetic aspects of infectious diseases.",
		link: "https://www.norceresearch.no/en/",
		image: "/logos/norce.png",
	},
	{
		title: "NIBIO",
		description:
			"NIBIO Norwegian Institute of Bioeconomy Research conducts research and provides solutions related to agriculture and the environment, including plant.",
		link: "https://www.nibio.no/en",
		image: "/logos/nibio.png",
	},
	{
		title: "MSIS - Meldingssystem for smittsomme sykdommer",
		description:
			"The health registry MSIS is the official system for monitoring infectious diseases in Norway, including food-, water- and vector-borne pathogens, and zoonotic pathogens and pathogens transmitted through environmental sources.",
		link: "https://allvis.fhi.no/msis",
		image: "/logos/FHI.png",
	},
	{
		title: "NMBU",
		description:
			"NMBU (Norwegian University of Life Sciences) has a strong focus on biosciences, veterinary medicine, and environmental sciences. They conduct research in plant sciences which includes studies on plant pathogens and genomic approaches to plant health.",
		link: "https://www.nmbu.no/en",
		image: "/logos/NMBU.png",
	},
	{
		title: "VKM",
		description:
			"VKM (Norwegian Scientific Committee for Food and Environment) provides independent risk assessments concerning food safety and environmental issues, including those related to plant health and disease.",
		link: "https://vkm.no/",
		image: "/logos/vkm.png",
	},
];

const surveillanceResources: CardGridData[] = [
	{
		title: "ECDC",
		description:
			"ECDC (European Centre for Disease Prevention and Control) is an EU agency aimed at strengthening Europe's defences against infectious diseases in human. ECDC maintains the Surveillance Atlas of Infectious Diseases.",
		link: "https://www.ecdc.europa.eu/en",
		image: "/logos/ecdc.png",
	},
	{
		title: "Surveillance Atlas of Infectious Diseases",
		description:
			"The Surveillance Atlas of Infectious Diseases is a tool that interacts with the latest available data about a number of infectious diseases by collating data from the Member States collected through The European Surveillance System (TESSy).",
		link: "https://atlas.ecdc.europa.eu/public/index.aspx",
		image: "/logos/ecdc.png",
	},
	{
		title: "TESSy",
		description:
			"The European Surveillance System (TESSy) allows users to interact and manipulate the data to produce a variety of tables and maps.",
		link: "https://www.ecdc.europa.eu/en/publications-data/european-surveillance-system-tessy",
		image: "/logos/ecdc.png",
	},
];

export default function InfectiousDiseasesPage() {
	return (
		<>
			<ContributorsPanel contributors={["espen", "peter", "sebastian"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Infectious Diseases</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/infectious-diseases/page-image.png"
							alt="Photo of a sick woman"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a href="https://unsplash.com/@enginakyurt">Engin Akyurt</a> on
						<a href="https://unsplash.com/photos/woman-in-white-and-red-floral-hijab-r6LUSFUJcQo">
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<h3 className="text-3xl font-bold">What are infectious diseases?</h3>
				<p>
					Infectious diseases are disorders caused by organisms such as
					bacteria, viruses, fungi, or parasites. Many of these organisms are
					normally harmless, and they can even be living on or in an organism
					(e.g. the human body or an animal) at any given time. However, under
					certain conditions, some organisms can cause disease. Infectious
					diseases can be spread directly or indirectly from one individual to
					another, from animal to human, through insect or animal bites, or by
					consuming contaminated food or water.
				</p>
				<p>
					These diseases can affect plants, animals, and humans, manifesting in
					various symptoms that can be mild, severe, or even deadly, affecting
					health and productivity. In plants, infectious diseases can lead to
					symptoms such as wilting, blights, and rusts, significantly impacting
					agricultural productivity and affecting food security. In animals,
					these diseases not only impact the health of health of domestic and
					agricultural industries but also wildlife conservation. Moreover, some
					infectious diseases can be zoonotic, meaning they can be transmitted
					from animals to humans. In humans, infectious diseases are a major
					public health concern, capable of causing widespread outbreaks and
					pandemics with high morbidity and mortality rates.
				</p>
				<h3 className="text-3xl font-bold">Threats to Everyday Life</h3>
				<p>
					Infectious diseases pose significant threats to everyday life and
					medical treatment. They can disrupt daily activities, cause widespread
					health crises, and place immense pressure on healthcare systems. In
					the medical field, infectious diseases are particularly concerning
					because they can lead to hospital-acquired infections, complicate
					surgeries and other treatments, and contribute to antibiotic
					resistance. This resistance makes it increasingly challenging to treat
					common infections, turning them into severe health threats.
				</p>
				<h3 className="text-3xl font-bold">Where do I start?</h3>
				<CardGrid data={resources} />
				<h3 className="text-3xl font-bold">Further Norwegian resources</h3>
				<CardGrid data={norwegianResources} />
				<h3 className="text-3xl font-bold">Surveillance in Europe</h3>
				<CardGrid data={surveillanceResources} />
				<h3 className="text-2xl font-bold">External Resource</h3>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=infectious%20diseases&type=result&sort=PUBL_YEAR_DESC"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&Kilde=EU&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=infectious+diseases"
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
