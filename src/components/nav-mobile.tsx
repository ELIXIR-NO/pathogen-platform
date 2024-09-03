"use client";

import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { LogoModeToggle } from "@/components/logo-mode-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
	NavItem,
	NavItems,
	topics,
	pandemicPreparednessNavItems,
	RDMNavDropdownItems,
	oneHealthNavItems,
	DropdownMenuItem,
} from "@/lib/navData";

export default function NavMobile() {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const pathname = usePathname();

	React.useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<nav className="fixed left-0 right-0 top-0 z-10 h-fit py-2 backdrop-blur-sm">
			<div className="container flex flex-row items-center justify-between gap-x-4 pt-2">
				<div className="rounded border border-gray-200 p-1">
					<Hamburger toggled={menuOpen} toggle={setMenuOpen} />
				</div>
				<Link href="/" className="mx-auto">
					<LogoModeToggle />
				</Link>
				<ModeToggle />
			</div>
			{menuOpen && (
				<div className="absolute left-0 right-0 top-full bg-background shadow-md">
					<ul className="flex flex-col items-start justify-start gap-y-4 p-4">
						<NavMenuItem
							title="Topics"
							items={topics}
							onClose={() => setMenuOpen(false)}
						/>
						<NavMenuItem
							title="Pandemic Preparedness"
							items={pandemicPreparednessNavItems}
							onClose={() => setMenuOpen(false)}
						/>
						<NavMenuItem
							title="RDM"
							items={RDMNavDropdownItems}
							onClose={() => setMenuOpen(false)}
						/>
						<NavMenuItem
							title="One Health"
							items={oneHealthNavItems}
							onClose={() => setMenuOpen(false)}
						/>
						{NavItems.map((it) => (
							<NavBarItem
								key={it.pageName}
								pageUrl={it.pageUrl}
								pageName={it.pageName}
								onClick={() => setMenuOpen(false)}
							/>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}

const NavMenuItem: React.FC<{
	title: string;
	items: DropdownMenuItem[];
	onClose: () => void;
}> = ({ title, items, onClose }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li className="w-full">
			<button
				className="w-full text-left text-lg font-normal hover:underline"
				onClick={() => setIsOpen(!isOpen)}
			>
				{title}
			</button>
			{isOpen && (
				<ul className="flex flex-col gap-y-2 pl-4 pt-2">
					{items.map((item) => (
						<ListItem
							key={item.title}
							title={item.title}
							href={item.href}
							onClick={onClose}
						>
							{item.description}
						</ListItem>
					))}
				</ul>
			)}
		</li>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, onClick, ...props }, ref) => {
	return (
		<li>
			<a
				ref={ref}
				className={cn(
					"block select-none p-2 text-sm leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground",
					className
				)}
				{...props}
				onClick={onClick}
			>
				<div className="font-medium">{title}</div>
				<p className="text-xs text-muted-foreground">{children}</p>
			</a>
		</li>
	);
});
ListItem.displayName = "ListItem";

const NavBarItem: React.FC<NavItem & { onClick: () => void }> = ({
	pageUrl,
	pageName,
	onClick,
}) => (
	<li>
		<Link
			className="block w-full cursor-pointer text-lg font-normal hover:underline hover:decoration-primary"
			href={pageUrl}
			onClick={onClick}
		>
			{pageName}
		</Link>
	</li>
);
