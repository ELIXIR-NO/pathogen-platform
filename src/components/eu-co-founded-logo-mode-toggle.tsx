"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function EuCoFoundedLogoModeToggle() {
	return (
		<>
			<Image
				src="/EU_co_funded_logo_black.png"
				alt="EU co-funded Logo"
				width={160}
				height={50}
				className={cn("hover:ring-primary hover:ring-2 dark:hidden")}
				priority={true}
			/>
			<Image
				src="/EU_co_funded_logo_white.png"
				alt="EU co-funded Logo"
				width={160}
				height={50}
				className={cn("hover:ring-primary hidden hover:ring-2 dark:block")}
				priority={true}
			/>
		</>
	);
}
