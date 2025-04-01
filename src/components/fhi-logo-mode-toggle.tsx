"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function FHILogoModeToggle() {
	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = "/logo-fhi-black.svg";
			break;
		case "dark":
			src = "/logo-fhi-white.svg";
			break;
		default:
			src = "/logo-fhi-black.svg";
			break;
	}

	return (
		<Image
			src={src}
			alt="Logo of Veterinærinstituttet"
			width={200}
			height={200}
			className={cn("hover:ring-2 hover:ring-primary")}
			priority={true}
		/>
	);
}
