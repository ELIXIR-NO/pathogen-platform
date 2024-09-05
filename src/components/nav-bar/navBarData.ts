export type DropdownMenuItem = {
	title: string;
	href: string;
	description: string;
};
export const topics: DropdownMenuItem[] = [
	{
		title: "Antimicrobial resistance",
		href: "/topics/antimicrobial-resistance",
		description: "the impending threat of super bugs",
	},
	{
		title: "Monkey Pox",
		href: "/topics/mpox",
		description: "a zoonotic disease induced by the monkeypox virus",
	},
	{
		title: "Pseudomonas",
		href: "/topics/pseudomonas",
		description: "an opportunistic pathogen",
	},
	{
		title: "Covid-19",
		href: "/topics/covid-19",
		description: "an infectious disease caused by the novel SARS-CoV-2 virus",
	},
	{
		title: "Enterococcus",
		href: "/topics/enterococcus",
		description: "the harmless inhabitants of the gut",
	},
];

export const pandemicPreparednessNavItems: DropdownMenuItem[] = [
	{
		title: "About pandemic preparedness",
		href: "/pandemic-preparedness",
		description: "",
	},
	{
		title: "Surveillance",
		href: "/pandemic-preparedness/surveillance",
		description: "National surveillance of pathogens",
	},
	{
		title: "Medical microbiology reference labs",
		href: "/pandemic-preparedness/medical-microbiology-reference-labs",
		description: "Reference laboratories with national responsibilities",
	},
	{
		title: "Infectious diseases",
		href: "/pandemic-preparedness/infectious-diseases",
		description: "",
	},
];

export const RDMNavDropdownItems: DropdownMenuItem[] = [
	{
		title: "Research data management",
		href: "/rdm",
		description:
			"RDM organizes, stores, and ensures accessibility of research data.",
	},
	{
		title: "Where do I start?",
		href: "/rdm/where-do-i-start",
		description:
			"Explore various Norwegian tools and guidelines for managing pathogen genomics data.",
	},
	{
		title: "About RDM",
		href: "/rdm/about-rdm",
		description: "Learn about pathogenic microorganisms RDM",
	},
	{
		title: "Databases",
		href: "/rdm/databases",
		description: "Databases and data repositories",
	},
	{
		title: "Sharing data",
		href: "/rdm/sharing-data",
		description:
			"Data sharing boosts medical research, transparency, efficiency, and ethical adherence.",
	},
	{
		title: "Tools and workflows",
		href: "/rdm/tools-and-workflows",
		description: "Bioinformatic tools and analysis pipelines",
	},
	// {
	// 	title: "Pathogen data hub",
	// 	href: "/rdm/pathogen-data-hub",
	// 	description:
	// 		"A secure, user-friendly infrastructure for the storage, sharing, and archiving of FAIR pathogen data",
	// },
];

export const oneHealthNavItems: DropdownMenuItem[] = [
	{
		title: "Food and waterborne Pathogens",
		href: "/one-health/food-and-waterborne-pathogens",
		description: "",
	},
	{
		title: "Zoonotic Pathogens",
		href: "/one-health/zoonotic-pathogens",
		description: "",
	},
	{
		title: "Environmentally transmitted pathogens",
		href: "/one-health/environmentally-transmitted-pathogens",
		description: "",
	},
	{
		title: "Vector-borne pathogens",
		href: "/one-health/vector-borne-pathogens",
		description: "",
	},
];
