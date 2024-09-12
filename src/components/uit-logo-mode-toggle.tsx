"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function UiTLogoModeToggle() {
	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = "/uit-logo-black.png";
			break;
		case "dark":
			src = "/uit-logo-white.png";
			break;
		default:
			src = "/uit-logo-black.png";
			break;
	}

	return (
		<Image
			src={src}
			alt="Logo of UiT The Arctic University of Norway"
			width={100}
			height={40}
			className={cn("hover:ring-2 hover:ring-primary")}
			priority={true}
		/>
	);
}
