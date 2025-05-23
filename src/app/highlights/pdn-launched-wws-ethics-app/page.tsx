import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";

export default function EnterococcusPage() {
	return (
		<>
			<section className="flex flex-col space-y-6 text-justify">
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/highlights/pdn-launched-wws-ethics-app/header-image.png"
							alt="image"
						/>
					</HoverCardTrigger>
				</HoverCard>
				<h2 className="text-3xl font-bold">
					New ethical guidance tool for wastewater surveillance
				</h2>

				<p>
					As wastewater surveillance efforts scale globally, ethical, legal, and
					equity issues grow more complex. PDN, in partnership with{" "}
					<a
						href="https://www.linkedin.com/company/pha4ge/"
						className="text-primary hover:underline"
					>
						Public Health Alliance for Genomic Epidemiology (PHA4GE)
					</a>
					, has launched a practical, scenario-based tool to guide responsible
					decision-making in WWS.
				</p>
				<p>
					“We wanted to make it easier for people to ask the right questions and
					uphold ethical and legal standards from the start.” —{" "}
					<a
						href="https://www.linkedin.com/in/nicki-tiffin/"
						className="text-primary hover:underline"
					>
						Nicki Tiffin
					</a>
					, PDN co-PI,{" "}
					<a
						href="https://www.linkedin.com/company/south-african-national-bioinformatics-institute/"
						className="text-primary hover:underline"
					>
						South African National Bioinformatics Institute (SANBI)
					</a>
					,
					<a
						href="https://www.linkedin.com/company/uwc/"
						className="text-primary hover:underline"
					>
						University of the Western Cape
					</a>
				</p>
				<p>
					Useful for researchers, implementers, ethics committees, and funders
				</p>
				<p>Supports open data, best practices, and equitable benefit sharing</p>
				<p>Read more and explore the tool:</p>
				<p>
					<a
						href="https://lnkd.in/eqmWX3UZ"
						className="text-primary hover:underline"
					>
						https://lnkd.in/eqmWX3UZ
					</a>
				</p>
			</section>
		</>
	);
}
