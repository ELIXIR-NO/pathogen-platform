import Image from "next/image";

const contributors = [
    {
        name: "Erik Hjerde - Project lead",
        image: "/people/erik.jpg",
        description: "Erik Hjerde works as the node leader at ELIXIR@UIT. He has a background in biology with a PhD in Genomics. During his career he has been working mainly with prokaryotes with focus on genomics, transcriptomics and metagenomic analysis on communities from both the human host as well as from various ecological habitats."
    },
    {
        name: "Peter Kovachich - Team lead",
        image: "/people/peter.jpg",
        description: ""
    },
    {
        name: "Joshua Baskaran - System developer",
        image: "/people/joshua.jpg",
        description: "Bridging the worlds of molecular biology and software engineering, I bring a unique perspective to my role as a developers' team lead. My expertise lies in crafting user-centric applications, with a primary focus on cutting-edge browser-based solutions. I excel in orchestrating seamless deployments through Kubernetes, ensuring our products are robust, scalable, and always at the forefront of technology. My background in science informs my analytical approach to problem-solving, while my passion for coding drives innovation in every project I lead."
    },
    {
        name: "Danilo Martins - System developer",
        image: "/people/danilo.jpg",
        description: "With a background in Information Technology and a master's degree in Bioinformatics from the Federal University of Rio Grande do Norte in Brazil, I bring a distinctive perspective to my role in technology development. My expertise is focused on creating innovative solutions, including the design and implementation of pipelines and web applications."
    },
    {
        name: "Espen Åberg - Data Steward",
        image: "/people/espen.jpg",
        description: "Espen Åberg is the Service Coordinator of ELIXIR Norway and a researcher at UiT The Arctic University of Tromsø. With a PhD in molecular medicine, he has transitioned from wet-lab cancer genomics to bioinformatics, presently focusing on metagenomics and host-microbe interactions. He currently leads ELIXIR Norway's task force on data submission and metadata platforms, mobilizing key microbial data and teaching bioinformatics and FAIR data management as a certified data steward."
    },
    {
        name: "Dorota Buczek - ELIXIR support",
        image: "/people/dorota.jpg",
        description: ""
    },
    {
        name: "Terje Klemetsen",
        image: "/people/terje.jpg",
        description: "Terje Klemetsen is the work-package leader of ELIXIR 3 Biodiversity at the Tromsø node of UiT The Arctic University of Norway. He holds a PhD in bioinformatics from UiT, specializing in comparative genomics and phylogeny. In addition, since 2017 he has contributed to the design and curation of the Marine Metagenomics Portal (MMP) and the genomic marine prokaryotic databases, including MarRef."
    },
    {
        name: "Sebastian Peters - ELIXIR support",
        image: "/people/sebastian.jpg",
        description: "Sebastian Peters works as a support being involved in support, helpdesk, training, data curation, and data processing for genomics and transcriptomics projects. He has a background in environmental soil metatranscriptomics focusing on trophic interactions and predatory prokaryotes (myxobacteria) and their role in the soil food web, before switching to marine genomics and transcriptomics with a main focus on phototrophic eukaryotes (microalgae) and their interactions in the phycosphere."
    }
];

export default function PathogenPortalContributors() {
    return (
        <section className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold">Pathogen Portal Contributors</h2>

            <div className="flex flex-col space-y-4">
                {contributors.map((contributor, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={contributor.image}
                                alt={contributor.name}
                                width={150}
                                height={150}
                                className="object-cover w-full h-full rounded-full"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold">{contributor.name}</h3>
                            <p  className="font-normal">{contributor.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}