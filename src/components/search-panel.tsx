"use client";

import { useRouter } from "next/navigation";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useMemo, useState } from "react";
import { fuzzySearchIndex, IndexItem, SearchIndex } from "@/lib/searchUtils";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

export default function SearchPanel({
	contentIndex,
}: {
	contentIndex: SearchIndex;
}) {
	const router = useRouter();

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

	return (
		<Sheet>
			<SheetTrigger className="fixed right-[-56px] top-32 z-10 flex h-[80px] w-[140px] -rotate-90 justify-center rounded-t-2xl bg-primary px-4 py-1 text-lg font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:right-[-30px]">
				Search
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-xl font-bold">Search</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<div className="flex w-full flex-col space-y-3">
					<Input
						type="search"
						placeholder="Type to search"
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<ScrollArea className="max-h-[1000px] w-full">
						<div className="flex flex-col space-y-2">
							{uniqueSearchResult.map((item) => (
								<div
									key={item.pageId}
									className="flex cursor-pointer flex-row items-center space-x-2 p-1 hover:rounded-md hover:bg-accent"
									onClick={() => {
										router.push(`${item.relativeLink}/${item.slug}`);
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
			</SheetContent>
		</Sheet>
	);
}
