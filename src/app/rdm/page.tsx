import ContributorsPanel from "@/components/contributors-panel";

export default function ResearchDataManagementPage() {
	return (
		<>
			<ContributorsPanel contributors={["espen"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">About Research Data Management</h2>
				<p>
					<span className="font-bold">Research Data Management (RDM)</span> is
					about how we handle, organize, and store not just the results and
					data, but also software code from research projects. This includes
					both scientific and clinical studies. We do this to make sure the
					information can be easily accessed, reused, and verified for accuracy
					in the future, without relying on specific people. RDM is crucial for
					both scientific and clinical research.
				</p>
				<p>
					On these pages, you&apos;ll find details on how to get direct support
					or general guidance for RDM, especially for data related to infectious
					diseases and scientific research in Norway. Below, there&apos;s an
					introductory video produced by{" "}
					<span className="font-bold">ELIXIR</span>.
				</p>
				<iframe
					width="600"
					height="338"
					src="https://www.youtube.com/embed/S7HfUe1hWcg"
					title="ELIXIR CONVERGE - The why of research data management"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="mx-auto"
				></iframe>
				<h3 className="text-2xl font-bold">Support and Infrastructure</h3>
				<p>
					For researchers in Norway, direct support and infrastructure are
					provided by ELIXIR Norway, including the{" "}
					<a
						href="https://elixir.no/helpdesk"
						className="text-primary hover:underline"
					>
						ELIXIR Norway Help Desk
					</a>
					, The
					<a
						href="https://norway.dsw.elixir-europe.org/wizard/knowledge-models/elixir.no:lifesciences-elixir-norway:latest/preview"
						className="text-primary hover:underline"
					>
						Norwegian Data Stewardship Wizard
					</a>{" "}
					and the{" "}
					<a
						href="https://elixir.no/Services-bak/nels"
						className="text-primary hover:underline"
					>
						Norwegian e-Infrastructure for Life Sciences (NeLS)
					</a>
					. These resources support the creation of Data Management Plans (DMPs)
					and ensure that data management practices align with national and
					European regulations.
				</p>
				<h3 className="text-2xl font-bold">Get Help Easily</h3>
				<p>
					For advice and personalized help with your disease research, reach out
					to our Helpdesk. Just send us an email to{" "}
					<a
						href="mailto:support@elixir.no"
						className="text-primary hover:underline"
					>
						support@elixir.no
					</a>
					. Our help desk is staffed by experts in many areas of biology and
					computing. They can offer both quick tips and in-depth support for
					studying pathogenic microbes.
				</p>
			</section>
		</>
	);
}
