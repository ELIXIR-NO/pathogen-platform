import ContributorsPanel from "@/components/contributors-panel";

export default function EnvironmentallyTransmittedPathogenPage() {
	return (
		<>
			<ContributorsPanel contributors={["erik"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					News Test
				</h2>
				<p>
					Just a test.
				</p>
				<p>
					Just a{" "}
					<a
						className="text-primary hover:underline"
						href="https://elixir.no"
					>
						link
					</a>
				</p>
			</section>
		</>
	);
}
