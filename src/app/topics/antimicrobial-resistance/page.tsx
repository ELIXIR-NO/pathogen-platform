import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function AntimicrobialResistancePage() {
	return (
		<>
			<ContributorsPanel contributors={["erik", "espen", "peter"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Antibiotic Resistance</h2>
				<Image
					src="/topics/antibiotic-resistance/antibiotic-resistance.png"
					alt="Image of laboratory test"
					width={900}
					height={500}
					className="mx-auto rounded-md"
				/>
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
				<h3 className="font-bold">
					In Norway, various resources offer detailed information on antibiotic
					resistance research and surveillance.
				</h3>
				<ul className="list-disc">
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.unn.no/fag-og-forskning/k-res"
						>
							K-res
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://norm-atlas.no/"
						>
							NORM-atlas
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.fhi.no/sm/antibiotikaresistens/antibiotika-og-antibiotikaresistens-oversikt-over-aktorer-og-deres-ansvarsomrader/"
						>
							Antibiotika og antibiotikaresistens
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.ecdc.europa.eu/en/antimicrobial-resistance"
						>
							Antimicrobial resistance (AMR)
						</a>
					</li>
				</ul>
			</section>
		</>
	);
}
