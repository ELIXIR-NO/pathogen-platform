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
		title: "Surveillance",
		href: "/pandemic-preparedness/surveillance",
		description:
			"continuous, systematic collection, analysis and interpretation of health-related data",
	},
	{
		title: "Medical microbiology reference labs",
		href: "/pandemic-preparedness/medical-microbiology-reference-labs",
		description: "Microbiology labs authorized by the Health Directorate",
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
		description: "All about research data management",
	},
	{
		title: "Databases",
		href: "/rdm/databases",
		description:
			"Databases and data repositories relevant for research on pathogen data",
	},
	{
		title: "Sharing data",
		href: "/rdm/sharing-data",
		description:
			"Making research data available to other investigators or the public",
	},
	{
		title: "Tools and workflows",
		href: "/rdm/tools-and-workflows",
		description:
			"Tools, workflows and relevant resources for performing analysis of pathogen data",
	},
	{
		title: "Pathogen data hub",
		href: "/rdm/pathogen-data-hub",
		description:
			"A secure, user-friendly infrastructure for the storage, sharing, and archiving of FAIR pathogen data",
	},
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
