import CardGrid, { CardGridData } from "@/components/card-grid";
import { Card, CardContent } from "@/components/ui/card";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";

const resources: CardGridData[] = [
	{
		title: "NORM atlas",
		description: "",
		link: "/dashboards/norm-atlas/view?tab=atlas",
		image: "/logos/map-view.png",
	},
	//{
	//	title: "NORM data trender",
	//	description: "",
	//	link: "/dashboards/norm-atlas/view?tab=trends",
	//	image: "/logos/trends.png",
	//},
	{
		title: "NORM side på UNN",
		description:
			"Norsk overvåkingssystem for antibiotikaresistens hos mikrober.",
		link: "https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober",
		image: "/logos/norm_card.png",
	},
];

export default function NormAtlas() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<Link
				key="Norm"
				href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
				className="inline-block"
			>
				<Image
					src="/logos/norm.png"
					alt="Norm"
					width={350}
					height={220}
					className="rounded-md object-cover"
				/>
			</Link>
			<div className="w-full">
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/logos/cdc-petri-unsplash.jpg"
							alt="Kontakt"
							width={3660}
							height={2400}
							className="h-auto max-h-[350px] w-full rounded-md object-cover object-[50%_30%]"
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
							href="https://unsplash.com/photos/person-holding-black-framed-eyeglasses-tQZ9nTjsQwU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
			</div>

			<div className="mt-6 grid place-items-center gap-6 pb-4">
				<p className="mx-auto w-full text-lg">
					NORM-atlas gir tilgang til databasen i NORM for utvalgte bakteriearter
					og antibiotika over tid og fordelt på regioner. Verktøyet fremstiller
					andelen resistente mikrober (R). Dette er andelen av en bestemt
					bakterietype som normalt er følsom for det aktuelle antibiotikum, men
					der man ikke lenger kan forvente effekt av behandling på grunn av
					resistens. Øvrige bakteriestammer kan behandles enten med standarddose
					(S) eller økt dose av det aktuelle antibiotikum (I).
				</p>
			</div>

			<div className="rounded-md bg-gray-100 px-6 pb-6">
				<CardGrid data={resources} className="lg:grid-cols-2" />
			</div>

			<div className="mt-6 grid w-full place-items-center gap-6">
				<Card
					key={"Kontakt"}
					className="flex h-full w-full flex-col transition-shadow duration-300 hover:shadow-2xl"
				>
					<CardContent className="flex flex-col items-center justify-center gap-6 p-6">
						<div className="flex flex-col items-center justify-center space-y-6 text-center">
							<p>
								Kontakt
								<br />
								Gunnar Skov Simonsen <br />
								Telefon 918 48 680 <br />
								Mer info på{" "}
								<a
									href="https://unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
									className="text-primary hover:underline"
								>
									NORMs nettsider
								</a>
							</p>
							<Image
								src={"/logos/unn.png"}
								alt={"Kontakt"}
								width={550}
								height={250}
								className="py-2"
							/>
							<p>
								Organisasjonsnummer NO 983 974 899 <br />
								Telefon 07766 <br />
								Postadresse Universitetssykehuset Nord-Norge HF, postboks 100,
								9038 Tromsø
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
