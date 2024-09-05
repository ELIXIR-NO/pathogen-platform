export type DropdownMenuItem = {
	title: string;
	href: string;
	description: string;
};
export const topics: DropdownMenuItem[] = [
	{
		title: "About Topics",
		href: "/topics",
		description: "",
	},
	{
		title: "Antimicrobial resistance",
		href: "/topics/antimicrobial-resistance",
		description:
			"Microbes evolve to protect them from the effects of antimicrobial treatment",
	},
	{
		title: "Monkey Pox",
		href: "/topics/mpox",
		description: "Mpox is a zoonotic virus endemic to central Africa.",
	},
	{
		title: "Pseudomonas",
		href: "/topics/pseudomonas",
		description:
			"Pseudomonas aeruginosa is a a gramnegative Gammaproteobacterium that can infect immunocompromised people.",
	},
	{
		title: "Covid-19",
		href: "/topics/covid-19",
		description:
			"Coronavirus disease (COVID-19) was responsible for the global pandemic that started in 2019",
	},
	{
		title: "Enterococcus",
		href: "/topics/enterococcus",
		description:
			"Enterococcus faecalis is a grampositive lactic acid bacterium that resides in the GI tract",
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
		title: "About RDM",
		href: "/rdm/about-rdm",
		description: "",
	},
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
		title: "About One Health",
		href: "/one-health",
		description: "",
	},
	{
		title: "Food and waterborne Pathogens",
		href: "/one-health/food-and-waterborne-pathogens",
		description: "Pathogens transmitted through food or water",
	},
	{
		title: "Zoonotic Pathogens",
		href: "/one-health/zoonotic-pathogens",
		description: "Pathogens transmitted between animals and humans",
	},
	{
		title: "Environmentally transmitted pathogens",
		href: "/one-health/environmentally-transmitted-pathogens",
		description: "Pathogens transmitted from the environment",
	},
	{
		title: "Vector-borne pathogens",
		href: "/one-health/vector-borne-pathogens",
		description: "Pathogens transmitted via vectors",
	},
];
