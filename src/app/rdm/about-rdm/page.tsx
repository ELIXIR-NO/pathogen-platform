import ContributorsPanel from "@/components/contributors-panel";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import CentralImage from "@/components/central-image";
import ReferencesPanel, { Reference } from "@/components/references-panel";
import Link from "next/link";

const references: Reference[] = [
	{
		referenceNumber: 1,
		reference:
			"Wilkinson MD, et al. The FAIR Guiding Principles for scientific data management and stewardship. Sci Data. 2016 Mar 15;3:160018. doi: 10.1038/sdata.2016.18. Erratum in: Sci Data. 2019 Mar 19;6(1):6. doi: 10.1038/s41597-019-0009-6. PMID: 26978244;",
		pmcid: "PMC4792175",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4792175/",
	},
	{
		referenceNumber: 2,
		reference:
			"Karsten Kryger Hansen, Mareike Buss, & Lea Sztuk Haahr. (2018). A FAIRy tale (p. 40). Zenodo.",
		pmcid: "",
		link: "https://doi.org/10.5281/zenodo.2248200",
	},
	{
		referenceNumber: 3,
		reference:
			"European Commission: Directorate-General for Research and Innovation, Cost-benefit analysis for FAIR research data – Cost of not having FAIR research data, Publications Office, 2018",
		pmcid: "",
		link: "https://data.europa.eu/doi/10.2777/02999",
	},
];

