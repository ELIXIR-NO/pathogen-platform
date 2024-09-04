import { Resource } from "./columns";

export const resources: Resource[] = [
	{
		resource: "COVID-19 Data Portal",
		tags: ["Covid-19", "SARS-CoV-2"],
		link: "https://www.covid19dataportal.org/search/sequences",
		description:
			"Raw and assembled sequence and analysis of SARS-CoV-2 and other coronaviruses",
		domains: ["Bacteria"],
	},
	{
		resource: "pubMLST",
		tags: ["MLST"],
		link: "https://pubmlst.org/",
		description:
			"Public databases for molecular typing and microbial genome diversity including multiple pathogen species",
		domains: ["Bacteria"],
	},
	{
		resource: "BIGSdb-Pasteur",
		tags: ["MLST"],
		link: "https://bigsdb.pasteur.fr/",
		description:
			"Web platform with collections of curated databases of bacterial isolates, genomes and genotypes",
		domains: ["Bacteria"],
	},
	{
		resource: "NDARO",
		tags: ["AMR"],
		link: "https://bigsdb.pasteur.fr/",
		description:
			"National Database of Antibiotic Resistant Organisms (NDARO), a centralized hub for researchers to access AMR data",
		domains: ["Bacteria"],
	},
	{
		resource: "CARD database",
		tags: ["AMR"],
		link: "https://card.mcmaster.ca/",
		description:
			"The Comprehensive Antibiotic Resistance Database (CARD) is a bioinformatic database of resistance genes, their products and associated phenotypes.",
		domains: ["Bacteria"],
	},
	{
		resource: "The Pseudomonas Genome Database",
		tags: ["Pseudomonas", "Genomes"],
		link: "https://www.pseudomonas.com/",
		description:
			"High quality genome annotation of pseudomonas strains, including pathway annotations and AMR Gene Predictions",
		domains: ["Bacteria"],
	},
	{
		resource: "PLSDB",
		tags: ["Plasmids"],
		link: "https://covid19.sfb.uit.no/",
		description:
			"Bacterial plasmids retrieved from the NCBI nucleotide database with additional annotations consist of resistance and virulence factors",
		domains: ["Bacteria"],
	},
	{
		resource: "COVID-19 (SARS-CoV-2 Database)",
		tags: ["Covid-19", "Genomes"],
		link: "https://www.bv-brc.org/",
		description: "Covid-19",
		domains: ["Virus"],
	},
	{
		resource: "BV-BRC",
		tags: [
			"Genomes",
			"Proteins",
			"Experimental data",
			"Plasmids",
			"Metagenomes",
		],
		link: "https://www.bv-brc.org/",
		description:
			"Bacterial and Viral Bioinformatics Resource Center (BV-BRC) encompasses integrated datasets from mainly pathogenic bacteria, archaea, viruses, and eukaryotes",
		domains: ["Virus", "Bacteria", "Archaea", "Eukaryote"],
	},
	{
		resource: "Virus-Host DB",
		tags: ["Pathogen-host"],
		link: "https://www.genome.jp/virushostdb/",
		description:
			"Virus-Host DB organizes data about the relationships between viruses and their hosts, represented in the form of pairs of NCBI taxonomy IDs for viruses and their hosts",
		domains: ["Virus"],
	},
	{
		resource: "EuPathDB",
		tags: ["Genomes", "Genes", "Pathogen-host"],
		link: "https://veupathdb.org/veupathdb/app",
		description:
			"The Eukaryotic Pathogen Database (EuPathDB) is an integrated database covering numerous eukaryotic pathogens including Plasmodium and Trypanosoma",
		domains: ["Eukaryote"],
	},
	{
		resource: "PHI-base",
		tags: ["Pathogen-host", "Genes"],
		link: "http://www.phi-base.org./",
		description:
			"PHI-base is to provide expertly curated molecular and biological information on genes proven to affect the outcome of pathogen-host interactions that are of medical and agronomical importance",
		domains: ["Fungi", "Bacteria"],
	},
];
