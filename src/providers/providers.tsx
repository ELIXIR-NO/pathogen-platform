"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import ReactQueryProvider from "@/providers/react-query-provider";

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</ThemeProvider>
		</NextUIProvider>
	);
}
