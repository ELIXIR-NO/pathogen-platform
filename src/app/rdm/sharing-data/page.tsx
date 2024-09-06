import ContributorsPanel from "@/components/contributors-panel";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";

const references: Reference[] = [
	{
		referenceNumber: 1,
		reference:
			"Wilson SL, Way GP, Bittremieux W, Armache JP, Haendel MA, Hoffman MM. Sharing biological data: why, when, and how. FEBS Lett. 2021 Apr;595(7):847-863. doi: 10.1002/1873-3468.14067. PMID: 33843054;",
		pmcid: "PMC10390076.",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10390076/",
	},
];

export default function DataSharingPage() {
	return (
		<>
			<ContributorsPanel contributors={["espen"]} />
			<ReferencesPanel references={references} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Data Sharing in Biological and Medical Sciences
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/rdm/sharing-data/page-image.png"
							alt="Page image"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Credit: Adobe Stock image edited by Karen Arnott
					</HoverCardContent>
				</HoverCard>
				<p>
					Data sharing in the biological and medical sciences refers to the
					practice of{" "}
					<strong>
						making research data available to other investigators or the public
					</strong>
					(<ReferenceOneHoverCard />) , often through databases, repositories,
					or other means. This practice is <strong>crucial</strong> for several
					reasons:
				</p>
				<ol className="list-decimal pl-5">
					<li>
						<strong>Advancing Scientific Research</strong>: Sharing data allows
						researchers to build on each others work, verify results, and
						conduct meta-analyses or pooled studies, which can lead to new
						discoveries and innovations faster than if each researcher worked in
						isolation.
					</li>
					<li>
						<strong>Transparency and Reproducibility</strong>: By making data
						available, other researchers can validate and reproduce findings.
						This enhances the credibility of the research and helps to eliminate
						biases or errors that might occur if data were kept private.
					</li>
					<li>
						<strong>Efficient Use of Resources</strong>: Data sharing avoids
						duplication of effort and maximizes the use of funding and
						resources. It allows scientists to use existing data to explore new
						questions without the cost and time associated with collecting new
						data sets.
					</li>
					<li>
						<strong>Ethical Responsibility</strong>: Participants in clinical
						trials and other studies often contribute their data with the
						understanding that it will be used to further knowledge and improve
						health outcomes. Sharing data respects their contribution by
						maximizing its utility.
					</li>
				</ol>
				<h3 className="text-2xl font-semibold">Where do I start?</h3>
				<ul className="list-disc pl-5">
					<li>
						The <a href="https://rdmkit.elixir-europe.org/sharing">RDMkit</a>{" "}
						provides a general introduction to data sharing, and what you should
						think about when you consider sharing and publishing your data.
					</li>
					<li>
						The{" "}
						<a href="https://www.regjeringen.no/en/dokumenter/one-digital-public-sector/id2653874/?ch=4">
							digital strategy for data sharing
						</a>{" "}
						from the Norwegian Government
					</li>
					<li>
						The{" "}
						<a href="https://www.forskningsradet.no/en/research-policy-strategy/open-science/research-data/">
							Research Council of Norway&apos;s policy
						</a>{" "}
						for open access to research data.
					</li>
					<li>
						<a href="https://www.nature.com/sdata/policies/repositories#general">
							Nature Scientific Data
						</a>{" "}
						has a guide for Recommended Data Repositories
					</li>
					<li>
						There are tools that can help you select an appropriate licence for
						your data like{" "}
						<a href="https://ufal.github.io/public-license-selector/">
							The Public License Selector
						</a>{" "}
						or <a href="https://choosealicense.com/">ChooseALicense.com</a>
					</li>
				</ul>
				<h3 className="text-2xl font-semibold">
					Importance of Participation by Clinical and Research Personnel
				</h3>
				<p>
					<strong>For data sharing</strong> to be <strong>effective</strong>, it
					is <strong>essential</strong> that <strong>all</strong> clinical and
					research personnel <strong>actively participate</strong>. This
					includes not only the generation and collection of high-quality,
					well-documented data but also the support and implementation of data
					sharing policies and practices. Personnel must be trained in the
					ethical and practical aspects of data sharing, including data privacy
					and security measures to protect sensitive information.
				</p>
				<p className="mx-auto text-center text-3xl font-bold">
					&quot;The problem is not really technical&quot;
				</p>
				<p className="mx-auto italic">Lancet Oncol 2011;12:933</p>
			</section>
		</>
	);
}

function ReferenceOneHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={1}
			paper="Sharing biological data: why, when, and how. FEBS Lett. 2021 Apr;595(7):847-863."
			pmcid="PMC10390076"
			href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10390076/"
		/>
	);
}

function ReferenceHoverCard({
	refNumber,
	paper,
	pmcid,
	href,
}: {
	refNumber: number;
	paper: string;
	pmcid: string;
	href: string;
}) {
	return (
		<HoverCard>
			<HoverCardTrigger className="cursor-pointer text-primary hover:underline">
				{refNumber}
			</HoverCardTrigger>
			<HoverCardContent className="text-small w-[500px] text-justify">
				{paper};PMCID:
				<a href={href} className="text-primary hover:underline">
					{pmcid}
				</a>
			</HoverCardContent>
		</HoverCard>
	);
}
