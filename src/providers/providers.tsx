"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
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
