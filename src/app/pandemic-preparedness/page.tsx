import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function PandemicPreparednessPage() {
	return (
		<>
			<ContributorsPanel contributors={["erik"]} />
			<section className="flex flex-col space-y-6 p-2 text-justify">
				<h1 className="text-3xl font-bold">About pandemic preparedness</h1>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/pandemic-preparedness/about.jpg"
							alt="A photo with 'Don't panic' text"
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							href="https://unsplash.com/@ashishjha?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Avinash Kumar
						</a>{" "}
						on{" "}
						<a
							href="https://unsplash.com/photos/white-and-red-love-print-wall-decor-NgI8hfw7_9Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					Pandemic preparedness refers to the comprehensive planning and
					strategic actions taken to ensure that the community is ready to
					effectively respond to a widespread outbreak of a contagious disease.
					This involves several critical components such as:
				</p>
				<ul className="ml-6 flex list-disc flex-col space-y-3">
					<li>Surveillance and monitoring</li>
					<li>Healthcare and research infrastructure</li>
					<li>Public health policies and emergency response plans</li>
					<li>Vaccination and treatment</li>
					<li>Community engagement</li>
					<li>Research and innovation</li>
				</ul>
			</section>
		</>
	);
}
