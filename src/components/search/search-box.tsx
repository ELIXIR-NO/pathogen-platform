"use client";

import { fuzzySearchIndex, IndexItem, SearchIndex } from "@/lib/searchUtils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBox({ contentIndex }: { contentIndex: SearchIndex }) {
	const router = useRouter();
	const [openDialog, setOpenDialog] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const uniqueSearchResult = useMemo<IndexItem[]>(() => {
		const searchResult = fuzzySearchIndex(searchTerm, contentIndex);
		const uniqueMap = new Map<string, IndexItem>();
		searchResult.forEach((item) => {
			uniqueMap.set(item.pageId, item);
		});
		return Array.from(uniqueMap.values());
	}, [searchTerm, contentIndex]);

	const getShortSummary = (summary: string) => {
		if (summary.length > 50) {
			return summary.substring(0, 50) + " ...";
		}
		return summary;
	};

	useEffect(() => {
		return () => {
			setSearchTerm("");
		};
	}, []);

	return (
		<Dialog open={openDialog} onOpenChange={setOpenDialog}>
			<DialogTrigger asChild>
				<Button variant="outline">
					<Search size="icon" />
					<p className="ml-3">Search</p>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<div className="flex w-full flex-col space-y-3">
					<Input
						type="search"
						placeholder="Type to search"
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<ScrollArea className="max-h-[200px] w-full">
						<div className="flex flex-col space-y-2">
							{uniqueSearchResult.map((item) => (
								<div
									key={item.pageId}
									className="flex cursor-pointer flex-row items-center space-x-2 p-1 hover:rounded-md hover:bg-accent"
									onClick={() => {
										router.push(`${item.relativeLink}/${item.slug}`);
										setOpenDialog(false);
									}}
								>
									<FileText />
									<div className="flex flex-col justify-items-center">
										<p className="text-sm font-bold">{item.title}</p>
										<p className="text-sm">{getShortSummary(item.summary)}</p>
									</div>
								</div>
							))}
						</div>
					</ScrollArea>
				</div>
			</DialogContent>
		</Dialog>
	);
}
