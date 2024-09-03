// navData.ts
export type NavItem = { pageUrl: string; pageName: string };
export const NavItems: NavItem[] = [
	{ pageUrl: "/training-and-events", pageName: "Events" },
	{ pageUrl: "/dashboards", pageName: "Dashboard" },
	{ pageUrl: "/about", pageName: "About" },
];

export type DropdownMenuItem = {
	title: string;
	href: string;
	description: string;
};
export const topics: DropdownMenuItem[] = [
	{
		title: "Antimicrobial resistance",
		href: "/topics/antimicrobial-resistance",
		description: "Microbes evolve to protect them from the effects of antimicrobial treatment",
	},
	{
		title: "Monkey Pox",
		href: "/topics/mpox",
		description: "Mpox is a zoonotic virus endemic to central Africa.",
	},
	{
		title: "Pseudomonas",
		href: "/topics/pseudomonas",
		description: "an opportunistic pathogen",
	},
	{
		title: "Covid-19",
		href: "/topics/covid-19",
		description: "Coronavirus disease (COVID-19) was responsible for the global pandemic that started in 2019",
	},
	{
		title: "Enterococcus",
		href: "/topics/enterococcus",
		description: "the harmless inhabitants of the gut",
	},
];

export const pandemicPreparednessNavItems: DropdownMenuItem[] = [
	{
		title: "Surveillance",
		href: "/pandemic-preparedness/surveillance",
		description:
			"National surveillance of pathogens",
	},
	{
		title: "Medical microbiology reference labs",
		href: "/pandemic-preparedness/medical-microbiology-reference-labs",
		description: "Reference laboratories with national responsibilities",
	},
	{
		title: "Infectious diseases",
		href: "/pandemic-preparedness/infectious-diseases",
		description: "Disorders caused by organisms",
	},
];

export const RDMNavDropdownItems: DropdownMenuItem[] = [
	{
		title: "About RDM",
		href: "/rdm",
		description: "Learn about pathogenic microorganisms RDM",
	},
	{
		title: "Databases",
		href: "/rdm/databases",
		description:
			"Databases and data repositories",
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
		description:
			"Bioinformatic tools and analysis pipelines",
	},
	{
		title: "Pathogen data hub",
		href: "/rdm/pathogen-data-hub",
		description:
			"National data hub for sharing diverse pathogen biodata types",
	},
];

export const oneHealthNavItems: DropdownMenuItem[] = [
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
