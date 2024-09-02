import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function PseudomonasPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Pseudomonas</h2>
				<Image
					src="/topics/pseudomonas/pseudomonas-aeruginosa.jpg"
					alt="Image of pseudomonas aeruginos"
					width={700}
					height={500}
					className="mx-auto rounded-md"
				/>
				<p>
					Pseudomonas species are Gram-negative aerobic rods, forming granular
					and dry- colonies of various colors. Their measure is from 0.5 to 0.8
					μm by 1.5 to 3.0 μm. It occupies the environment, mostly soil (coastal
					areas), water, and plant and animal tissues, and it can easily survive
					various environmental stresses.
				</p>
				<p>
					Pseudomonas means ”false unit”, aeruginosa refers to the blue-green
					colour of laboratory cultures of the species discovered by Carle
					Gessard, a French scientist, in 1882. In his experiment, water-soluble
					pigments in the presence of P. aeruginosa and under the ultraviolet
					light turned to a blue-green color.
				</p>
				<p>
					<span className="font-bold italic">Pseudomonas aeruginos</span>{" "}
					usually affects immunocompromised people. Healthy people usually would
					not get infected by this microbe.
				</p>
				<p>
					<span className="font-bold italic">P. aeruginosa</span> is an
					opportunistic pathogen, and it needs to be a break in the first
					defence line of the body. The break is a classified example as trauma,
					cystic fibrosis, surgeries, cancer, AIDS, or other immunosuppressed
					stages.
				</p>
				<p>
					These bacteria have an increased ability to erase antibiotics from
					inside the cell, leading to high resistance to antibiotics and common
					disinfectants. It primarily infects the urinary and respiratory
					tracts,
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					swimmer's ears, cornea, wounds, and folliculitis.
				</p>
				<p>
					<span className="font-bold italic">P. aeruginosa</span> is listed as a
					CRITICAL priority on the antimicrobial pathogen list published by the
					World Health Organization{" "}
					<a
						className="text-primary hover:underline"
						href="https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed"
					>
						(WHO)
					</a>
					.
				</p>
				<p>
					In the{" "}
					<span className="font-bold italic">Pseudomonas aeruginosa</span>
					database, you can find the genomes of the species and, corresponding
					to them, metadata with relevant information about the pathogen source
				</p>
				<h3 className="font-bold">Relevant links</h3>
				<ul className="list-disc">
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.fhi.no/ut/utbrudd/oversikt-over-storre-utbrudd/utbrudd-av-pseudomonas-infeksjon-i-/"
						>
							Utbrudd av pseudomonas-infeksjon i Norge
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed"
						>
							World Health Organisation
						</a>
					</li>
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2022.27.18.2200312"
						>
							<span>Pseudomonas aeruginosa</span> countrywide outbreak in
							Norwegian hospitals
						</a>
					</li>
				</ul>
			</section>
		</>
	);
}
