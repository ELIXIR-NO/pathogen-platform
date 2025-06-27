import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardGrid, { CardGridData } from "@/components/card-grid";

const surveillanceNationalInstitutionsCardData: CardGridData[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description:
			"FHI is Norway’s national institute of public health. FHI is the central body responsible for overseeing and coordinating the national surveillance of infectious diseases.",
		image: "/logos/FHI.png",
		link: "https://www.fhi.no/",
	},
	{
		title: "VI - Veterinærinstituttet",
		description:
			"VI is the national Veterinary Institute. VI monitors zoonotic pathogens and pathogens in food and the environment.",
		image: "/logos/VI.png",
		link: "https://www.vetinst.no/",
	},
	{
		title: "University hospitals and reference laboratories",
		description:
			"Support surveillance of specific pathogens, provide diagnostic services, and contribute to research on pathogen resistance and control strategies",
		image: "/logos/regjeringen.jpg",
		link: "https://www.regjeringen.no/",
	},
	{
		title: "Mattilsynet",
		description:
			"Mattilsynet is the Norwegian Food Safety Authority. They play a crucial role in the surveillance of pathogens in Norway, particularly those related to food safety, animal health, and plant health.",
		image: "/logos/mattilsynet.png",
		link: "https://www.mattilsynet.no/",
	},
];

const surveillanceSystemsCardData: CardGridData[] = [
	{
		title: "MSIS - Meldingssystem for smittsomme sykdommer",
		description:
			"The health registry MSIS is the official system for monitoring infectious diseases in Norway, including food-, water- and vector-borne pathogens, and zoonotic pathogens and pathogens transmitted through environmental sources.",
		image: "/logos/FHI.png",
		link: "https://allvis.fhi.no/msis",
	},
	{
		title:
			"NORM - Norsk overvåkingssystem for antibiotikaresistens hos mikrober",
		description:
			"NORM is the Norwegian Surveillance System for Antimicrobial Drug Resistance. This health registry collect and analyse data on antibiotic resistance",
		image: "/logos/norm_card.png",
		link: "https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober",
	},
	{
		title: "RAVN - Resistensovervåkning av virus i Norge",
		description:
			"RAVN is the national health registry for antiviral resistance, and is hosted by FHI. The registry contains de-identified health information about individuals who have provided samples with specific viruses, as well as details about the viruses and their resistance to antiviral medications. The system is access restricted, and researches can apply for access from Helsedata",
		image: "/logos/FHI.png",
		link: "https://www.fhi.no/sm/overvaking/ravn/",
	},
	{
		title:
			"NOIS - Norsk overvåkingssystem for antibiotikabruk og helsetjenesteassosierte infeksjoner",
		description:
			"The health registry NOIS provides an overview of the occurrence of healthcare-associated infections and the use of antibiotics in hospitals and nursing homes.",
		image: "/logos/FHI.png",
		link: "https://www.fhi.no/sm/overvaking/nois/",
	},
	{
		title: "SYSVAK - Nasjonalt vaksinasjonsregister",
		description:
			"SYSVAK is the Norwegian Immunisation Registry that records an individual’s vaccination status and vaccination coverage in Norway.",
		image: "/logos/FHI.png",
		link: "https://www.fhi.no/va/sysvak/",
	},
	{
		title:
			"NORM-VET - Norsk overvåkingsprogram for antibiotikaresistens i mikrober fra fôr, dyr og næringsmidler",
		description:
			"The surveillance program NORM-VET focuses on antibiotic resistance in microbes originating from feed, animals, and food. Annual reports are made publicly available in joint annual reports with NORM.",
		image: "/logos/norm_vet_logo.png",
		link: "https://www.vetinst.no/en",
	},
	{
		title: "ViltHOP - Helseovervåkingsprogrammet for vilt",
		description:
			"ViltHOP is the national wildlife health monitoring program. ViltHOP monitors diseases in wild animals to document health status in wildlife populations. The main focus is on inter-species disease transmission between wild and domestic animals, as well as zoonoses—diseases that can spread from animals to humans. ViltHOP produce annual reports.",
		image: "/logos/VI.png",
		link: "https://www.vetinst.no/dyr/vilt/hop",
	},
	{
		title: "Mattilsynet - biosecurity monitoring ",
		description:
			"Mattilsynet conducts biosecurity monitoring for the aquaculture industry to enable early detection and management of diseases among farmed fish. This system requires operators to immediately notify the authority if any listed diseases are suspected. Consequently, operators must diligently surveil fish health and monitor for any signs of disease or abnormalities.",
		image: "/logos/mattilsynet.png",
		link: "https://www.mattilsynet.no/fisk-og-akvakultur/biosikkerhetsplan-i-akvakulturanlegg/bakgrunn-for-biosikkerhetsplan/generelt-om-forekomst-og-overvakning-av-sykdommer/helseovervakning",
	},
	{
		title: "Veterinærinstituttet - environmental DNA surveillance",
		description:
			"Veterinærinstituttet additionally conducts surveillance using environmental DNA sampling. These sampling methods are increasingly used for monitoring and early detection of pathogens, foreign species, conservation of endangered species, and biodiversity mapping. ",
		image: "/logos/VI.png",
		link: "https://www.vetinst.no/fagomrader/miljo-dna",
	},
	{
		title: "FHI - surveillance of food, water, and animal-transmitted diseases",
		description:
			"FHI conducts surveillance for the occurrence of common food, water, and animal-transmitted diseases, including vector-borne infections which are reported annually.",
		image: "/logos/FHI.png",
		link: "https://www.fhi.no/publ/2024/overvakning-av-infeksjonssykdommer-som-smitter-fra-mat-vann-og-dyr-inkludert-vektorbarne-sykdommer/",
	},
];

