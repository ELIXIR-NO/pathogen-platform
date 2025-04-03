"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

interface ThemeImageProps {
	lightSrc: string;
	darkSrc: string;
	alt: string;
	className?: string;
}

export function ThemeImage({
	lightSrc,
	darkSrc,
	alt,
	className,
}: ThemeImageProps) {
	const { resolvedTheme } = useTheme();
	const src = resolvedTheme === "dark" ? darkSrc : lightSrc;

	return (
		<Image
			src={src}
			alt={alt}
			width={550}
			height={500}
			className="object-scale-down"
			priority={true}
		/>
	);
}
