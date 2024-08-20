import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";

export default function ResearchDataManagementPage() {
    return (
        <div className="relative min-h-screen">
            <div className="fixed right-12 top-32 z-10">
                <div className="flex flex-col space-y-2">
                    <ContributorsPanel contributors={["espen"]} />
                </div>
            </div>
            <section className="flex flex-col space-y-6 text-justify">
                <h2 className="text-3xl font-bold">About Research Data Management</h2>

                <h3 className="text-2xl font-bold">From Data to Discovery: The Complex Path of Scientific Research</h3>
                <p>
                    Research projects are complex and produce many different types of information, showing how detailed and careful the work must be. The process starts with collecting raw data from experiments or observations and ends with detailed final reports that explain the results and their importance. Along the way, raw data is turned into processed data thats easier to understand, statistical methods are used to analyze the data, and every part of the research—from the tools used to ethical approvals and following rules—is documented. Research results can include academic papers, presentations, patents, and agreements for working together, all of which need careful planning and detailed records. The wide range of information not only highlights how complex research projects are but also makes sure that the results can be checked, used again, and understood by others, adding to the overall pool of knowledge.
                </p>

                <h3 className="text-2xl font-bold">The Importance of RDM</h3>
                <p>
                    By following good practices in RDM, you can manage your research results more effectively, making it easier for others to use them later. Generally, its best to make research results as open <strong>as possible</strong> and easy to find, access, use, and reuse, following what are called the <strong>FAIR principles</strong>. To understand more about making research open and FAIR, you can check out{" "}
                    <a className="text-primary hover:underline" href="https://www.regjeringen.no/no/dokumenter/nasjonale-mal-og-retningslinjer-for-apen-tilgang-til-vitenskapelige-artikler/id2567591/">
                        Norways national guidelines on promoting open science
                    </a>{" "}
                    and a detailed explanation by{" "}
                    <a className="text-primary hover:underline" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4792175/pdf/sdata201618.pdf">
                        Wilkinson et al. (2016)
                    </a>.
                </p>

                <h3 className="text-2xl font-bold">The Hidden Barrier to AI Medical Breakthroughs: Why Data Management is Key</h3>
                <p>
                    In a time when AI is expected to greatly improve medicine and boost scientific breakthroughs, its important to recognize that managing data well is essential. For AI to reach its full potential and to safely make decisions based on data, we need proper FAIR data management. Whether its for human, animal, or environmental health, AI in healthcare and scientific research relies on having access to large, well-organized, and structured datasets. AI algorithms need high-quality data to build accurate and reliable models. Without good data management, the data may not be reliable or usable, making AI tools less effective and possibly risking patient safety and the validity of scientific findings.
                </p>

                <h3 className="text-2xl font-bold">FAIR RDM</h3>
                <p>
                    FAIR data management refers to a set of principles that guide researchers and other professionals on how to manage data in a way that makes it easy for others to access, understand, and reuse. The acronym <strong>"FAIR"</strong> stands for <strong>Findable</strong>, <strong>Accessible</strong>, <strong>Interoperable</strong>, and <strong>Reusable</strong>. These principles were first published in a 2016 Scientific Data paper, <a className="text-primary hover:underline" href="https://www.nature.com/articles/sdata201618">
                        The FAIR Guiding Principles for scientific data management and stewardship
                    </a> by Wilkinson et al. and have since been widely adopted across various scientific disciplines. For a deeper dive into how to use these principles, you can also visit the <a className="text-primary hover:underline" href="https://www.go-fair.org/fair-principles/">
                        GO FAIR initiatives website
                    </a>.
                </p>

                <h3 className="text-2xl font-bold">Understanding the FAIR Principles</h3>
                <ul className="list-disc pl-5">
                    <li>
                        <strong>Findable</strong>: The first step is to ensure that data can be easily found by both humans and computers. This involves assigning a <strong>unique and persistent identifier</strong> to each dataset and providing <strong>rich metadata</strong> (data about data) that describe the dataset effectively.
                    </li>
                    <li>
                        <strong>Accessible</strong>: Once the data is found, it should be accessible. This means the data should be <strong>retrievable by its identifier</strong> using a standardized communications protocol which is open, free, and universally implementable. Moreover, <strong>metadata</strong> <strong>should always be accessible</strong>, even when the data itself is no longer available.
                    </li>
                    <li>
                        <strong>Interoperable</strong>: Data usually needs to be integrated with other data. In addition, it should be easy to interoperate with applications or workflows for analysis, storage, and processing. This requires that the data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
                    </li>
                    <li>
                        <strong>Reusable</strong>: The ultimate goal of FAIR is that data can be reused readily and with minimal effort. This requires clear and accessible data usage licenses and accurate data provenance (history of the data) to ensure that the data is well-described so that it can be replicated or combined in different settings.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold">Pathogen Data Are Special</h3>
                <p>
                    The adaptation of FAIR principles to the genomic data of pathogenic microorganisms involves specific considerations that distinguish it significantly from the management of human genomic data and biodiversity data management. Unlike human data, which is heavily guarded due to privacy concerns, and biodiversity data, which often focuses on conservation and ecological studies, pathogenic microorganisms data management is critical for both scientific research and clinical practice. This type of data management not only supports scientific research but also heavily supports clinical and public health responses to infectious disease threats. The urgency of public health responses demands that this data must be rapidly accessible and interoperable to facilitate timely decision-making and outbreak control. At the same time, the rigorous standards of scientific research require this data to be meticulously documented and reusable under ethical and legal frameworks. This dual demand creates unique challenges in managing pathogenic microorganisms genomic data, as it must be handled in a way that respects both the immediate needs of clinical settings and the detailed, methodical requirements of scientific inquiry.
                </p>

                <h3 className="text-2xl font-bold">Pathogen Research Integrates Important Research Domains</h3>
                <p>
                    Research on microbial pathogens plays a pivotal role across several critical medical domains such as Clinical Research, Scientific Research, Surveillance, Surveillance Research, and Veterinary Research, each contributing uniquely to our understanding and management of infectious diseases. These efforts not only aim to improve clinical outcomes and deepen scientific knowledge but also enhance public health strategies through continuous data monitoring and innovative research.
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Clinical Research</strong> focuses on understanding and improving clinical outcomes in humans, often involving controlled environments and specific patient groups to test hypotheses about health and disease treatments.</li>
                    <li><strong>Scientific Research</strong> in the context of pathogen genomics often explores fundamental biological mechanisms and evolutionary aspects of pathogens, which may not have immediate clinical applications but contribute to the broader scientific understanding and serves as an idea-generator and pool of solutions potentially applicable in clinical research.</li>
                    <li><strong>Surveillance</strong> involves the ongoing collection, analysis, and interpretation of health-related data essential for planning, implementing, and evaluating public health practice.</li>
                    <li><strong>Surveillance Research</strong> combines elements of surveillance and research to enhance disease prevention strategies and control measures, often leading to direct public health interventions.</li>
                    <li><strong>Veterinary Research</strong> is similar to clinical research but focuses on diseases in animals; crucial for zoonotic diseases that can transfer from animals to humans.</li>
                </ul>
                <p>
                    These different facets of research and practice are united under the One Health domain, which recognizes the interconnectedness of human, animal, and environmental health. Each domain, while overlapping in overall goals, often is subject to different legal and financial frameworks, necessitating tailored data management approaches.
                </p>

                <h3 className="text-2xl font-bold">FAIR Principles in Human Pathogenic Microorganisms Genomics Data</h3>
                <p>
                    Genomics data from pathogenic microorganisms are needed for the understanding of disease mechanisms, tracking outbreaks, and developing treatments. However, the sensitive nature of this data, especially when linked to human hosts, requires stringent management to protect patient privacy while enabling scientific advancement. FAIR data management practices provide guidelines that help balance these needs, ensuring that data are not only useful and accessible but also protected from misuse.
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Findability</strong> in both contexts involves detailed metadata and standardized data indexing. However, pathogenic genomics data often requires integration with epidemiological and clinical data to be fully effective, necessitating more complex metadata schemas compared to those generally used in human genomics.</li>
                    <li><strong>Accessibility</strong> highlights more stark differences; human genomics data which, in itself, is always personal data, is heavily regulated to protect individual privacy, often requiring controlled access environments. In contrast, pathogenic data, which may contain human data depending on the method of sampling and wet lab procedure, is primarily governed by considerations of biosecurity and public health urgency, which can sometimes necessitate more open access to support rapid, global response efforts during outbreaks.</li>
                    <li><strong>Interoperability</strong> in human genomics data benefits from well-established international standards, such as those from the Global Alliance for Genomics and Health (GA4GH). Pathogenic genomics, while also utilizing these standards, must additionally align with public health databases and bioinformatics tools that are specifically designed for infectious disease surveillance and control, demanding a broader, more versatile approach to data integration.</li>
                    <li><strong>Reusability</strong> of data is critical in both fields but comes with different expectations and requirements. Human genomics data reuse must be tightly coupled with consent and ethical considerations, often limiting the scope of future research. Pathogenic genomics data, on the other hand, is primarily reused for broader public health research and policy-making, requiring it to be highly adaptable and easily integrated with diverse data types.</li>
                </ul>
                <p>
                    To effectively manage pathogenic microorganisms genomics data according to FAIR principles, researchers can utilize a suite of resources provided by ELIXIR and other actors in Norway, which facilitate the application of these principles.
                </p>

                <h3 className="text-2xl font-bold">Where Do I Start?</h3>
                <ul className="list-disc pl-5">
                    <li>
                        <strong>Domain and Task-Specific Instructions</strong>:
                        <ul className="list-disc pl-5">
                            <li>
                                The <a className="text-primary hover:underline" href="https://rdmkit.elixir-europe.org/human_pathogen_genomics">
                                    RDMkit for human pathogen genomics
                                </a> provides general guidelines tailored to the needs of pathogen genomics data management.
                            </li>
                            <li>
                                On a national level, the <strong>Infectious Disease Tool Kit (IDTK)</strong> provides a very good overview and <a className="text-primary hover:underline" href="https://www.infectious-diseases-toolkit.org/national-resources/norway#domain-specific-infrastructures-or-resources">
                                    general discussion of infectious disease research in Norway
                                </a> and provides information on relevant health authorities and initiatives.
                            </li>
                            <li>
                                The <a className="text-primary hover:underline" href="https://rdmkit.elixir-europe.org/no_resources">
                                    Norwegian resources pages
                                </a> in the RDMkit provides a general overview of the data management resources in Norway.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Data Sensitivity and Security</strong>:
                        <ul className="list-disc pl-5">
                            <li>
                                Guidance on handling sensitive data is available through the <a className="text-primary hover:underline" href="https://rdmkit.elixir-europe.org/data_sensitivity">
                                    Data Sensitivity
                                </a> and <a className="text-primary hover:underline" href="https://rdmkit.elixir-europe.org/data_security">
                                    Data Protection
                                </a> pages.
                            </li>
                            <li>
                                The <a className="text-primary hover:underline" href="https://faircookbook.elixir-europe.org/content/recipes/reusability/expressing-data-use.html">
                                    FAIR Cookbook
                                </a> contains specific recipes for managing sensitive data use conditions.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Task-Specific Instructions</strong>:
                        <ul className="list-disc pl-5">
                            <li>
                                <a className="text-primary hover:underline" href="https://faircookbook.elixir-europe.org/content/home.html">
                                    FAIR Cookbook
                                </a>: Offers <a className="text-primary hover:underline" href="https://faircookbook.elixir-europe.org/content/home.html">step-by-step instructions</a> for applying FAIR principles in practical, task-oriented ways.
                            </li>
                            <li>
                                <a className="text-primary hover:underline" href="https://fairsharing.org/search?q=pathogen">
                                    Metadata Standards and Repositories
                                </a>: You can <a className="text-primary hover:underline" href="https://fairsharing.org/search?q=pathogen">browse relevant standards</a> at FAIRsharing to ensure interoperability and reusability of data.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Training and Tools</strong>:
                        <ul className="list-disc pl-5">
                            <li>
                                The <a className="text-primary hover:underline" href="https://tess.elixir-europe.org/search?q=pathogen">
                                    Training eSupport System (TeSS)
                                </a> is a website where you can find training materials, learning events, and courses.
                            </li>
                            <li>
                                <a className="text-primary hover:underline" href="https://bio.tools/">
                                    Bio.Tools
                                </a> provides a comprehensive catalogue of educational resources and bioinformatics <a className="text-primary hover:underline" href="https://bio.tools/t?page=1&q=pathogen&sort=score">
                                    tools tailored to pathogen genomics
                                </a>.
                            </li>
                            <li>
                                For bioinformaticians, it might be worth checking out the <a className="text-primary hover:underline" href="https://galaxyproject.org/community/sig/microbial/">
                                    Microgalaxy Community
                                </a> and the tools available in the <a className="text-primary hover:underline" href="https://microgalaxy.usegalaxy.eu">
                                    MicroGalaxy instance
                                </a>.
                            </li>
                            <li>
                                To start off, we recommend you to begin by reading the <a className="text-primary hover:underline" href="https://rdmkit.elixir-europe.org/data_management_plan">
                                    Data Management Plan (DMP) page on RDMkit
                                </a> as it helps to get an overview about what entails a DMP. From RDMkit, you can choose a tool such as <a className="text-primary hover:underline" href="https://rdmkit.elixir-europe.org/dsw">
                                    Data Stewardship Wizard (DSW)
                                </a> to create a DMP. The DSW is a questionnaire-style tool for creating, updating, and sharing your DMP. The DSW will direct you to RDMkit’s specific guidelines, should you need them when answering questions. Also, the DSW has links to FAIRsharing to help you choose among repositories, standards, and policies to adopt for your project. From RDMkit, you can navigate to TeSS to discover DMP-related training materials and events.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
}
