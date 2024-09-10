"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function EuCoFoundedLogoModeToggle() {
	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = "/EU_co_funded_logo_black.png";
			break;
		case "dark":
			src = "/EU_co_funded_logo_white.png";
			break;
		default:
			src = "/EU_co_funded_logo_black.png";
			break;
	}

	return (
		<Image
			src={src}
			alt="EU co-funded Logo"
			width={160}
			height={50}
			className={cn("hover:ring-2 hover:ring-primary")}
			priority={true}
		/>
	);
}
