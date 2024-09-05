import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/nav-bar";
import { Providers } from "@/providers/providers";
import { fetchAllPages } from "@/lib/notion-utils";
import { createSearchIndex } from "@/lib/searchUtils";
import SearchPanel from "@/components/search-panel";
import Footer from "@/components/footer";

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
					"flex min-h-screen flex-col bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers>
					<header>
						<NavBar />
						<SearchPanel contentIndex={searchIndex} />
					</header>
					<main className="mx-auto min-h-[95vh] w-3/4 py-10 pt-24">
						{children}
					</main>
					<Footer />
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