export default function SurveillancePage() {
	return (
		<>
			<ContributorsPanel contributors={["sebastian", "espen", "terje"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Surveillance</h2>
				<HoverCard>
					<HoverCardTrigger>
						<CentralImage
							src="/pandemic-preparedness/surveillance/surveillance.jpg"
							alt="Image of Word Health Organization"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							href="https://unsplash.com/@sushioutlaw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Brian McGowan
						</a>{" "}
						on{" "}
						<a
							href="https://unsplash.com/photos/black-flat-screen-tv-showing-20-00-gkpszAElZf8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					Norway&apos;s national surveillance of pathogens is a coordinated
					effort involving multiple institutions that monitor and control
					infectious diseases and antimicrobial resistance across various
					domains.
				</p>
				<h2 className="text-2xl font-bold">
					Norwegian institutions involved in surveillance of pathogens
				</h2>
				<CardGrid data={surveillanceNationalInstitutionsCardData} />
				<h2 className="text-2xl font-bold">
					Norwegian surveillance systems and health registries
				</h2>
				<p>
					Norway has a comprehensive system of surveillance systems and health
					registries designed to monitor public health, track the occurrence of
					diseases, and support healthcare planning and research. These systems
					are managed by various national institutions and cover a broad range
					of health-related data. FHI is responsible for the data controller for
					these registries and is also responsible for reporting to
					international organisations such as WHO and ECDC.
				</p>
				<CardGrid data={surveillanceSystemsCardData} />
				<h2 className="text-2xl font-bold">
					Wastewater Surveillance - international
				</h2>
				<p>
					Wastewater surveillance is one of the most important aspects of public
					health surveillance, however Norway has not yet a national wastewater
					surveillance systems. During the COVID-19 pandemic, FHI together with
					the{" "}
					<a
						href="https://www.uib.no/pandemi"
						className="text-primary hover:underline"
					>
						Pandemic Centre
					</a>{" "}
					at{" "}
					<a
						href="https://www.uib.no/"
						className="text-primary hover:underline"
					>
						UiB
					</a>{" "}
					conducted wastewater-based surveillance of SARS-CoV-2 in Norway.{" "}
				</p>
				<p>
					Important international resources and consortiums are the EU
					Wastewater Observatory for Public Health, the Joint Action{" "}
					<a
						href="https://www.eu-wish.eu/"
						className="text-primary hover:underline"
					>
						EU-Wastewater Integrated Surveillance for Public Health (EU-WISH)
					</a>
					, and the{" "}
					<a
						href="https://wastewater-observatory.jrc.ec.europa.eu/#/content/glowacon-new"
						className="text-primary hover:underline"
					>
						Global Consortium for Wastewater and Environmental Surveillance for
						Public Health (GLOWACON)
					</a>{" "}
					FHI and VI are partners in the EU-WISH project.
				</p>
				<h2 className="text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=pathogen%20surveillance&type=result&sort=PUBL_YEAR_DESC"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&Kilde=EU&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=pathogen+surveillance"
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
