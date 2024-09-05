"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

export type Resource = {
	resource: string;
	tags: string[];
	link: string;
	description: string;
	domains: string[];
};

const stringToColor = (str: string) => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	const hue = hash % 360;
	return `hsl(${hue}, 70%, 80%)`;
};

const ColoredBadge = ({ content }: { content: string }) => {
	const backgroundColor = useMemo(() => stringToColor(content), [content]);
	return (
		<Badge
			variant="secondary"
			className="w-fit text-justify text-xs"
			style={{ backgroundColor }}
		>
			{content}
		</Badge>
	);
};

export const columns: ColumnDef<Resource>[] = [
	{
		accessorKey: "resource",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Resource
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			return <div className="text-left font-bold">{row.original.resource}</div>;
		},
	},
	{
		accessorKey: "tags",
		header: "Tags",
		cell: ({ row }) => {
			return (
				<div className="flex flex-col space-y-2">
					{row.original.tags.map((tag, index) => (
						<ColoredBadge key={index} content={tag} />
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "link",
		header: "Link",
		cell: ({ row }) => {
			const url = new URL(row.original.link);
			const shortLink = url.hostname.replace(/^www\./, "");
			return (
				<div className="text-primary hover:underline">
					<a href={url.toString()}>{shortLink}</a>
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "domains",
		header: "Domains",
		cell: ({ row }) => {
			return (
				<div className="flex flex-col space-y-2">
					{row.original.domains.map((domain, index) => (
						<ColoredBadge key={index} content={domain} />
					))}
				</div>
			);
		},
	},
];
