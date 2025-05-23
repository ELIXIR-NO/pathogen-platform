import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";

export default function EnterococcusPage() {
	return (
		<>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Norwegian Microbial Data Platform
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/highlights/norwegian-microbial-data-platform/data-platform.png"
							alt="screen"
						/>
					</HoverCardTrigger>
				</HoverCard>
				<p>
					<a
						href="https://www.elixir.no/"
						className="text-primary hover:underline"
					>
						ELIXIR Norway
					</a>{" "}
					together with the new partners{" "}
					<a
						href="https://www.fhi.no/"
						className="text-primary hover:underline"
					>
						FHI
					</a>{" "}
					and{" "}
					<a
						href="https://www.vetinst.no/"
						className="text-primary hover:underline"
					>
						VI
					</a>{" "}
					have received{" "}
					<a
						href="https://www.forskningsradet.no/"
						className="text-primary hover:underline"
					>
						NFR
					</a>{" "}
					funds to build the Norwegian Microbial Data Platform (NMDP). The
					projects started in 2025 and will end in 2029.
				</p>
				<p>
					NMDP will become an infrastructure for the storage, sharing and
					archiving of FAIR pathogen and infectious disease data.
				</p>
				<p>
					The platform is primarily for research data and secondary use of
					surveillance data, but is open for surveillance data and
					non-pathogenic microbial data.
				</p>
				<p>
					The platform will consist of two major components: a Data Portal and a
					Data Hub. Data is stored and shared in an access controlled system in
					the data hub. Aggregated information about data in the data hub can be
					discovered in the data portal prior to public release of the data.
				</p>
			</section>
		</>
	);
}
