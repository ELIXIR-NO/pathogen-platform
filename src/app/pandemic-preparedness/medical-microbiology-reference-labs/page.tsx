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
		title: "National reference laboratories",
		description:
			"The Norwegian Health Directorate (Helsedirektoratet) maintain a comprehensive list of microbiology reference laboratories.",
		image: "/logos/helsedirektoratet.png",
		link: "https://www.helsedirektoratet.no/tema/smittevern/referansefunksjoner-i-medisinsk-mikrobiologi",
	},
	{
		title: "FHI - Folkehelseinstituttet",
		description:
			"FHI is the primary public health institution in Norway and operates several national reference laboratories for medical microbiology.",
		image: "/logos/FHI.png",
		link: "https://www.fhi.no/",
	},
	{
		title: "University Hospitals",
		description:
			"Major university hospitals in Norway, such as the University Hospital of North Norway, Oslo University Hospital, and Haukeland University Hospital, host reference laboratories for specific pathogens or medical microbiology disciplines.",
		image: "/logos/sykehus.png",
		link: "https://no.wikipedia.org/wiki/Universitetssykehus",
	},
	{
		title: "VI - Veterinærinstituttet",
		description:
			"VI serves as a national reference laboratory for zoonotic diseases and pathogens affecting animals that can also impact human health. It plays a key role in the One Health approach, linking veterinary and medical microbiology.",
		image: "/logos/VI.png",
		link: "https://www.vetinst.no/en",
	},
	{
		title: "NORM and NORM-VET Programs",
		description:
			"These surveillance programs, while not labs themselves, are closely linked to reference laboratories across Norway. NORM (for human health) and NORM-VET (for animal health and food) collect and analyze data on antibiotic resistance, working with reference labs to ensure high-quality testing and data interpretation.",
		image: "/logos/norm.png",
		link: "https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober",
	},
	{
		title: "Regional Laboratories and research institutions",
		description:
			"Regional laboratories across Norway, often part of larger hospital systems, or research institutions also act as reference centers for certain pathogens or types of testing, supporting local public health efforts and contributing to national surveillance networks. One example is NMBU being the reference laboratory for the the bacterial toxin caused by Clostridium botulinum.",
		image: "/logos/NMBU.png",
		link: "https://www.nmbu.no/mattrygghetslab",
	},
	{
		title: "K-res",
		description:
			"K-res aims to be a nationally leading and internationally recognized center for the detection and characterization of antibiotic resistance.",
		image: "/logos/sykehus.png",
		link: "https://www.unn.no/fag-og-forskning/k-res",
	},
];

export default function MedicalMicroBiologyReferenceLabsPage() {
	return (
		<>
			<ContributorsPanel contributors={["erik"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Medical microbiology reference labs
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/medical-microbiology-reference-labs/medical-mrl.jpg"
							alt="Image of Word Health Organization"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a href="https://unsplash.com/@cdc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
							CDC
						</a>{" "}
						on{" "}
						<a href="https://unsplash.com/photos/person-in-purple-long-sleeve-shirt-holding-white-plastic-container-qs8wUhpN1gs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					The{" "}
					<a
						href="https://www.helsedirektoratet.no/english"
						className="text-primary hover:underline"
					>
						Norwegian Health Directorate (Helsedirektoratet)
					</a>{" "}
					can authorise Norwegian microbiology labs with national responsibility
					to investigate and report pathogens and antimicrobial resistance
					(Laboratorier med nasjonal referansefunksjon).
				</p>
				<div>
					<p>
						Laboratories with a national reference function in medical
						microbiology are assigned the following tasks according to the
						regulation:
					</p>
					<ul className="list-disc pl-5">
						<li>Reference diagnostics</li>
						<li>
							Maintaining a collection of strains and other reference materials
						</li>
						<li>Scientific advice and support</li>
						<li>Collaboration and research</li>
						<li>
							Monitoring, preparedness, and response to outbreaks of infectious
							diseases
						</li>
					</ul>
				</div>
				<h2 className="text-2xl font-bold">Norwegian resources</h2>
				<p>
					In Norway, several key institutions serve as reference laboratories in
					the field of medical microbiology, providing essential support for
					diagnosing, monitoring, and researching infectious diseases. These
					reference labs play a crucial role in ensuring high-quality testing
					and supporting public health efforts.
				</p>
				<p>
					As of 2024 Norway has no national system for bio-banking samples
					related to pathogens. Each laboratory has its policy to store (if any
					and duration) the samples.
				</p>
				<CardGrid data={resources} />
			</section>
		</>
	);
}
