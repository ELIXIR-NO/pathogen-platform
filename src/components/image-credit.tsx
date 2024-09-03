"use client";

import Link from "next/link";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import React, { ReactNode } from "react";

interface ImageCreditPart {
	text: string;
	href: string | null;
}

export default function ImageCredit({
	credits,
	children,
}: {
	credits: ImageCreditPart[];
	children: ReactNode;
}) {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>{children}</HoverCardTrigger>
			<HoverCardContent>
				<p className="text-xs text-gray-500">
					{credits.map((part, index) =>
						part.href ? (
							<Link
								key={index}
								href={part.href}
								className="text-blue-500 hover:underline"
							>
								{part.text}
							</Link>
						) : (
							<span key={index}>{part.text}</span>
						)
					)}
				</p>
			</HoverCardContent>
		</HoverCard>
	);
}
