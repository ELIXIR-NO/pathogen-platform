import Link from "next/link";
import Image from "next/image";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { createSearchIndex, exactTagSearch } from "@/lib/searchUtils";
import { fetchAllPages } from "@/lib/notion-utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function HighlightPanel() {
	const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex(notionPages);
	const searchResults = exactTagSearch("Highlights", searchIndex);

	const contractSummary = (text: string) =>
		text.length > 180 ? text.slice(0, 180) + "..." : text;

	return (
		<Sheet>
			<SheetTrigger className="fixed right-[-56px] top-80 z-10 flex h-[45px] w-[140px] -rotate-90 justify-center rounded-t-2xl bg-primary px-4 py-1 text-lg font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:right-[-50px] md:h-[80px] md:hover:right-[-30px]">
				Highlights
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-xl font-bold">Highlights</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>

				<ScrollArea className="h-[90vh] rounded-md border p-4">
					<div className="flex flex-col space-y-3">
						{searchResults.length > 0 ? (
							searchResults.map((item) => (
								<Link
									key={item.pageId}
									href={`${item.relativeLink}/${item.slug}`}
								>
									<Card className="cursor-pointer transition-all duration-200 hover:shadow-md">
										<CardHeader>
											<CardTitle className="text-lg">{item.title}</CardTitle>
										</CardHeader>
										<CardContent className="flex flex-col">
											{item.imageUrl ? (
												<Suspense
													fallback={
														<div className="flex h-full w-full items-center justify-center bg-gray-200">
															Loading...
														</div>
													}
												>
													<Image
														src={item.imageUrl}
														alt={item.title}
														width={400}
														height={300}
														className="h-full w-full object-cover"
													/>
												</Suspense>
											) : (
												<div className="flex h-48 items-center justify-center rounded-md bg-gray-200">
													No image
												</div>
											)}
											<p className="mt-2 text-sm">
												{contractSummary(item.summary)}
											</p>
										</CardContent>
									</Card>
								</Link>
							))
						) : (
							<p className="text-center text-gray-500">No highlights found.</p>
						)}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
