"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function VetinstLogoModeToggle() {
	return (
		<>
			<Image
				src="/vetinst-logo-black.svg"
				alt="Logo of Veterinærinstituttet"
				width={300}
				height={300}
				className={cn("hover:ring-primary hover:ring-2 dark:hidden")}
				priority={true}
			/>
			<Image
				src="/vetinst-logo-white.svg"
				alt="Logo of Veterinærinstituttet"
				width={300}
				height={300}
				className={cn("hover:ring-primary hidden hover:ring-2 dark:block")}
				priority={true}
			/>
		</>
	);
}
