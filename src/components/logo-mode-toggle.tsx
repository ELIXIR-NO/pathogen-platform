"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function LogoModeToggle() {
	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = "/pathogens_portal_norway_logo_light.png";
			break;
		case "dark":
			src = "/pathogens_portal_norway_logo_dark.png";
			break;
		default:
			src = "/pathogens_portal_norway_logo_light.png";
			break;
	}

	return (
		<Image
			src={src}
			alt="Logo of pathogens portal norway"
			width={250}
			height={65.55}
			className={cn("hover:ring-2 hover:ring-primary")}
			priority={true}
		/>
	);
}
