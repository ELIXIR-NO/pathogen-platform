"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import { useState, useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>; // Render children without ThemeProvider during SSR
	}

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ReactQueryProvider>{children}</ReactQueryProvider>
		</ThemeProvider>
	);
}
