import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";

export default function EnterococcusPage() {
	return (
		<>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Workshop - FAIR Pathogen Data: From Research Data Management Basics
					and Standards to ENA Submission
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild className="w-1/4">
						<CentralImage src="/logos/elixir-logo-white.png" alt="image" />
					</HoverCardTrigger>
				</HoverCard>

				<p>
					Managing pathogen data effectively requires a strong grasp of data
					life cycles, unified metadata schemas, and reliable submission
					systems. Spread across two half-day sessions, this intensive workshop
					provides a comprehensive walkthrough of Research Data Management (RDM)
					for non-human pathogens, bridging the gap between theoretical
					standards and hands-on data deposition.
					<br />
					<br />
					Online <strong>November 10-11</strong>.
				</p>
				<p>
					Read more and link to registration:{" "}
					<a
						href="https://www.denbi.de/training-courses-2026/2110-fair-pathogen-data-from-research-data-management-basics-and-standards-to-ena-submission"
						target="_blank"
						rel="noopener noreferrer"
					>
						<br />
						<br />
						<img
							src="/highlights/workshop-fair-pathogen-data/denbi-logo-color.svg"
							alt="de.NBI"
							className="h-24 w-auto"
						/>
					</a>
				</p>
			</section>
		</>
	);
}
