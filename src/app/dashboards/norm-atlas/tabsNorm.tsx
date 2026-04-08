"use client";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs-modified";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RegionsPanel from "@/components/regions-panel";

export default function TabsNorm({
	children,
}: {
	children: React.ReactNode[];
}) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tabFromUrl = searchParams.get("tab");
	const activeTab = tabFromUrl || "atlas";

	const handleTabChange = (value: string) => {
		router.push(`?tab=${value}`, { scroll: false });
	};

	return (
		<>
			<RegionsPanel />
			<Tabs
				value={activeTab}
				onValueChange={handleTabChange}
				className="w-full"
			>
				<TabsList variant="underline">
					<TabsTrigger
						value="atlas"
						variant="underline"
						className="hover:text-foreground text-lg font-semibold text-gray-500"
					>
						Atlas
					</TabsTrigger>
					<TabsTrigger
						value="trends"
						variant="underline"
						className="hover:text-foreground text-lg font-semibold text-gray-500"
					>
						Trends
					</TabsTrigger>
				</TabsList>
				<TabsContent value="atlas">
					<div className="-mx-[calc((100vw-75vw)/2)] mt-10 w-screen pr-16 pl-2">
						{children[0]}
					</div>
				</TabsContent>
				<TabsContent value="trends" className="mt-10">
					{children[1]}
				</TabsContent>
			</Tabs>
		</>
	);
}
