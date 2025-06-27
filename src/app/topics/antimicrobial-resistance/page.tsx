import ContributorsPanel from "@/components/contributors-panel";
import CentralImage from "@/components/central-image";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardGrid, { CardGridData } from "@/components/card-grid";
import QuickView from "@/components/quick-view";

const resources: CardGridData[] = [
	{
		title: "NORM",
		description:
			"Norsk overvåkingssystem for antibiotikaresistens hos mikrober (NORM) is the Norwegian Surveillance System for Antimicrobial Resistance in Microbes. This health registry collect and analyse data on antibiotic resistance, working with reference labs to ensure high-quality testing and data interpretation.",
		link: "https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober",
		image: "/logos/norm_card.png",
	},
	{
		title: "NORM atlas",
		description:
			"The NORM Atlas provides access to the NORM database for selected bacterial species and antibiotics over time and across regions. The tool displays the proportion of resistant microbes.",
		link: "https://norm-atlas.no/",
		image: "/logos/norm_card.png",
	},
	{
		title: "NSAS and ASP",
		description:
			"Nasjonalt senter for antibiotikabruk i sykehus (NSAS) supports Norwegian hospitals in the proper use of antibiotics. Antibiotikasenteret for primærmedisin (ASP) aims of promoting the rational and limited use of antibiotics in primary healthcare, thereby reducing the development of antibiotic resistance in Norway.",
		link: "https://www.antibiotika.no/",
		image: "/logos/logo-antibiotika.svg",
	},
	{
		title: "K-res",
		description:
			"K-res is the National Competence Center for the Detection of Antibiotic Resistance. K-res develop and disseminate expertise in the detection of antibiotic-resistant bacteria and to maintain selected national reference functions. ",
		link: "https://www.unn.no/fag-og-forskning/k-res",
		image: "/logos/sykehus.png",
	},
	{
		title: "NOIS",
		description:
			"Norsk overvåkingssystem for antibiotikabruk og helsetjenesteassosierte infeksjoner (NOIS) provides an overview of the occurrence of healthcare-associated infections and the use of antibiotics in hospitals and nursing homes",
		link: "https://www.fhi.no/sm/overvaking/nois/",
		image: "/logos/FHI.png",
	},
	{
		title: "RAVN",
		description:
			"Register for resistensovervåkning av virus i Norge (RAVN) is the national health registry for antiviral resistance, and is hosted by FHI.",
		link: "https://www.fhi.no/sm/overvaking/ravn/",
		image: "/logos/FHI.png",
	},
	{
		title: "AMR",
		description:
			"Senter for antimikrobiell resistens (AMR) studies the effects of interventions against AMR on public health and develops policies for measures.",
		link: "https://www.fhi.no/sm/amr/",
		image: "/logos/FHI.png",
	},
];

export default function AntimicrobialResistancePage() {
	return (
		<>
			<ContributorsPanel contributors={["erik", "espen", "peter"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Antibiotic Resistance</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/topics/antibiotic-resistance/page-image.jpg"
							alt="Image of laboratory test"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							href="https://unsplash.com/@cdc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							CDC
						</a>{" "}
						on{" "}
						<a
							href="https://unsplash.com/photos/woman-holding-laboratory-appratus-LiNIONbajm4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					Antibiotic resistance, where bacteria evolve to withstand medicines,
					significantly threatens global public health by making infections
					harder to treat in humans, pets, and livestock. This resistance leads
					to persistent infections, increased disease severity, higher
					healthcare costs, and greater mortality. It jeopardizes the treatment
					of common infectious diseases, potentially making minor injuries and
					routine life-threatening surgeries. The issue also impacts veterinary
					medicine and agriculture, complicating outbreaks in animals, affecting
					food safety, and reducing farm productivity.
				</p>
				<h3 className="text-2xl font-bold">Norwegian resources</h3>
				<p>
					In Norway, various resources offer detailed information on
					antimicrobial resistance research and surveillance. Data from some
					resources are available for secondary use, while others require
					researchers to apply for access to the data.{" "}
					<a
						href="https://www.fhi.no/"
						className="text-primary hover:underline"
					>
						FHI (Folkehelseinstituttet)
					</a>{" "}
					maintain an{" "}
					<a
						href="https://www.fhi.no/sm/antibiotikaresistens/antibiotika-og-antibiotikaresistens-oversikt-over-aktorer-og-deres-ansvarsomrader/"
						className="text-primary hover:underline"
					>
						overview
					</a>{" "}
					of stakeholders and areas of responsibility.
				</p>
				<CardGrid data={resources} />
				<h2 className="text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=%C2%ABAntimicrobial%C2%BB,%20%C2%ABAntimicrobial%20resistance%C2%BB,%20%20%C2%ABAntibiotic%C2%BB,%20%C2%ABAntibiotic%20resistance%C2%BB&type=result"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=score&sortOrder=desc&resultCount=30&offset=0&Fritekst=%22Antimicrobial+resistance%22+%22Antibiotic+resistance%22+"
							className="text-primary hover:underline"
						>
							Projektbanken
						</a>
					</li>
					<li>
						Publications from{" "}
						<a
							href="https://www.unn.no/49ef2b/siteassets/documents/kompetansetjenester--sentre-og-fagrad/k-res-nasjonal-kompetansetjeneste-for-pavisning-av-antibiotikaresistens/vitenskapelige-publikasjoner/vitenskapelige-publikasjoner.pdf"
							className="text-primary hover:underline"
						>
							K-res
						</a>
					</li>
				</ul>
				<h2 className="pt-4 text-2xl font-bold">Relevant Dashboards</h2>
				<QuickView title="" searchFor="relativeLinks" searchTerm="dashboards" />
			</section>
		</>
	);
}
