"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function UiTLogoModeToggle() {
	return (
		<>
			<Image
				src="/uit-logo-black.png"
				alt="Logo of UiT The Arctic University of Norway"
				width={300}
				height={300}
				className={cn("hover:ring-primary hover:ring-2 dark:hidden")}
				priority={true}
			/>
			<Image
				src="/uit-logo-white.png"
				alt="Logo of UiT The Arctic University of Norway"
				width={300}
				height={300}
				className={cn("hover:ring-primary hover:ring-2 hidden dark:block")}
				priority={true}
			/>
		</>
	);
}
