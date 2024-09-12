import ContributorsPanel from "@/components/contributors-panel";
import Image from "next/image";

export default function WhereDoIStartPage() {
	return (
		<>
			<ContributorsPanel contributors={["espen"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Starting Points</h2>
				<ul className="list-disc pl-5">
					<li>
						The{" "}
						<a
							href="https://rdmkit.elixir-europe.org/no_resources"
							className="text-primary hover:underline"
						>
							Norwegian resources pages
						</a>{" "}
						in the RDMkit provide a general overview of institutional and funder
						policies on research data and the available data management
						resources in Norway.{" "}
					</li>
					<li>
						The{" "}
						<a
							href="https://rdmkit.elixir-europe.org/human_pathogen_genomics"
							className="text-primary hover:underline"
						>
							RDMkit page for human pathogen genomics
						</a>{" "}
						provides general guidelines tailored to the needs of pathogen
						genomics data management.
					</li>
					<li>
						<a
							href="https://elixir.no/rdm-lookup/"
							className="text-primary hover:underline"
						>
							Norwegian Life Science RDM LookUp
						</a>{" "}
						is a resource that acts like a waypost to help you to find data
						standards, tools, support services and policies relevant to your
						life sciences research domain.
					</li>
					<li>
						The{" "}
						<a
							href="https://www.infectious-diseases-toolkit.org/national-resources/norway#domain-specific-infrastructures-or-resources"
							className="text-primary hover:underline"
						>
							Infectious Disease Tool Kit (IDTK)
						</a>{" "}
						provides a very good overview and general discussion of infectious
						disease research in Norway and provides information on relevant
						health authorities and initiatives.
					</li>
					<li>
						Need a Data Management Plan (DMP)? These plans are often a
						requirement from funders. ELIXIR-Norway provides the{" "}
						<a
							href="https://norway.dsw.elixir-europe.org/wizard/knowledge-models/elixir.no:lifesciences-elixir-norway:latest/preview"
							className="text-primary hover:underline"
						>
							Norwegian Data Stewardship Wizard
						</a>{" "}
						instance—an intuitive tool to help you navigate recommendations and
						RDM resources to create DMPs. This tool, which is highly recommended
						by both the Norwegian and European Research Councils includes
						questionnaires tailored to meet requirements from both Norwegian and
						European funding agencies. The process involves providing
						information about the data that will be generated in your research
						project through guided questions. The smart questionnaires will ask
						relevant questions, offering hints, multimedia contents, external
						resources, and community help. These questionnaires feature
						selectable answers that minimize the need for free-text responses.
						Logging in is easy via email or FEIDE. There are also multiple
						export options available.
					</li>
				</ul>
				<div className="-mx-6 flex flex-row justify-evenly">
					<Image
						src="/logos/RDMkit.svg"
						alt="RDMkit Logo"
						width={300}
						height={150}
					/>
					<Image
						src="/logos/infectious-diseases-toolkit.svg"
						alt="Infectious diseases toolkit Logo"
						width={300}
						height={150}
					/>
					<Image src="/logos/dsw.svg" alt="DSW Logo" width={300} height={150} />
				</div>
				<h3 className="text-3xl font-bold">Data Sensitivity and Security:</h3>
				<ul className="list-disc pl-5">
					<li>
						Guidance on handling sensitive data is available through the RDMKit
						pages for{" "}
						<a
							href="https://rdmkit.elixir-europe.org/data_sensitivity"
							className="text-primary hover:underline"
						>
							Data Sensitivity
						</a>{" "}
						and{" "}
						<a
							href="https://rdmkit.elixir-europe.org/data_security"
							className="text-primary hover:underline"
						>
							Data Protection
						</a>
						.
					</li>
					<li>
						The FAIR{" "}
						<a
							href="https://faircookbook.elixir-europe.org/content/recipes/reusability/expressing-data-use.html"
							className="text-primary hover:underline"
						>
							Cookbook
						</a>{" "}
						contains specific recipes for managing sensitive data use
						conditions.
					</li>
				</ul>
				<h3 className="text-3xl font-bold">Task-Specific Instructions</h3>
				<ul className="list-disc pl-5">
					<li>
						The{" "}
						<a
							href="https://faircookbook.elixir-europe.org/content/home.html"
							className="text-primary hover:underline"
						>
							FAIR Cookbook offers step-by-step instructions
						</a>{" "}
						for applying FAIR principles in practical, task-oriented ways.
					</li>
					<li>
						To find{" "}
						<a
							href="https://fairsharing.org/search?q=pathogen"
							className="text-primary hover:underline"
						>
							Metadata Standards and suitable Repositories
						</a>{" "}
						you can browse relevant standards at FAIRsharing to ensure
						interoperability and reusability of data.
					</li>
				</ul>
				<div className="flex flex-row justify-evenly">
					<Image
						src="/logos/faircookbook.png"
						width={500}
						height={12}
						alt="Fair cookbook logo"
					/>
					<Image
						src="/logos/fairsharing.svg"
						width={300}
						height={150}
						alt="Fair sharing logo"
					/>
				</div>
				<h3 className="text-3xl font-bold">Training and Tools:</h3>
				<ul className="list-disc pl-5">
					<li>
						The{" "}
						<a
							href="https://tess.elixir-europe.org/search?q=pathogen"
							className="text-primary hover:underline"
						>
							Training eSupport System (TeSS)
						</a>{" "}
						is a website where you can find training materials, learning events
						and courses on RDM.
					</li>
					<li>
						<a
							href="https://bio.tools/"
							className="text-primary hover:underline"
						>
							Bio.Tools
						</a>{" "}
						provides a comprehensive catalogue of educational resources and{" "}
						<a
							href="https://bio.tools/t?page=1&q=pathogen&sort=score"
							className="text-primary hover:underline"
						>
							bioinformatics tools tailored to pathogen genomics
						</a>
						.
					</li>
					<li>
						For bioinformaticians it might be worth checking out the{" "}
						<a
							href="https://galaxyproject.org/community/sig/microbial/"
							className="text-primary hover:underline"
						>
							Microgalaxy Community
						</a>{" "}
						and the tools available in the{" "}
						<a
							href="https://microgalaxy.usegalaxy.eu/"
							className="text-primary hover:underline"
						>
							MicroGalaxy instance
						</a>
						, and how you can{" "}
						<a
							href="https://training.galaxyproject.org/training-material/topics/galaxy-interface/"
							className="text-primary hover:underline"
						>
							Use Galaxy and Managing your Data
						</a>
						.
					</li>
				</ul>
				<div className="flex flex-row justify-evenly">
					<Image
						src="/logos/tess.svg"
						alt="TeSS logo"
						width={200}
						height={100}
					/>
					<Image
						src="/logos/bio-tools.svg"
						alt="bio.tools logo"
						width={200}
						height={100}
					/>
					<Image src="/logos/GTN.png" alt="GTN logo" width={200} height={100} />
				</div>
				<h3 className="text-3xl font-bold">
					Suggestion on how to use these tools:
				</h3>
				<p>
					To start off, we recommend you to begin from reading the{" "}
					<a
						href="https://rdmkit.elixir-europe.org/human_pathogen_genomics"
						className="text-primary hover:underline"
					>
						Data Management Plan (DMP)
					</a>{" "}
					page on RDMkit as it helps to get an overview about what entails a
					DMP. From RDMkit, you can choose a tool such as{" "}
					<a
						href="https://norway.dsw.elixir-europe.org/wizard/knowledge-models/elixir.no:lifesciences-elixir-norway:latest/preview"
						className="text-primary hover:underline"
					>
						Data Stewardship Wizard (DSW)
					</a>{" "}
					to create a DMP. The DSW is a questionnaire style tool for creating,
					updating and sharing your DMP with inbuilt guidance. The DSW will
					direct you to RDMkit’s specific guidelines, should you need them when
					answering questions. Also, the DSW has links to FAIRsharing to help
					you choose among repositories, standards and policies to adopt for
					your project From RDMkit, you can navigate to TeSS to discover
					DMP-related training materials and events.
				</p>
			</section>
		</>
	);
}
