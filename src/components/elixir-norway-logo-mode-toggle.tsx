"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function ElixirNorwayLogoModeToggle() {
	const { resolvedTheme } = useTheme();
	let src;

	switch (resolvedTheme) {
		case "light":
			src = "/elixir-no-logo-black.svg";
			break;
		case "dark":
			src = "/elixir-no-logo-white.svg";
			break;
		default:
			src = "/elixir-no-logo-black.svg";
			break;
	}

	return (
		<Image
			src={src}
			alt="Logo of ELIXIR Norway"
			width={150}
			height={50}
			className={cn("hover:ring-2 hover:ring-primary")}
			priority={true}
		/>
	);
}
