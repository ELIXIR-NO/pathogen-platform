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
			"Annual reports are published in collaboration with FHI (National Institute of Public Health) and Mattilsynet (Norwegian Food Safety Authority).",
		link: "https://www.vetinst.no/fagomrader/zoonoser",
		image: "/logos/mattilsynet.png",
	},
	{
		title: "MSIS",
		description:
			"The health registry MSIS (Meldingssystem for smittsomme sykdommer) is the official system for monitoring infectious diseases in humans, including zoonotic pathogens.",
		link: "https://msis.no/",
		image: "/logos/FHI.png",
	},
	{
		title: "NORM",
		description:
			"The health registry NORM (Norsk overvåkingssystem for antibiotikaresistens hos mikrober) monitors antibiotic resistance in pathogenic bacteria from humans. It collaborates closely with the NORM-VET program to produce annual reports on antibiotic resistance in both humans and animals.",
		link: "https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober",
		image: "/logos/norm.png",
	},
	{
		title: "NORM-VET",
		description:
			"The surveillance program NORM-VET (Norsk overvåkingsprogram for antibiotikaresistens i mikrober fra fôr, dyr og næringsmidler) focuses on antibiotic resistance in microbes originating from feed, animals, and food.",
		link: "https://www.vetinst.no/overvaking/antibiotikaresistens-norm-vet",
		image: "/logos/VI.png",
	},
];

export default function ZoonoticPathogensPage() {
	return (
		<>
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["author1", "author2", "author3"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Zoonotic pathogens</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/pandemic-preparedness/one-health/zoonotic-pathogens/christopher-carson-i4XLJmlYit4-unsplash.jpg"
							alt="Photo by Christopher Carson on Unsplash"
						/>
					</HoverCardTrigger>
					,
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/@bhris1017?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Christopher Carson
						</a>{" "}
						on{" "}
						<a
							className="text-primary hover:underline"
							href="https://unsplash.com/photos/white-piglet-chewing-hay-i4XLJmlYit4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>

				<p>
					Zoonotic pathogens are infectious agents that can be transmitted from
					animals to humans. These pathogens include a wide range of
					microorganisms such as viruses, bacteria, fungi, parasites, and
					prions.
				</p>
				<p>
					The close interaction between humans and animals, whether through
					agriculture, pet ownership, wildlife contact, or environmental
					encroachment, can facilitate the spread of zoonotic diseases
					(zoonosis). The transmission can occur through direct contact with
					infected animals, bites or scratches, inhalation of aerosols, or
					through vectors such as mosquitoes and ticks.
				</p>
				<p>
					Preventing zoonotic diseases requires a multidisciplinary approach,
					incorporating animal health, human health, and environmental
					management.
				</p>
				<h2 className="text-2xl font-bold">Norwegian resources</h2>
				<CardGrid data={resources} />
				<h2 className="pb-2 text-2xl font-bold">External resources</h2>
				<ul className="flex list-disc flex-col space-y-1 pl-5">
					<li>
						Latest publication in{" "}
						<a
							href="https://app.cristin.no/search.jsf?t=zoonosis&type=result"
							className="text-primary hover:underline"
						>
							Cristin
						</a>
					</li>
					<li>
						Ongoing projects listed in{" "}
						<a
							href="https://prosjektbanken.forskningsradet.no/explore/projects?Kilde=FORISS&distribution=Ar&chart=bar&calcType=funding&Sprak=no&sortBy=date&sortOrder=desc&resultCount=30&offset=0&Fritekst=%22zoonoses%22+%22zoonotic%22"
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
