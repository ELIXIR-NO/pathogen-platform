import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function SurveillancePage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["sebastian", "espen", "terje"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Surveillance</h2>
				<Image
					src="/pandemic-preparedness/surveillance/WHO.png"
					alt="Image of Word Health Organization"
					width={300}
					height={200}
					className="mx-auto rounded-md"
				/>

				<p>
					Public health surveillance is the “continuous, systematic collection,
					analysis and interpretation of health-related data needed for the
					planning, implementation, and evaluation of public health practice”
					(WHO, 2016). Approaches can include epidemiological surveillance,
					clinical surveillance, and/or syndromic surveillance. A common
					practice is disease surveillance which “helps countries assess the
					health of their populations in order for them to identify what
					diseases are affecting their communities and the prevalence of
					specific diseases for elimination efforts” which relies on the
					practice of disease case reporting (The Task Force for Global Health,
					2020).
				</p>

				<h2>
					<strong>Surveillance in Norway</strong>
				</h2>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.who.int/"
					>
						The WHO (World Health Organization)
					</a>{" "}
					is a United Nation Specialized Agency that is responsible for
					international public health.{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.who.int/countries/nor/"
					>
						As a participating member
					</a>
					,{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.who.int/norway"
					>
						Norway’s page
					</a>{" "}
					lists health related resources and data concerning the country.
				</p>

				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/en"
					>
						NIPH (Norwegian Institute of Public Health) or FHI
						(Folkehelseinstituttet)
					</a>{" "}
					is Norway’s national public health institute and its main activities
					are focussed on health surveillance. It conducts health surveys and
					studies like CONOR (Cohort of Norway) and the Norwegian Twin Registry,
					collects and promotes health data and services like biobanks or CyTOF
					(NIPH mass cytometry platform), and is actively engaged in infection
					control and prevention. Different surveillance systems and programs
					are for example NORM (Norwegian Surveillance System for Antimicrobial
					Drug Resistance), RAVN (Norwegian Surveillance System for Antiviral
					Resistance), and{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/en/in/surveillance/wastewater-surveillance-of-infectious-diseases/"
					>
						wastewater surveillance.
					</a>
				</p>

				<h2>
					<strong>Health registry for infectious diseases in Norway</strong>
				</h2>

				<p>
					The health registry{" "}
					<strong>Meldingssystem for smittsomme sykdommer (MSIS)</strong> is the
					official system for monitoring infectious diseases in Norway.
					Healthcare personnel and medical microbiology laboratories have a
					legal obligation to report cases of specified infectious diseases to
					MSIS. A daily updated copy of parts of the MSIS database is available
					on the website{" "}
					<a className="text-primary hover:underline" href="http://msis.no/">
						msis.no
					</a>
					.
				</p>

				<h2>
					<strong>Covid Surveillance</strong>
				</h2>

				<p>
					With the outbreak of Covid-19 pandemic, national and international
					covid surveillance and data collection became crucial. One of the
					resources is{" "}
					<a href="https://elixir-europe.org/services/covid-19">
						Elixir’s participation in covid surveillance
					</a>
					, including the Galaxy project:
				</p>

				<ul className="list-disc">
					<li>
						<a
							className="text-primary hover:underline"
							href="https://covid19.galaxyproject.org/"
						>
							https://covid19.galaxyproject.org/
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://galaxyproject.org/projects/covid19/"
						>
							https://galaxyproject.org/projects/covid19/
						</a>
					</li>
				</ul>

				<p>
					Further important platforms are the Covid-19 database and data portal:
				</p>

				<ul className="list-disc">
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.covid19dataportal.org/"
						>
							https://www.covid19dataportal.org/
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://covid19.sfb.uit.no/"
						>
							https://covid19.sfb.uit.no/
						</a>
					</li>
				</ul>

				<h2>
					<strong>Wastewater Surveillance</strong>
				</h2>

				<p>
					Wastewater surveillance is one of the most important aspects of public
					health surveillance. Important resources are the{" "}
					<a href="https://wastewater-observatory.jrc.ec.europa.eu/">
						EU Wastewater Observatory for Public Health
					</a>
					, the Joint Action{" "}
					<a href="https://www.fhi.no/en/cristin-projects/ongoing/eu-wish-eu4health-joint-action/">
						EU-WISH
					</a>
					, and the FHI’s{" "}
					<a href="https://www.fhi.no/en/in/surveillance/wastewater-surveillance-of-infectious-diseases/">
						wastewater surveillance
					</a>
					.
				</p>

				<h2>
					<strong>
						Surveillance of animal disease and infectious diseases from the
						environment
					</strong>
				</h2>

				<Image
					src="/pandemic-preparedness/surveillance/surveillance.png"
					alt="Image of surveillance"
					width={1000}
					height={200}
					className="mx-auto rounded-md"
				/>

				<p>
					The Norwegian Institute of Public Health conduct surveillance for the{" "}
					<strong>
						occurrence of common food, water, and animal-transmitted diseases,
						including vector-borne infections
					</strong>{" "}
					which are{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/publ/2024/overvakning-av-infeksjonssykdommer-som-smitter-fra-mat-vann-og-dyr-inkludert-vektorbarne-sykdommer/"
					>
						reported annually
					</a>
					. These reports further inform about the Infection Control Guide and
					Vaccination information for each disease, as well as the Outbreak
					Guide and other sources for handling outbreaks.
				</p>

				<p>
					Organized by the Norwegian Veterinary Institute at Ås and Oslo t
					<strong>
						he wildlife health monitoring program (
						<a
							className="text-primary hover:underline"
							href="https://www.notion.so/Surveillance-90ff68cdf99948019641055d4dbd164f?pvs=21"
						>
							ViltHOP
						</a>
						)
					</strong>{" "}
					monitors diseases in wild animals to document health status in
					wildlife populations, clarifying causes of illness and detecting
					increased disease or mortality. The main focus is on inter-species
					disease transmission{" "}
					<strong>
						between wild and domestic animals, as well as zoonoses—diseases that
						can spread from animals to humans.
					</strong>{" "}
					The wildlife health monitoring program includes a diverse range of
					species in the Norwegian ecosystem and has a special focus on diseases
					in hares, bats, and predators.
				</p>

				<p>
					The Norwegian Food Safety Authority conducts{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.mattilsynet.no/fisk-og-akvakultur/biosikkerhetsplan-i-akvakulturanlegg/bakgrunn-for-biosikkerhetsplan/generelt-om-forekomst-og-overvakning-av-sykdommer/helseovervakning"
					>
						<strong>biosecurity monitoring</strong>
					</a>{" "}
					for the aquaculture industry to enable early detection and management
					of diseases among farmed fish. This system requires operators to
					immediately notify the Authority if any listed diseases are suspected.
					Consequently, operators must diligently surveil fish health and
					monitor for any signs of disease or abnormalities.
				</p>

				<p>
					The Veterinary Institute additionally conduct surveillance using{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.vetinst.no/fagomrader/miljo-dna"
					>
						<strong>environmental DNA sampling</strong>
					</a>
					. These sampling methods are increasingly used for monitoring and
					early detection of pathogens, foreign species, conservation of
					endangered species, and biodiversity mapping. This has been
					implemented as a tool for monitoring crayfish plague and the
					coordination of national monitoring of noble crayfish and signal
					crayfish. There is ongoing work to develop environmental DNA
					monitoring as a supplementary tool for diseases like Gyrodactylus
					salaris, AGD, and ILA virus, among several research projects under the
					biosafety and epidemiology theme.
				</p>

				<h2>
					<strong>Surveillance of antimicrobial resistance</strong>
				</h2>

				<p>
					Surveillance of antibiotic resistance among pathogenic bacteria from
					humans is conducted through Norsk overvåkingssystem for
					antibiotikaresistens hos mikrober (NORM), which is coordinated by the
					Microbiological Department at the University Hospital of North Norway.
				</p>

				<p>
					NORM and the Norwegian Surveillance Program for Antibiotic Resistance
					in Microbes from Feed, Animals, and Food (NORM-VET) publish joint{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober#rapporter"
					>
						<strong>annual reports</strong>
					</a>
					. The report presents data on the prevalence of antibiotic resistance
					and the consumption of antibiotics in humans and animals. Data from
					relevant projects that are not included in the continuous surveillance
					programs are also presented.
				</p>

				<p>
					Data collected in NORM can be explored and visualised using the{" "}
					<a href="https://norm-atlas.no/">NORM-atlas</a>
				</p>

				<h2>
					<strong>Surveillance of antiviral resistance</strong>
				</h2>

				<p>
					In Norway the Norwegian Institute of Public Health is responsible for
					hosting a national health registry for antiviral resistance (
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/sm/overvaking/ravn/"
					>
						Register for resistensovervåkning av virus i Norge - RAVN
					</a>
					). The registry contains de-identified health information about
					individuals who have provided samples with specific viruses, as well
					as details about the viruses and their resistance to antiviral
					medications. The system is access restricted, and researches can apply
					for access from{" "}
					<a
						className="text-primary hover:underline"
						href="https://helsedata.no/no/"
					>
						Helsedata
					</a>
					.
				</p>
			</section>
		</div>
	);
}
