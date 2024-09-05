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
import {
	oneHealthNavItems,
	pandemicPreparednessNavItems,
	RDMNavDropdownItems,
	topics,
} from "@/components/nav-bar/navBarData";

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

export function NavBar() {
	return (
		<nav className="fixed left-0 right-0 top-0 z-10 h-fit py-2 backdrop-blur-sm">
			<div className="container flex flex-row items-center justify-between gap-x-4 pt-2">
				<ul className="flex flex-row items-center justify-center gap-x-4">
					<li>
						<Link href="/public">
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
