"use client";

import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function EnterococcusPage() {
	return (
		<div className="relative min-h-screen">
			<ContributorsPanel contributors={["dorota"]} />
			<section className="flex flex-col space-y-6">
				<h2 className="text-3xl font-bold">
					Enterococcus faecalis (E. faecalis)
				</h2>
				<Image
					src="/topics/enterococcus/enterococcus.png"
					alt="Image of Enterococcus faecalis"
					width={300}
					height={300}
					className="mx-auto rounded-md"
				/>
				<p className="text-justify">
					<strong>
						<em>Enterococcus faecalis</em> (E. faecalis)
					</strong>
					, until the year 1984, was classified as a{" "}
					<em>Streptococcus faecalis</em>. It is a Gram-positive coccus, and
					facultative anaerobic belongs to the lactic acid bacteria group. It is
					primarily present in the GI tract of humans, animals, and the
					environment.
				</p>
				<p className="text-justify">
					As a commensal bacterium, it lives harmlessly in the healthy human gut.
					It is commonly used as a probiotic. However, <em>E. faecalis</em> could
					spread to the other part of the body, causing infections.
				</p>
				<p className="text-justify">
					The bacterium can survive extreme environments such as acid and
					alkaline. Hence the <em>E. faecalis</em> antimicrobial resistance to
					antibiotics, both intrinsic and acquired, has become increasingly
					common. The resistance is mainly directed to vancomycin. Exterminating
					the bacterium from the human body could be tricky.
				</p>
				<p className="text-justify">
					<strong>
						<em>E. faecalis</em> is
					</strong>{" "}
					easily transferred via physical contact from person to person and also
					via contact with contaminated surfaces. Proper hand-washing techniques
					and a fiber-rich diet play an essential role in not becoming
					disease-causing members of the community.
				</p>
				<p className="text-justify">
					<strong>
						<em>E. faecalis</em> is
					</strong>{" "}
					listed as a HIGH priority on the list of antimicrobial pathogens
					published by the World Health Organization (
					<a
						href="https://www.who.int/news/item/27-02-2017-who-publishes-list-of-bacteria-for-which-new-antibiotics-are-urgently-needed"
						className="text-blue-600 underline hover:text-blue-800"
					>
						WHO
					</a>
					).
				</p>
				<p className="text-justify">
					In the{" "}
					<strong>
						<em>Enterococcus faecalis</em>
					</strong>{" "}
					database, you will be able to find the genomes of the species and,
					corresponding to them, metadata with relevant information about the
					pathogen source.
				</p>
				<ul className="list-disc">
					<li>
						<a
							className="text-primary hover:underline"
							href="https://www.sciencedirect.com/science/article/pii/S2213716523002126"
						>
							The first tigecycline resistant Enterococcus faecium in Norway was
							related to tigecycline exposure
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
						<a className="text-primary hover:underline" href="">
							Data repositories
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}
