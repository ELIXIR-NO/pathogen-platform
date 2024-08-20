import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function MedicalMicroBiologyReferenceLabsPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["erik"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Medical microbiology reference labs
				</h2>
				<Image
					src="/pandemic-preparedness/medical-microbiology-reference-labs/medical-mrl.jpg"
					alt="Image of Word Health Organization"
					width={700}
					height={300}
					className="mx-auto rounded-md"
				/>

				<p>
					The Norwegian Health Directorate can authorise Norwegian microbiology
					labs with national responsibility to investigate and report pathogens
					and antimicrobial resistance (Laboratorier med nasjonal
					referansefunksjon).
				</p>

				<p>
					Laboratories with a national reference function in medical
					microbiology are assigned the following tasks according to the
					regulation:
				</p>

				<ul className="list-decimal">
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

				<h2>Norwegian resources</h2>

				<p>
					In Norway, several key institutions serve as reference laboratories in
					the field of medical microbiology, providing essential support for
					diagnosing, monitoring, and researching infectious diseases. These
					reference labs play a crucial role in ensuring high-quality testing
					and supporting public health efforts.
				</p>

				<p>
					As per 2024, Norway has no national system for bio-banking samples
					related to pathogens. Each laboratory has its own policy to store (if
					any and duration) the samples.
				</p>

				<h3>National reference laboratories</h3>

				<p>
					Helsedirektoratet (The Norwegian Health Directorate) maintains a
					comprehensive list of microbiology reference laboratories:
				</p>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.helsedirektoratet.no/tema/smittevern/referansefunksjoner-i-medisinsk-mikrobiologi"
					>
						Referansefunksjoner i medisinsk mikrobiologi
					</a>
				</p>

				<h3>Folkehelseinstituttet (FHI)</h3>

				<p>
					FHI (The National Institute of Public Health) is the primary public
					health institution in Norway and operates several national reference
					laboratories for medical microbiology.
				</p>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						https://www.fhi.no/
					</a>
				</p>

				<h3>University Hospitals</h3>

				<p>
					Major university hospitals in Norway, such as the University Hospital
					of North Norway, Oslo University Hospital, and Haukeland University
					Hospital, host reference laboratories for specific pathogens or
					medical microbiology disciplines.
				</p>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://no.wikipedia.org/wiki/Universitetssykehus"
					>
						https://no.wikipedia.org/wiki/Universitetssykehus
					</a>
				</p>

				<h3>Veterinærinstituttet</h3>

				<p>
					Veterinærinstituttet (Norwegian Veterinary Institute) serves as a
					national reference laboratory for zoonotic diseases and pathogens
					affecting animals that can also impact human health. It plays a key
					role in the One Health approach, linking veterinary and medical
					microbiology.
				</p>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/en"
					>
						Home - Norwegian Veterinary Institute
					</a>
				</p>

				<h3>NORM and NORM-VET Programs</h3>

				<p>
					These surveillance programs, while not labs themselves, are closely
					linked to reference laboratories across Norway. NORM (for human
					health) and NORM-VET (for animal health and food) collect and analyze
					data on antibiotic resistance, working with reference labs to ensure
					high-quality testing and data interpretation.
				</p>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					>
						NORM - Norsk overvåkingssystem for antibiotikaresistens hos mikrober
					</a>
				</p>

				<h3>Regional Laboratories and research institutions</h3>

				<p>
					Regional laboratories across Norway, often part of larger hospital
					systems, or research institutions also act as reference centers for
					certain pathogens or types of testing, supporting local public health
					efforts and contributing to national surveillance networks. One
					example is NMBU being the reference laboratory for the bacterial toxin
					caused by Clostridium botulinum.
				</p>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.nmbu.no/mattrygghetslab"
					>
						https://www.nmbu.no/mattrygghetslab
					</a>
				</p>

				<h2>Norwegian research</h2>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.unn.no/49ef2b/siteassets/documents/kompetansetjenester--sentre-og-fagrad/k-res-nasjonal-kompetansetjeneste-for-pavisning-av-antibiotikaresistens/vitenskapelige-publikasjoner/vitenskapelige-publikasjoner.pdf"
					>
						Publication list
					</a>{" "}
					from K-res (Nasjonalt kompetansesenter for påvisning av
					antibiotikaresistens)
				</p>
			</section>
		</div>
	);
}
