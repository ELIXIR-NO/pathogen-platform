"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function VetinstLogoModeToggle() {
	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = "/vetinst-logo-black.svg";
			break;
		case "dark":
			src = "/vetinst-logo-white.svg";
			break;
		default:
			src = "/vetinst-logo-black.svg";
			break;
	}

	return (
		<Image
			src={src}
			alt="Logo of Veterinærinstituttet"
			width={300}
			height={300}
			className={cn("hover:ring-2 hover:ring-primary")}
			priority={true}
		/>
	);
}
