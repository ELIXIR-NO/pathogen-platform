import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/nav-bar";
import { Providers } from "@/providers/providers";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Pathogen Portal",
	description: "Pathogen Portal",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers>
					<NavBar />
					<div className="mx-auto w-3/4 pt-24">{children}</div>
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
