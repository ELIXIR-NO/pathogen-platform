import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function InfectiousDiseasesPage() {
	return (
		<>
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["espen", "peter"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Infectious Diseases</h2>
				<Image
					src="/topics/infectious-diseases/infectious-diseases.png"
					alt="Image related to infectious diseases"
					width={500}
					height={300}
					className="mx-auto rounded-md"
				/>
				<p>
					Infectious diseases are disorders caused by organisms such as
					bacteria, viruses, fungi, or parasites. Many of these organisms are
					normally harmless and can even reside on or within an organism (e.g.,
					the human body or an animal) at any given time. However, under certain
					conditions, some organisms can cause disease. These diseases can
					spread directly or indirectly from one individual to another, from
					animal to human, through insect or animal bites, or by consuming
					contaminated food or water.
				</p>
				<p>
					These diseases can affect plants, animals, and humans, manifesting in
					various symptoms that can be mild, severe, or even deadly, impacting
					health and productivity. In plants, infectious diseases can cause
					symptoms such as wilting, blights, and rusts, significantly impacting
					agricultural productivity and food security. In animals, these
					diseases not only affect the health of domestic and agricultural
					industries but also wildlife conservation. Moreover, some infectious
					diseases are zoonotic, meaning they can be transmitted from animals to
					humans. In humans, infectious diseases are a major public health
					concern, capable of causing widespread outbreaks and pandemics with
					high morbidity and mortality rates.
				</p>
				<h3 className="font-bold">Threats to Everyday Life</h3>
				<p>
					Infectious diseases pose significant threats to everyday life and
					medical treatment. They can disrupt daily activities, cause widespread
					health crises, and place immense pressure on healthcare systems. In
					the medical field, infectious diseases are particularly concerning
					because they can lead to hospital-acquired infections, complicate
					surgeries and other treatments, and contribute to antibiotic
					resistance. This resistance makes it increasingly challenging to treat
					common infections, turning them into severe health threats.
				</p>
				<h3 className="font-bold">Where do I start?</h3>
				<p>
					On a national level, the
					<a
						className="text-primary hover:underline"
						href="https://www.infectious-diseases-toolkit.org/national-resources/norway#introduction"
					>
						Infectious Disease Tool Kit (IDTK)
					</a>
					provides a comprehensive overview and general discussion of infectious
					disease research in Norway. It also offers information on relevant
					health authorities and initiatives. Additionally, the
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/sm/smittevernhandboka/?term="
					>
						Smittevernhåndboka
					</a>
					is a good reference guide for the prevention and control of infectious
					diseases.
				</p>
				<p>
					<strong>Norwegian Veterinary Institute</strong> provides overviews on
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/en/research-and-innovation/research-groups"
					>
						research
					</a>
					and
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/en/surveillance-programmes"
					>
						surveillance programs
					</a>
					in the fields of animal health, fish health, and food safety.
				</p>
				<p>
					<strong>NORCE Norwegian Research Centre AS</strong> engages in genomic
					research, including studies on the genetic aspects of infectious
					diseases.
					<a
						className="text-primary hover:underline"
						href="https://www.norceresearch.no/en"
					>
						NORCE
					</a>
				</p>
				<p>
					<strong>Norwegian Institute of Bioeconomy Research (NIBIO)</strong>{" "}
					conducts research and provides solutions related to agriculture and
					the environment, including plant health and biosecurity. Their work
					often involves genomic research to understand and manage plant
					diseases.
					<a
						className="text-primary hover:underline"
						href="https://www.nibio.no/en"
					>
						NIBIO
					</a>
				</p>
				<p>
					<strong>Norwegian University of Life Sciences (NMBU)</strong> focuses
					on
					<a
						className="text-primary hover:underline"
						href="https://www.nmbu.no/en/faculties/biosciences"
					>
						biosciences
					</a>
					,
					<a
						className="text-primary hover:underline"
						href="https://www.nmbu.no/en/faculties/veterinary-medicine"
					>
						veterinary medicine
					</a>
					, and
					<a
						className="text-primary hover:underline"
						href="https://www.nmbu.no/en/faculties/environment-and-natural-resources"
					>
						environmental sciences
					</a>
					. They conduct research in plant sciences, including studies on plant
					pathogens and genomic approaches to plant health.
				</p>
				<p>
					<strong>
						The Norwegian Scientific Committee for Food and Environment (VKM)
					</strong>{" "}
					provides independent risk assessments concerning food safety and
					environmental issues, including those related to plant health and
					disease.
					<a className="text-primary hover:underline" href="https://vkm.no/">
						VKM
					</a>
				</p>
				<h3 className="font-bold">
					Health registry for infectious diseases in Norway
				</h3>
				<p>
					The health registry
					<strong>Meldingssystem for smittsomme sykdommer (MSIS)</strong> is the
					official system for monitoring infectious diseases in Norway.
					Healthcare personnel and medical microbiology laboratories are legally
					obligated to report cases of specified infectious diseases to MSIS. A
					daily updated copy of parts of the MSIS database is available on the
					website
					<a className="text-primary hover:underline" href="http://msis.no/">
						msis.no
					</a>
					.
				</p>
				<h3 className="font-bold">Surveillance in Europe</h3>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.ecdc.europa.eu/en"
					>
						The European Centre for Disease Prevention and Control (ECDC)
					</a>
					is an EU agency aimed at strengthening Europes defenses against
					infectious diseases in humans. ECDC maintains the
					<a
						className="text-primary hover:underline"
						href="https://atlas.ecdc.europa.eu/public/index.aspx"
					>
						Surveillance Atlas of Infectious Diseases
					</a>
					, a tool that interacts with the latest data on various infectious
					diseases collected through
					<a
						className="text-primary hover:underline"
						href="https://www.ecdc.europa.eu/en/publications-data/european-surveillance-system-tessy"
					>
						The European Surveillance System (TESSy)
					</a>
					. This tool allows users to interact with and manipulate the data to
					produce various tables and maps.
				</p>
			</section>
		</>
	);
}
