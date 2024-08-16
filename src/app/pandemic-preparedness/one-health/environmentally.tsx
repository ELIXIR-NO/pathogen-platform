import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function EnvironmentallyTransmittedPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["author1", "author2", "author3"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Environmentally transmitted pathogens</h2>
				<Image
					src="https://prod-files-secure.s3.us-west-2.amazonaws.com/f66e1653-d12d-4ace-a61b-25015798895c/5241ead5-ca0c-45ac-ad80-b5064d3cf73b/jacek-kadaj-oG88wo81y70-unsplash.jpg"
					alt="Aerial view of a blue lake surrounded by trees"
					width={900}
					height={500}
					className="mx-auto rounded-md"
				/>
				<p className="text-sm text-center">
					Photo by{" "}
					<a
						className="text-primary hover:underline"
						href="https://unsplash.com/@jacekkadaj?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>
						Jacek Kadaj
					</a>{" "}
					on{" "}
					<a
						className="text-primary hover:underline"
						href="https://unsplash.com/photos/an-aerial-view-of-a-blue-lake-surrounded-by-trees-oG88wo81y70?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>
						Unsplash
					</a>
				</p>
				<p>
					Many human pathogens can be transmitted only by direct or close contact with an infected person. However, some pathogenic microorganisms can be found in the environment and are capable of infecting humans and causing disease.
				</p>
				<p>
					Environmentally transmitted pathogens include bacteria, parasites, and viruses, and can be found in various environments such as water, soil, and waste. Some of these pathogens are dependent on the host and can only live hours outside the host (e.g.{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5340262/"
					>
						Neisseria meningitidis
					</a>
					), while others spend most or all of their lives in the environment (e.g.{" "}
					<a
						className="text-primary hover:underline"
						href="https://pubmed.ncbi.nlm.nih.gov/11207747/"
					>
						Legionella pneumophila
					</a>
					).
				</p>

				<h3 className="font-bold">Norwegian resources</h3>
				<p>
					In Norway, several public resources and institutions are dedicated to monitoring and managing environmentally transmitted pathogens. These pathogens, which can be spread through environmental sources such as water, soil, and air, pose risks to public health and require coordinated efforts for surveillance and control.
				</p>
				<p>
					The National Institute of Public Health (
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						Folkehelseinstituttet
					</a>
					) is responsible for monitoring the occurrence of food- and waterborne diseases and zoonoses in humans and providing advice on infection control measures. Read more about the surveillance and measures{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/sm/smitte-fra-mat-vann-dyr/"
					>
						here
					</a>
					.{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.fhi.no/"
					>
						Folkehelseinstituttet
					</a>{" "}
					is operating{" "}
					<a
						className="text-primary hover:underline"
						href="https://vesuv.no/"
					>
						Vesuv
					</a>
					, a web-based outbreak alert system for specialist and municipal health services as well as the Norwegian Food Safety Authority.
				</p>

				<h3 className="font-bold">Folkehelseinstituttet (FHI)</h3>
				<p>
					The FHI is a central institution for monitoring infectious diseases, including those transmitted through environmental sources.
				</p>
				<a
					className="text-primary hover:underline"
					href="https://www.fhi.no/"
				>
					https://www.fhi.no/
				</a>

				<h3 className="font-bold">MSIS</h3>
				<p>
					The health registry MSIS (Meldingssystem for smittsomme sykdommer) is the official system for monitoring infectious diseases in humans, including those transmitted through environmental sources.
				</p>
				<a
					className="text-primary hover:underline"
					href="https://msis.no/"
				>
					https://msis.no/
				</a>

				<h3 className="font-bold">Mattilsynet</h3>
				<p>
					Mattilsynet (Norwegian Food Safety Authority) is responsible for ensuring the safety of food and water, which includes monitoring and controlling pathogens that can be transmitted through these environmental mediums. The authority conducts inspections, enforces regulations, and responds to contamination incidents that could lead to public health risks.
				</p>
				<a
					className="text-primary hover:underline"
					href="https://www.mattilsynet.no/"
				>
					https://www.mattilsynet.no/
				</a>
			</section>
		</div>
	);
}
