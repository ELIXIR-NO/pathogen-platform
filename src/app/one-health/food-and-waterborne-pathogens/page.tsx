import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function FoodWaterbornePathogensPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["author1", "author2", "author3"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Food and waterborne pathogens</h2>
				<Image
					src="/pandemic-preparedness/one-health/food-and-waterborne-pathogens/rachael-gorjestani-XlA2994Txhw-unsplash.jpg"
					alt="Photo by Rachael Gorjestani on Unsplash"
					width={900}
					height={500}
					className="mx-auto rounded-md"
				/>
				<p className="text-center text-sm">
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
				</p>
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
				<h3 className="font-bold">Norwegian resources</h3>
				<p>
					The National Institute of Public Health (
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						Folkehelseinstituttet
					</a>
					) is responsible for collecting and publishing{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/publ/2024/"
					>
						annual reports
					</a>{" "}
					on the surveillance of diseases caused by food- and waterborne
					pathogens in Norway. In addition to food- and waterborne pathogens,
					the report (Overvåkning av infeksjonssykdommer som smitter fra mat,
					vann og dyr, inkludert vektorbårne sykdommer) includes infectious
					diseases caused by vector-borne and zoonotic pathogens.
				</p>
				<p>
					<strong>Annual report 2023</strong> -{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/contentassets/d59572bcd8584c5ba0e5dcdf7db60948/arsrapport-mat-vann-dyr-2023.pdf"
					>
						ÅRSRAPPORT 2023
					</a>
				</p>
				<h4 className="font-bold">Annual reports</h4>
				<p>
					The National Institute of Public Health (
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						Folkehelseinstituttet
					</a>
					) is responsible for collecting and publishing{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/publ/2024/"
					>
						annual reports
					</a>{" "}
					on the surveillance of diseases caused by food- and waterborne
					pathogens in Norway.
				</p>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/publ/2024/overvakning-av-infeksjonssykdommer-som-smitter-fra-mat-vann-og-dyr-inkludert-vektorbarne-sykdommer/"
					>
						Overvåkning av infeksjonssykdommer som smitter fra mat, vann og dyr,
						inkludert vektorbårne sykdommer
					</a>
				</p>
				<h4 className="font-bold">MSIS</h4>
				<p>
					The health registry MSIS (Meldingssystem for smittsomme sykdommer) is
					the official system for monitoring infectious diseases in humans,
					food- and waterborne pathogens.
				</p>
				<p>
					<a className="text-primary hover:underline" href="https://msis.no/">
						MSIS Registry
					</a>
				</p>
				<h4 className="font-bold">Mattilsynet</h4>
				<p>
					Mattilsynet (Norwegian Food Safety Authority) is responsible for
					ensuring food and water safety in Norway. It conducts inspections,
					monitors food and water quality, and enforces regulations to prevent
					contamination. The authority also collaborates with other institutions
					during foodborne outbreak investigations.
				</p>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.mattilsynet.no/"
					>
						Mattilsynet
					</a>
				</p>
				<h4 className="font-bold">NORM-VET</h4>
				<p>
					The surveillance program NORM-VET (Norsk overvåkingsprogram for
					antibiotikaresistens i mikrober fra fôr, dyr og næringsmidler) focuses
					on antibiotic resistance in microbes originating from feed, animals,
					and food. It works in conjunction with NORM to provide a comprehensive
					overview of antibiotic resistance trends across human and animal
					populations.
				</p>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/overvaking/antibiotikaresistens-norm-vet"
					>
						Antibiotikaresistens (NORM-VET)
					</a>
				</p>
				<h4 className="font-bold">Veterinærinstituttet</h4>
				<p>
					Veterinærinstituttet (Norwegian Veterinary Institute) monitors
					zoonotic pathogens, including those that can be transmitted through
					food. It provides expertise and laboratory support for detecting and
					analysing pathogens in food products, contributing to food safety.
				</p>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/en"
					>
						Home - Norwegian Veterinary Institute
					</a>
				</p>
			</section>
		</div>
	);
}
