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
		pageUrl: "/training-and-events",
		pageName: "Events",
	},
	{
		pageUrl: "/dashboard",
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
		title: "Infectious diseases",
		href: "/topics/infectious-diseases",
		description:
			"disorders which are primarily caused by pathogenic microorganisms",
	},
	{
		title: "Antibiotic resistance",
		href: "/topics/antibiotic-resistance",
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
		title: "Surveillance",
		href: "/pandemic-preparedness/surveillance",
		description:
			"continuous, systematic collection, analysis and interpretation of health-related data",
	},
	{
		title: "Environmentally transmitted diseases",
		href: "/pandemic-preparedness/environmentally-transmitted-diseases",
		description:
			"microorganisms found in the environment, capable of infecting humans",
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
	{
		title: "One health",
		href: "/pandemic-preparedness/one-health",
		description:
			"The close connection between human health, animals, and the environment",
	},
];

const RDMNavDropdownItems: DropdownMenuItem[] = [
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
		href: "rdm/sharing-data",
		description:
			"making research data available to other investigators or the public",
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
				<ModeToggle />
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
					"text-lg hover:underline hover:decoration-primary hover:underline-offset-4",
					pathName === `${pageUrl}` && "font-semibold text-primary"
				)}
				href={pageUrl}
			>
				{pageName}
			</Link>
		</li>
	);
};
