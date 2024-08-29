import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function VectorBornePathogensPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["author1", "author2", "author3"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Vector-borne pathogens</h2>
				<Image
					src="/pandemic-preparedness/one-health/vector-borne-pathogens/marino-linic-M_krTMIPSLg-unsplash.jpg"
					alt="Photo by Marino Linic on Unsplash"
					width={900}
					height={500}
					className="mx-auto rounded-md"
				/>
				<p className="text-center text-sm">
					Photo by{" "}
					<a
						className="text-primary hover:underline"
						href="https://unsplash.com/@marinolinic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>
						Marino Linic
					</a>{" "}
					on{" "}
					<a
						className="text-primary hover:underline"
						href="https://unsplash.com/photos/a-person-holding-a-small-bug-M_krTMIPSLg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					>
						Unsplash
					</a>
				</p>
				<p>
					Vector-borne pathogens are transmitted to humans through vectors,
					which are typically arthropods such as mosquitoes, ticks, or fleas.
					The general transmission pathway is that the vector becomes infected
					by feeding on the blood of an infected host (often an animal) and then
					transmits the pathogen to a human host through subsequent bites.
				</p>
				<p>
					The key difference from zoonotic pathogens is that vector-borne
					pathogens require an intermediary vector for transmission to humans.
				</p>
				<h3 className="font-bold">
					Surveillance of vector-borne pathogens in Norway
				</h3>
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
					on the surveillance of diseases caused by vector-borne pathogens in
					Norway. In addition to vector-borne pathogens, the report (Overvåkning
					av infeksjonssykdommer som smitter fra mat, vann og dyr, inkludert
					vektorbårne sykdommer) includes infectious diseases caused by food-
					and waterborne and zoonotic pathogens.
				</p>
			</section>
		</div>
	);
}
