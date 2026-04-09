"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function LogoModeToggle() {
	return (
		<>
			<Image
				src="/pathogens_portal_norway_logo_light.png"
				alt="Logo of pathogens portal norway"
				width={250}
				height={65.55}
				className={cn("hover:ring-primary hover:ring-2 dark:hidden")}
				priority={true}
			/>
			<Image
				src="/pathogens_portal_norway_logo_dark.png"
				alt="Logo of pathogens portal norway"
				width={250}
				height={65.55}
				className={cn("hover:ring-primary hidden hover:ring-2 dark:block")}
				priority={true}
			/>
		</>
	);
}
