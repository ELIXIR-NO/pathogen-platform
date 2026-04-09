"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function FHILogoModeToggle() {
	return (
		<>
			<Image
				src="/logo-fhi-black.svg"
				alt="Logo of Veterinærinstituttet"
				width={200}
				height={200}
				className={cn("hover:ring-primary hover:ring-2 dark:hidden")}
				priority={true}
			/>
			<Image
				src="/logo-fhi-white.svg"
				alt="Logo of Veterinærinstituttet"
				width={200}
				height={200}
				className={cn("hover:ring-primary hover:ring-2 hidden dark:block")}
				priority={true}
			/>
		</>
	);
}
