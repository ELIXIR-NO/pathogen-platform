import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function ZoonoticPathogensPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["author1", "author2", "author3"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Zoonotic pathogens</h2>
				<Image
					src="https://prod-files-secure.s3.us-west-2.amazonaws.com/f66e1653-d12d-4ace-a61b-25015798895c/7517472a-7ad0-4d7a-838a-212a519b122c/christopher-carson-i4XLJmlYit4-unsplash.jpg"
					alt="White piglet chewing hay"
					width={900}
					height={500}
					className="mx-auto rounded-md"
				/>
				<p className="text-sm text-center">
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
				</p>
				<p>
					Zoonotic pathogens are infectious agents that can be transmitted from animals to humans. These pathogens include a wide range of microorganisms such as viruses, bacteria, fungi, parasites, and prions.
				</p>
				<p>
					The close interaction between humans and animals, whether through agriculture, pet ownership, wildlife contact, or environmental encroachment, can facilitate the spread of zoonotic diseases (zoonosis). The transmission can occur through direct contact with infected animals, bites or scratches, inhalation of aerosols, or through vectors such as mosquitoes and ticks.
				</p>
				<p>
					Preventing zoonotic diseases requires a multidisciplinary approach, incorporating animal health, human health, and environmental management.
				</p>

				<h3 className="font-bold">Norwegian resources</h3>
				<p>
					In Norway, the Norwegian Veterinary Institute (
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/"
					>
						Veterinærinstituttet
					</a>
					) is responsible for maintaining a comprehensive overview of the occurrence of zoonoses in animals, food, and the environment.{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/"
					>
						Veterinærinstituttet
					</a>{" "}
					also serves as the National Reference Laboratory (NRL) for these areas in Norway and reports Norwegian data on specified zoonoses in feed, animals, and food to the{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.efsa.europa.eu/en"
					>
						European Food Safety Authority (EFSA)
					</a>
					.
				</p>

				<h3 className="font-bold">Annual reports</h3>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/fagomrader/zoonoser"
					>
						Annual reports
					</a>{" "}
					are published in collaboration with{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						FHI (National Institute of Public Health)
					</a>{" "}
					and{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.mattilsynet.no/"
					>
						Mattilsynet (Norwegian Food Safety Authority)
					</a>
					.
				</p>
				<Image
					src="https://prod-files-secure.s3.us-west-2.amazonaws.com/f66e1653-d12d-4ace-a61b-25015798895c/a28ce5f9-4ae0-4276-9e71-b31ed7555c5e/mattilsynet_logo_ok.png"
					alt="Mattilsynet logo"
					width={400}
					height={200}
					className="mx-auto"
				/>

				<h3 className="font-bold">MSIS</h3>
				<p>
					The health registry MSIS (Meldingssystem for smittsomme sykdommer) is the official system for monitoring infectious diseases in humans, including zoonotic pathogens.
				</p>
				<Image
					src="https://prod-files-secure.s3.us-west-2.amazonaws.com/f66e1653-d12d-4ace-a61b-25015798895c/61782409-a708-440b-bb3b-4618c97fea81/fhi-logo-norsk-hele-navnet.webp"
					alt="FHI logo"
					width={400}
					height={200}
					className="mx-auto"
				/>
				<a
					className="text-primary hover:underline"
					href="https://msis.no/"
				>
					https://msis.no/
				</a>

				<h3 className="font-bold">NORM</h3>
				<p>
					The health registry NORM (Norsk overvåkingssystem for antibiotikaresistens hos mikrober) monitors antibiotic resistance in pathogenic bacteria from humans. It collaborates closely with the NORM-VET program to produce annual reports on antibiotic resistance in both humans and animals.
				</p>
				<Image
					src="https://prod-files-secure.s3.us-west-2.amazonaws.com/f66e1653-d12d-4ace-a61b-25015798895c/b26c9dbc-3222-49f8-aac5-3469d6aee06b/norm-logo_OK_ratio.png"
					alt="NORM logo"
					width={400}
					height={200}
					className="mx-auto"
				/>
				<a
					className="text-primary hover:underline"
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
				>
					NORM - Norsk overvåkingssystem for antibiotikaresistens hos mikrober
				</a>

				<h3 className="font-bold">NORM-VET</h3>
				<p>
					The surveillance program NORM-VET (Norsk overvåkingsprogram for antibiotikaresistens i mikrober fra fôr, dyr og næringsmidler) focuses on antibiotic resistance in microbes originating from feed, animals, and food.
				</p>
				<Image
					src="https://prod-files-secure.s3.us-west-2.amazonaws.com/f66e1653-d12d-4ace-a61b-25015798895c/9b8a831d-0589-4dda-b682-692bda55f5bc/VI-logo_OK.png"
					alt="Veterinærinstituttet logo"
					width={400}
					height={200}
					className="mx-auto"
				/>
				<a
					className="text-primary hover:underline"
					href="https://www.vetinst.no/overvaking/antibiotikaresistens-norm-vet"
				>
					Antibiotikaresistens (NORM-VET)
				</a>
			</section>
		</div>
	);
}
