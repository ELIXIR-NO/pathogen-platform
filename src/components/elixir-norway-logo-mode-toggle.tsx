"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function ElixirNorwayLogoModeToggle() {
	return (
		<>
			<Image
				src="/elixir-no-logo-black.svg"
				alt="Logo of ELIXIR Norway"
				width={150}
				height={50}
				className={cn("hover:ring-primary hover:ring-2 dark:hidden")}
				priority={true}
			/>
			<Image
				src="/elixir-no-logo-white.svg"
				alt="Logo of ELIXIR Norway"
				width={150}
				height={50}
				className={cn("hover:ring-primary hover:ring-2 hidden dark:block")}
				priority={true}
			/>
		</>
	);
}
