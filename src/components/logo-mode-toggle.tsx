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
			src = "/pathogens_portal_norway_logo_dark.png"; // replace with appropriate image
			break;
		default:
			src = "/pathogens_portal_norway_logo_light.png"; // default to the light image
			break;
	}

	return (
		<Image
			src={src}
			alt="Logo of pathogens portal norway"
			width={150}
			height={35.55}
			className={cn("hover:ring-2 hover:ring-primary")}
			priority={true}
		/>
	);
}
