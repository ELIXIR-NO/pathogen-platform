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
		title: "Annual reports",
		description:
			"The FHI (Folkehelseinstituttet) is responsible for collecting and publishing of annual reports on the surveillance of diseases caused by food- and waterborne pathogens in Norway.",
		link: "https://www.fhi.no/publ/2024/overvakning-av-infeksjonssykdommer-som-smitter-fra-mat-vann-og-dyr-inkludert-vektorbarne-sykdommer/",
		image: "/logos/FHI.png",
	},
	{
		title: "MSIS",
		description:
			"The health registry MSIS (Meldingssystem for smittsomme sykdommer) is the official system for monitoring infectious diseases in humans, food- and waterborne pathogens.",
		link: "https://allvis.fhi.no/msis",
		image: "/logos/FHI.png",
	},
	{
		title: "Mattilsynet",
		description:
			"Mattilsynet (Norwegian Food Safety Authority) is responsible for ensuring food and water safety in Norway. It conducts inspections, monitors food and water quality, and enforces regulations to prevent contamination. The authority also collaborates with other institutions during foodborne outbreak investigations.",
		link: "https://www.mattilsynet.no/",
		image: "/logos/mattilsynet.png",
	},
	{
		title: "NORM-VET",
		description:
			"The surveillance program NORM-VET (Norsk overvåkingsprogram for antibiotikaresistens i mikrober fra fôr, dyr og næringsmidler) focuses on antibiotic resistance in microbes originating from feed, animals, and food. It works in conjunction with NORM to provide a comprehensive overview of antibiotic resistance trends across human and animal populations.",
		link: "https://www.vetinst.no/overvaking/antibiotikaresistens-norm-vet",
		image: "/logos/norm.png",
	},
	{
		title: "VI - Veterinærinstituttet",
		description:
			"VI (Norwegian Veterinary Institute) monitors zoonotic pathogens, including those that can be transmitted through food. It provides expertise and laboratory support for detecting and analysing pathogens in food products, contributing to food safety.",
		link: "https://www.vetinst.no/en",
		image: "/logos/VI.png",
	},
];

export default function FoodWaterbornePathogensPage() {
	return (
		<>
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["author1", "author2", "author3"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Food and waterborne pathogens</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/one-health/food-and-waterborne-pathogens/rachael-gorjestani-XlA2994Txhw-unsplash.jpg"
							alt="Photo by Rachael Gorjestani on Unsplash"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/@rachaelgorjestani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Rachael Gorjestani
						</a>{" "}
						on{" "}
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/photos/shallow-focus-photography-of-green-pea-on-brown-wooden-surface-XlA2994Txhw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>

				<p>
					Food- and waterborne pathogens are microorganisms that cause illness
					when ingested through contaminated food or water. These pathogens
					include bacteria, viruses, parasites, and toxins.
				</p>
				<p>
					The <strong>foodborne pathogens</strong> can occur at any point in the
					food production process, from farm to table, including during
					harvesting, processing, storage, or preparation. Improper handling,
					cooking, or storage can allow these pathogens to thrive.
				</p>
				<p>
					The <strong>waterborne pathogens</strong> typically enter water
					supplies through fecal contamination, inadequate wastewater treatment,
					or runoff from agricultural or industrial sites.
				</p>
				<p>
					The most relevant infections transmitted through food and water in
					Norway today are caused by norovirus, Campylobacter, Salmonella,
					enteropathogenic E. coli, Yersinia, and Listeria, in addition to the
					traditional food poisoning bacteria Clostridium perfringens, Bacillus
					cereus, and Staphylococcus aureus (source:{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						FHI
					</a>
					).
				</p>
				<h2 className="text-2xl font-bold">Norwegian resources</h2>
				<CardGrid data={resources} />
				<h2 className="pb-2 text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=foodborne%20waterborne%20pathogen&type=result"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=date&sortOrder=desc&resultCount=30&offset=0&Fritekst=foodborne+waterborne+pathogen"
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
