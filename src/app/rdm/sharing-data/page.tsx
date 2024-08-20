import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function DataSharingPage() {
	return (
		<div className="relative min-h-screen">
			<div className="fixed right-12 top-32 z-10">
				<div className="flex flex-col space-y-2">
					<ContributorsPanel contributors={["espen"]} />
				</div>
			</div>
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">Data Sharing in Biological and Medical Sciences</h2>
				<p>
					Data sharing in the biological and medical sciences refers to the practice of <strong>making research data available to other investigators or the public</strong>, often through databases, repositories, or other means. This practice is <strong>crucial</strong> for several reasons:
				</p>
				<ol className="list-decimal pl-5">
					<li>
						<strong>Advancing Scientific Research</strong>: Sharing data allows researchers to build on each others work, verify results, and conduct meta-analyses or pooled studies, which can lead to new discoveries and innovations faster than if each researcher worked in isolation.
					</li>
					<li>
						<strong>Transparency and Reproducibility</strong>: By making data available, other researchers can validate and reproduce findings. This enhances the credibility of the research and helps to eliminate biases or errors that might occur if data were kept private.
					</li>
					<li>
						<strong>Efficient Use of Resources</strong>: Data sharing avoids duplication of effort and maximizes the use of funding and resources. It allows scientists to use existing data to explore new questions without the cost and time associated with collecting new data sets.
					</li>
					<li>
						<strong>Ethical Responsibility</strong>: Participants in clinical trials and other studies often contribute their data with the understanding that it will be used to further knowledge and improve health outcomes. Sharing data respects their contribution by maximizing its utility.
					</li>
				</ol>
				<h3 className="text-2xl font-semibold">Where do I start?</h3>
				<p>
					The RDMkit provides a general introduction to <a
						className="text-primary hover:underline"
						href="https://rdmkit.elixir-europe.org/sharing"
					>
						data sharing
					</a>, and what you should think about when you <a
						className="text-primary hover:underline"
						href="https://rdmkit.elixir-europe.org/sharing"
					>
						consider sharing and publishing your data
					</a>.
				</p>
				<p>
					For advice and tailored support on using repositories, secure storage solutions, and standardizing data organization and documentation, contact the ELIXIR Norway <a
						className="text-primary hover:underline"
						href="https://elixir.no/helpdesk"
					>
						Helpdesk
					</a>.
					To get in touch, send an email to <a
						className="text-primary hover:underline"
						href="mailto:support@elixir.no"
					>
						support@elixir.no
					</a>.
				</p>
				<h3 className="text-2xl font-semibold">Importance of Participation by Clinical and Research Personnel</h3>
				<p>
					<strong>For data sharing</strong> to be <strong>effective</strong>, it is <strong>essential</strong> that <strong>all</strong> clinical and research personnel <strong>actively participate</strong>. This includes not only the generation and collection of high-quality, well-documented data but also the support and implementation of data sharing policies and practices. Personnel must be trained in the ethical and practical aspects of data sharing, including data privacy and security measures to protect sensitive information.
				</p>
			</section>
		</div>
	);
}
