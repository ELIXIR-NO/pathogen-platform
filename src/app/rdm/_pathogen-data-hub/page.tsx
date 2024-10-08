import ContributorsPanel from "@/components/contributors-panel";

export default function PathogenDataHubPage() {
	return (
		<>
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["erik"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Pathogen Data Hub</h2>
				<p>
					ELIXIR Norway, together with the National Institute of Public Health,
					plan to develop a secure, user-friendly infrastructure for the
					storage, sharing, and archiving of FAIR pathogen data.
				</p>
				<p>
					In operation, the Norwegian Pathogen Data Hub (NPDH) will be a secure
					One-health online platform that enables near real-time sharing under
					controlled access of pathogen sequencing data and their associated
					contextual metadata. The infrastructure will also provide tools for
					researchers to analyse and manage their data and metadata effectively,
					and implement robust data-access policies to protect unpublished
					research while promoting open access to published data.
				</p>
				<h3 className="text-2xl font-semibold">What is a Pathogen Data Hub?</h3>
				<p>
					Pathogen Data Hubs are a set of tools to enable sharing, analysis,
					visualisation and presentation of public or pre-publication private
					data. It facilitates the seamless collaboration between researchers,
					healthcare providers, and public health officials.
				</p>
				<h3 className="text-2xl font-semibold">The SARS-CoV-2 Data Hub</h3>
				<p>
					As a response to the Covid-19 pandemic, the COVID-19 Data Platform was
					launched in 2020. The SARS-CoV-2 Data Hub is one of the three main
					components of the platform. It is a toolbox for working with viral
					sequence data to support management, sharing, analysis and
					interpretation.
				</p>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.covid19dataportal.org/data-hubs"
					>
						COVID-19 Data Portal - accelerating scientific research through data
					</a>
				</p>
				<h3 className="text-2xl font-semibold">Pathogen Data Hubs</h3>
				<p>
					The EU HORIZON 2020 initiative{" "}
					<a
						className="text-primary hover:underline"
						href="http://www.compare-europe.eu/"
					>
						COMPARE
					</a>{" "}
					is an informatics platform that includes workflows for structured data
					storage, managing and pre-publication sharing of pathogen sequencing
					data and its analysis interpretations.
				</p>
				<p>
					<a
						className="text-primary hover:underline"
						href="https://www.pathogensportal.org/datahubs"
					>
						https://www.pathogensportal.org/datahubs
					</a>
				</p>
			</section>
		</>
	);
}
