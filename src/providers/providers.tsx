"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

export function Providers({ children }: { children: React.ReactNode }) {
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
