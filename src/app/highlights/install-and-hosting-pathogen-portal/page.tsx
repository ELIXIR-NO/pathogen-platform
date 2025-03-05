import ContributorsPanel from "@/components/contributors-panel";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";

export default function EnterococcusPage() {
	return (
		<>
			<ContributorsPanel contributors={["dorota"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Installing and hosting a Pathogen Portal node
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/highlights/install-and-hosting-pathogen-portal/screen.png"
							alt="screen"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Screenshot by Scilifelab Data Centre{" "}
						<a
							href="https://demo-pathogens-portal.serve.scilifelab.se"
							className="text-primary hover:underline"
						>
							demo page
						</a>{" "}
					</HoverCardContent>
				</HoverCard>
				<p>
					The{" "}
					<a
						href="https://pathogendatanetwork.org/"
						className="text-primary hover:underline"
					>
						Pathogen Data Network (PDN)
					</a>{" "}
					har release the first version of the software repository and the
					resulting minimum website demo for setting up a Pathogen Portal Node.
				</p>
				<p>
					The aim is that institutes or countries with limited resources rapidly
					can deploy and maintain a “local” or national instance of a Pathogen
					Portal.
				</p>
				<p>
					The Portals main purpose is for discovery of local data and services
					to support data management, analysis, and sharing. They can be
					deployed in local language, and be interfaced with the central{" "}
					<a
						href="https://www.pathogensportal.org/"
						className="text-primary hover:underline"
					>
						Pathogens Portal
					</a>{" "}
					from the EBI (e.g. to allow data catalogues to be discoverable).
				</p>
				<p>
					A demo website for the portal can be visited here:{" "}
					<a
						href="https://demo-pathogens-portal.serve.scilifelab.se/"
						className="text-primary hover:underline"
					>
						https://demo-pathogens-portal.serve.scilifelab.se/
					</a>{" "}
					and and the GitHub repository is at
					<a
						href="https://github.com/ScilifelabDataCentre/node-pathogens-portal"
						className="text-primary hover:underline"
					>
						https://github.com/ScilifelabDataCentre/node-pathogens-portal
					</a>
					.
				</p>
			</section>
		</>
	);
}
