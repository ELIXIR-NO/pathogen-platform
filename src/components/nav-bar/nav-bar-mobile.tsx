import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	oneHealthNavItems,
	pandemicPreparednessNavItems,
	RDMNavDropdownItems,
	topics,
} from "@/components/nav-bar/navBarData";
import { LogoModeToggle } from "@/components/logo-mode-toggle";
import { ModeToggle } from "@/components/mode-toggle";

export default function NavBarMobile() {
	return (
		<nav className="flex flex-row justify-between px-6 py-3">
			<NavigationSheet />
			<LogoModeToggle />
			<div className="flex flex-row justify-end">
				<ModeToggle />
			</div>
		</nav>
	);
}

function NavigationSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<div className="flex flex-col items-start space-y-2">
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="topics">
							<AccordionTrigger>Topics</AccordionTrigger>
							<AccordionContent className="flex flex-col items-start space-y-1">
								{topics.map((item) => (
									<div key={item.title} className="text-left">
										<Button variant="link" className="text-foreground" asChild>
											<Link href={item.href}>{item.title}</Link>
										</Button>
									</div>
								))}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="pandemic-prepparedness">
							<AccordionTrigger>Pandemic Preparedness</AccordionTrigger>
							<AccordionContent className="flex flex-col items-start space-y-1">
								{pandemicPreparednessNavItems.map((item) => (
									<div key={item.title} className="text-left">
										<Button variant="link" className="text-foreground" asChild>
											<Link href={item.href}>{item.title}</Link>
										</Button>
									</div>
								))}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="rdm">
							<AccordionTrigger>RDM</AccordionTrigger>
							<AccordionContent className="flex flex-col items-start space-y-1">
								{RDMNavDropdownItems.map((item) => (
									<div key={item.title} className="text-left">
										<Button variant="link" className="text-foreground" asChild>
											<Link href={item.href}>{item.title}</Link>
										</Button>
									</div>
								))}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="one-health">
							<AccordionTrigger>One Health</AccordionTrigger>
							<AccordionContent className="flex flex-col items-start space-y-1">
								{oneHealthNavItems.map((item) => (
									<div key={item.title} className="text-left">
										<Button variant="link" className="text-foreground" asChild>
											<Link href={item.href}>{item.title}</Link>
										</Button>
									</div>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Link href="/dashboards" className="pt-3 font-medium hover:underline">
						Dashboard
					</Link>
					<Link href="/about" className="pt-3 font-medium hover:underline">
						About
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
}
