import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/nav-bar";
import NavMobile from "@/components/nav-mobile";
import { Providers } from "@/providers/providers";
import { fetchAllPages } from "@/lib/notion-utils";
import { createSearchIndex } from "@/lib/searchUtils";
import SearchPanel from "@/components/search/search-panel";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Pathogen Portal",
	description: "Pathogen Portal",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex(notionPages);

	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers>
					<div className="hidden md:block">
						<NavBar />
					</div>
					<div className="md:hidden">
						<NavMobile />
					</div>
					<SearchPanel contentIndex={searchIndex} />
					<div className="mx-auto w-3/4 pt-24">{children}</div>
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
