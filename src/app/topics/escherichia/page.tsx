import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";
import CardGrid, { CardGridData } from "@/components/card-grid";

const resources: CardGridData[] = [
	{
		title: "FHI - Folkehelseinstituttet",
		description: "Outbreaks news of Escherichia coli.",
		link: "https://www.fhi.no/nyheter/2023/utbrudd-av-e.-coli-ehec-infeksjon",
		image: "/logos/FHI.png",
	},
	{
		title: "WHO - World Health Organisation",
		description: "Escherichia coli global news",
		link: "https://www.who.int/news-room/fact-sheets/detail/e-coli",
		image: "/logos/WHO.png",
	},
	{
		title: "European Centre for Disease Prevention and Control",
		description: "European news regarding Escherichia coli.",
		link: "https://www.ecdc.europa.eu/en/shiga-toxin-producing-escherichia-coli-stec",
		image: "/logos/ecdc.png",
	},
];

export default function MpoxPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h1 className="text-3xl font-bold">
					<i>Escherichia coli</i>
				</h1>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/topics/escherichia/escherichia.png"
							alt="Mycoplasma"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent>Generate by AI</HoverCardContent>
				</HoverCard>
				<p className="text-justify">
					<i>Escherichia coli</i> (<i>E. coli</i>) is s a gram-negative,
					rod-shaped bacterium that naturally resides in the intestines of
					humans and warm-blooded animals. While most strains of <i>E. coli</i>{" "}
					are harmless and play an important role in the gut microbiome, some
					strains, such as Shiga toxin-producing E. coli (STEC), can cause
					severe foodborne illness.
				</p>
				<h2 className="text-3xl font-bold">
					<i>Escherichia coli</i> facts in Norway
				</h2>
				<p className="text-justify">
					Norway, like many countries, experiences sporadic cases of E. coli
					infections, particularly those caused by pathogenic strains like STEC.
					These infections are often linked to contaminated food, water, or
					contact with animals.
				</p>
				<h2 className="text-3xl font-bold">Outbreak Overview</h2>
				<p className="text-justify">
					Norway has experienced significant outbreaks of Escherichia coli in
					recent years, particularly involving strains like O26:H11. A major
					outbreak in 2023 led to at least 24 confirmed cases, primarily in
					young children.
				</p>
				<h2 className="text-3xl font-bold">Surveillance</h2>
				<p className="text-justify">
					The Norwegian Institute of Public Health (
					<a
						href="https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/e-coli/?term="
						className="text-primary hover:underline"
					>
						Folkehelseinstituttet
					</a>
					) maintains an active surveillance system to detect and respond to E.
					coli outbreaks. Cases are reported and investigated to identify
					sources and prevent further spread.
				</p>
				<h2 className="text-3xl font-bold">Antimicrobial Resistance (AMR)</h2>
				<p className="text-justify">
					There is increasing concern about antimicrobial-resistant E. coli
					strains globally, and Norway is actively monitoring and addressing
					this issue through its{" "}
					<a
						href="https://www.fhi.no/contentassets/4e24fb63a3754577a94c42b6c8cc89c4/norm-norm-vet-2023-komplett.pdf"
						className="text-primary hover:underline"
					>
						NORM-VET
					</a>{" "}
					program, which assesses AMR in humans and animals.
				</p>
				<h2 className="text-2xl font-bold">
					<i>Escherichia coli</i> spread in Europe
				</h2>
				<p className="text-justify">
					A recent study (
					<a
						href="https://www.vg.no/nyheter/i/936byE/e-coli-bakterie-spres-kjapt-i-europa"
						className="text-primary hover:underline"
					>
						vg.no
					</a>
					) by the European Centre for Disease Prevention and Control (
					<a
						href="https://www.ecdc.europa.eu/en/shiga-toxin-producing-escherichia-coli-stec"
						className="text-primary hover:underline"
					>
						ECDC
					</a>
					) has highlighted the rapid spread of the antibiotic-resistant{" "}
					<i>E. coli</i> strain
					<strong>ST131</strong> across Europe. This strain is particularly
					concerning due to its resistance to carbapenem antibiotics, which are
					often considered a last-resort treatment for bacterial infections. The
					strain has been detected in healthcare and community settings, with
					genomic studies showing its presence in multiple countries, including
					Norway, Germany, and France. Enhanced monitoring and stricter
					antibiotic stewardship programs have been recommended to contain its
					spread.
				</p>

				<h2 className="text-2xl font-bold">Resources</h2>
				<CardGrid data={resources} />
				<h2 className="text-2xl font-bold">External Resource</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=escherichia%20coli&type=result&filter=category_idfacet~ARTICLE"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=date&sortOrder=desc&resultCount=30&offset=0&Fritekst=escherichia+coli"
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
