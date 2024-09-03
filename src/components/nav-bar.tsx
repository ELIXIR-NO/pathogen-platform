"use client";

import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LogoModeToggle } from "@/components/logo-mode-toggle";

type NavItem = { pageUrl: string; pageName: string };
const NavItems: NavItem[] = [
	{
		pageUrl: "/dashboards",
		pageName: "Dashboard",
	},
	{
		pageUrl: "/about",
		pageName: "About",
	},
];

type DropdownMenuItem = { title: string; href: string; description: string };
const topics: DropdownMenuItem[] = [
	{
		title: "Antibiotic resistance",
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

const pandemicPreparednessNavItems: DropdownMenuItem[] = [
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

const RDMNavDropdownItems: DropdownMenuItem[] = [
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

const oneHealthNavItems: DropdownMenuItem[] = [
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

export function NavBar() {
	return (
		<nav className="fixed left-0 right-0 top-0 z-10 h-fit py-2 backdrop-blur-sm">
			<div className="container flex flex-row items-center justify-between gap-x-4 pt-2">
				<ul className="flex flex-row items-center justify-center gap-x-4">
					<li>
						<Link href="/">
							<LogoModeToggle />
						</Link>
					</li>
					<li>
						<NavigationMenu>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-lg font-normal decoration-primary underline-offset-4 hover:underline">
									Topics
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{topics.map((topic) => (
											<ListItem
												key={topic.title}
												title={topic.title}
												href={topic.href}
											>
												{topic.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-lg font-normal decoration-primary underline-offset-4 hover:underline">
									Pandemic Preparedness
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{pandemicPreparednessNavItems.map((item) => (
											<ListItem
												key={item.title}
												title={item.title}
												href={item.href}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-lg font-normal decoration-primary underline-offset-4 hover:underline">
									RDM
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{RDMNavDropdownItems.map((item) => (
											<ListItem
												key={item.title}
												title={item.title}
												href={item.href}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-lg font-normal decoration-primary underline-offset-4 hover:underline">
									One Health
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{oneHealthNavItems.map((item) => (
											<ListItem
												key={item.title}
												title={item.title}
												href={item.href}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenu>
					</li>
					{NavItems.map((it) => (
						<NavBarItem
							key={it.pageName}
							pageUrl={it.pageUrl}
							pageName={it.pageName}
						/>
					))}
				</ul>
				<div className="flex flex-row items-center space-x-1">
					<ModeToggle />
				</div>
			</div>
		</nav>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

const NavBarItem: FC<NavItem> = ({ pageUrl, pageName }) => {
	const pathName = usePathname();
	return (
		<li>
			<Link
				className={cn(
					"px-3 text-lg hover:underline hover:decoration-primary hover:underline-offset-4",
					pathName === `${pageUrl}` && "font-semibold text-primary"
				)}
				href={pageUrl}
			>
				{pageName}
			</Link>
		</li>
	);
};
