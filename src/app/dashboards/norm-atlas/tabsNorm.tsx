"use client";

import {
	Tabs,
	TabsTrigger,
	TabsList,
	TabsContent,
} from "@/components/ui/tabs-modified";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function TabsNorm({
	children,
}: {
	children: React.ReactNode[];
}) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [activeTab, setActiveTab] = useState("atlas");

	useEffect(() => {
		const tab = searchParams.get("tab");
		console.log("tab:", tab);

		if (tab) setActiveTab(tab);
	}, [searchParams]);

	const handleTabChange = (value: string) => {
		setActiveTab(value);
		router.push(`?tab=${value}`, { scroll: false });
	};

	return (
		<Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
			<TabsList variant="underline">
				<TabsTrigger
					value="atlas"
					variant="underline"
					className="text-lg font-semibold text-gray-500 hover:text-foreground"
				>
					Atlas
				</TabsTrigger>
				<TabsTrigger
					value="trends"
					variant="underline"
					className="text-lg font-semibold text-gray-500 hover:text-foreground"
				>
					Trends
				</TabsTrigger>
			</TabsList>
			<TabsContent value="atlas">
				<div className="-mx-[calc((100vw-75vw)/2)] mt-10 w-screen pl-2 pr-16">
					{children[0]}
				</div>
			</TabsContent>
			<TabsContent value="trends" className="mt-10">
				{children[1]}
			</TabsContent>
		</Tabs>
	);
}