export default function AboutRdmPage() {
	return (
		<>
			<ContributorsPanel contributors={["espen"]} />
			<ReferencesPanel references={references} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					About Research Data Management (RDM)
				</h2>
				<h3 className="text-2xl font-bold">
					From Data to Discovery: The Complex Path of Scientific Research
				</h3>
				<p>
					Research projects are complex and generate a variety of information
					types, illustrating the detailed and careful nature required in such
					work. The process initiates by collecting raw data from experiments or
					observations and culminates in detailed final reports that elucidate
					the findings and their significance. Along this journey, raw data is
					transformed into processed data that is more comprehensible,
					statistical methods are employed to scrutinize the data, and every
					aspect of the research—from the tools utilized to ethical approvals
					and adherence to regulations—is meticulously documented.
				</p>
				<p>
					Research results may encompass academic papers, presentations,
					patents, and collaborative agreements, all necessitating careful
					planning and detailed records. The extensive range of information not
					only underscores the complexity of research projects but also ensures
					that the outcomes are verifiable, reusable, and comprehensible to
					others, thereby contributing to the global body of knowledge.
				</p>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/rdm/about-rdm/overwhelm.png"
							alt="Cartoon depicting begin overwhelmed"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						CC BY 2.5 Denmark license{" "}
						<a
							href="http://www.digitalbevaring.dk/"
							className="text-primary hover:underline"
						>
							www.digitalbevaring.dk
						</a>
						. Illustration by Jørgen Stamp.
					</HoverCardContent>
				</HoverCard>
				<h3 className="text-2xl font-bold">
					The importance of Research Data Management
				</h3>
				<p>
					By following good practices in Research Data Management (RDM), you can
					organize your research findings better. This makes it simpler for
					yourself and others to use and reuse your data later on. It&apos;s
					generally best to keep research results as open as possible and easy
					to find, access, use, and reuse, by following a set of guidelines
					called the FAIR principles.
				</p>
				<h3 className="text-2xl font-bold">
					The Hidden Barrier to AI Medical Breakthroughs: Why Data Management is
					Key
				</h3>
				<p>
					In a time when AI is expected to greatly improve medicine and boost
					scientific breakthroughs, it&apos;s crucial to understand that
					effective data management is key. For AI to fully realize its
					potential and make safe, data-driven decisions, managing data
					according to FAIR principles is essential. Whether it&apos;s human,
					animal, or environmental health, AI in healthcare and scientific
					research depends on access to large, well-organized, and structured
					datasets. AI algorithms require high-quality data to develop accurate
					and dependable models. Without proper data management, the data might
					be unreliable or unusable, which could make AI tools less effective
					and potentially endanger patient safety and the integrity of
					scientific research.
				</p>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/rdm/about-rdm/robot-handshake-human.png"
							alt="robot-human handshake"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Designed by{" "}
						<a
							href="https://www.freepik.com/free-photo/robot-handshake-human-background-artificial-intelligence-digital-transformation_17850420.htm#query=ai%20human%20handshake&position=2&from_view=keyword&track=ais_hybrid&uuid=9d79f6e1-f5bd-42da-b589-df7452562b7e"
							className="text-primary hover:underline"
						>
							Freep!k
						</a>
					</HoverCardContent>
				</HoverCard>
				<h3 className="text-2xl font-bold">FAIR RDM</h3>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage src="/rdm/about-rdm/image.avif" alt="comic strip" />
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Image from{" "}
						<a
							href="https://open-science-training-handbook.gitbook.io/book"
							className="text-primary hover:underline"
						>
							https://open-science-training-handbook.gitbook.io/book
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					FAIR data management refers to a set of principles that guide
					researchers and other experts on how to manage data in a way that
					makes it easy for others to access, understand, and reuse. The term
					&quot;FAIR&quot; stands for Findable, Accessible, Interoperable, and
					Reusable. These ideas were first shared in a 2016 article called The
					FAIR Guiding Principles for scientific data management and stewardship
					by Wilkinson and others(
					<ReferenceOneHoverCard />
					). Since then, these principles have become popular in many science
					fields. To learn more about how to apply these principles, check out
					the Danish e-Infrastructure Consortium’s page FAIR for Beginners (
					<ReferenceTwoHoverCard />) and the{" "}
					<a
						href="https://www.go-fair.org/fair-principles/"
						className="text-primary hover:underline"
					>
						GO FAIR initiative&apos;s website
					</a>{" "}
					or read more about the cost of not having FAIR data (
					<ReferenceThreeHoverCard />
					).
				</p>
				<h3 className="text-2xl font-bold">
					Understanding the FAIR Principles
				</h3>
				<ol className="list-decimal pl-5">
					<li>
						<span className="font-bold">Findable:</span> First, make sure that
						both people and computers can easily locate the data. This involves
						giving each set of data a unique and lasting name (a persistent
						identifier) and providing detailed information (rich metadata)
						describing the data.
					</li>
					<li>
						<span className="font-bold">Accessible:</span> After finding the
						data, it should be easy to understand how to get it. This means you
						can retrieve the data using its unique name through a standard
						method that is open and free for everyone. Also, the information
						about the data should always be available, even if the actual data
						is not.
					</li>
					<li>
						<span className="font-bold">Interoperable:</span> Data should work
						well with other data and be easy to use with different programs or
						systems for analysis and storage. This requires using a widely
						accepted and understandable format for organizing the data.
					</li>
					<li>
						<span className="font-bold">Reusable:</span> The main aim is for the
						data to be easily used again with little effort. This means having
						clear rules (data usage licenses) on how the data can be used and
						providing a detailed history of the data (data provenance) to ensure
						it can be accurately used or combined in new ways.
					</li>
				</ol>
				<h3 className="text-2xl font-bold">
					Key Points on Handling Pathogen Data
				</h3>
				<p>
					Managing the genomic data of harmful microorganisms can be different
					from dealing with human or environmental data. Human data is kept
					private, and environmental data is used for conservation. However,
					data on harmful microbes is vital for scientific research and medical
					practice.
				</p>
				<p>
					This data needs to be easily accessible and compatible with other data
					for quick public health responses and controlling disease outbreaks.
					It also has to be carefully recorded and reusable to meet the strict
					standards of scientific research.
				</p>
				<h4 className="text-xl font-bold">
					Importance of Pathogen Research Across Various Fields
				</h4>
				<p>
					Studying microbial pathogens is crucial in many medical fields like
					Clinical Research, Basic Research, Surveillance, and more. Each field
					aims to improve our understanding and management of diseases.
				</p>
				<ol className="list-decimal pl-5">
					<li>
						<span className="font-bold">Clinical Research:</span> Tests new
						treatments on patients.
					</li>
					<li>
						<span className="font-bold">Basic Science:</span> Studies the basic
						properties of germs.
					</li>
					<li>
						<span className="font-bold">Surveillance:</span> Collects ongoing
						health data for public health improvements.
					</li>
					<li>
						<span className="font-bold">Veterinary Research:</span> Focuses on
						diseases that can transfer from animals to humans.
					</li>
					<li>
						<span className="font-bold">Plant Health and Biosafety:</span>{" "}
						Ensures the health of plants and ecological balance.
					</li>
				</ol>
				<p>
					These research areas are part of the{" "}
					<Link href="/one-health">One Health</Link> concept, linking the health
					of people, animals, and the environment. Each area has specific data
					management needs due to different rules and resources.
				</p>
				<HoverCard>
					<HoverCardTrigger asChild>
						<CentralImage
							src="/rdm/about-rdm/fmicb.jpg"
							alt="Pthogens in our environment"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Image from{" "}
						<a
							href="https://doi.org/10.3389/fmicb.2024.1370818"
							className="text-primary hover:underline"
						>
							https://doi.org/10.3389/fmicb.2024.1370818
						</a>
					</HoverCardContent>
				</HoverCard>
				<h3 className="text-2xl font-bold">
					FAIR Principles for Managing Genomics Data of Disease-Causing
					Microorganisms
				</h3>
				<p>
					Understanding and managing the genomics data of disease-causing
					microorganisms is crucial for studying diseases, tracking outbreaks,
					and developing treatments. However, because this data can be linked to
					individuals, it must be handled carefully to protect privacy while
					still supporting scientific progress. The FAIR data management
					practices offer guidelines to ensure data is useful, accessible, and
					secure.
				</p>
				<p>
					Findability in both contexts involves detailed metadata and
					standardized data indexing. However, pathogenic genomics data often
					requires integration with epidemiological and clinical data to be
					fully effective, necessitating more complex metadata schemas compared
					to those generally used in human genomics.
				</p>
				<p>
					Accessibility highlights more stark differences; human genomics data
					which, in itself, is always personal data, is heavily regulated to
					protect individual privacy, often requiring controlled access
					environments. In contrast, pathogenic data, which may contain human
					data depending on the method of sampling and wet lab procedure, is
					primarily governed by considerations of biosecurity and public health
					urgency, which can sometimes necessitate more open access to support
					rapid, global response efforts during outbreaks.
				</p>
				<p>
					Interoperability in human genomics data benefits from well-established
					international standards, such as those from the Global Alliance for
					Genomics and Health (GA4GH). Pathogenic genomics, while also utilizing
					these standards, must additionally align with public health databases
					and bioinformatics tools that are specifically designed for infectious
					disease surveillance and control, demanding a broader, more versatile
					approach to data integration.
				</p>
				<p>
					Reusability of data is critical in both fields but comes with
					different expectations and requirements. Human genomics data reuse
					must be tightly coupled with consent and ethical considerations, often
					limiting the scope of future research. Pathogenic genomics data, on
					the other hand, is primarily reused for broader public health research
					and policy-making, requiring it to be highly adaptable and easily
					integrated with diverse data types.
				</p>
				<p>
					To effectively manage pathogenic microorganisms&apos; genomics data
					according to FAIR principles, researchers and other experts can
					utilize a suite of resources provided by ELIXIR and other actors in
					Norway, which facilitates the application of these principles. You can
					read more about them{" "}
					<Link
						href="/rdm/where-do-i-start"
						className="text-primary hover:underline"
					>
						here
					</Link>
					.
				</p>
			</section>
		</>
	);
}

function ReferenceOneHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={1}
			paper="The FAIR Guiding Principles for scientific data management and stewardship. Sci Data. 2016 Mar 15;3:160018"
			href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4792175/"
		/>
	);
}

function ReferenceTwoHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={2}
			paper="Karsten Kryger Hansen, Mareike Buss, & Lea Sztuk Haahr. (2018). A FAIRy tale (p. 40). Zenodo."
			href="https://doi.org/10.5281/zenodo.2248200"
		/>
	);
}

function ReferenceThreeHoverCard() {
	return (
		<ReferenceHoverCard
			refNumber={3}
			paper="European Commission: Directorate-General for Research and Innovation, Cost-benefit analysis for FAIR research data – Cost of not having FAIR research data, Publications Office, 2018"
			href="https://data.europa.eu/doi/10.2777/02999"
		/>
	);
}

function ReferenceHoverCard({
	refNumber,
	paper,
	href,
}: {
	refNumber: number;
	paper: string;
	href: string;
}) {
	return (
		<HoverCard>
			<HoverCardTrigger className="cursor-pointer text-primary hover:underline">
				{refNumber}
			</HoverCardTrigger>
			<HoverCardContent className="text-small w-[fit] text-wrap text-left">
				{paper};
				<a href={href} className="text-primary hover:underline">
					{new URL(href).hostname}
				</a>
			</HoverCardContent>
		</HoverCard>
	);
}
