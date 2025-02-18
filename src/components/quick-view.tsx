import Link from "next/link";
import Image from "next/image";
import {
	createSearchIndex,
	exactTagSearch,
	relativeLinkSearch,
} from "@/lib/searchUtils";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchAllPages } from "@/lib/notion-utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ImageCredit = dynamic(() => import("./image-credit"), { ssr: false });

type SearchType = "tags" | "relativeLinks";

interface QuickViewProps {
	title: string;
	searchFor: SearchType;
	searchTerm: string;
}

export default async function QuickView({
	title,
	searchFor,
	searchTerm,
}: QuickViewProps) {
	const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex([]);

	let searchResults;
	if (searchFor === "tags") {
		searchResults = exactTagSearch(searchTerm, searchIndex);
	} else {
		searchResults = relativeLinkSearch(searchTerm, searchIndex);
	}

	const contractSummary = (text: string) => {
		if (text.length > 180) return text.slice(0, 180) + "...";
		return text;
	};

	return (
		<div className="p-6">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-bold">{title}</h2>
			</div>
			<Carousel className="w-full">
				<CarouselContent className="-ml-2 md:-ml-4">
					{searchResults.map((item) => (
						<CarouselItem
							key={item.pageId}
							className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
						>
							<Link href={`${item.relativeLink}/${item.slug}`}>
								<Card className="h-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
									<CardHeader>
										<CardTitle className="text-left text-lg">
											{item.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="flex flex-col">
										<div className="mb-4 h-48 w-full overflow-hidden rounded-md">
											{item.imageUrl ? (
												<Suspense
													fallback={
														<div className="flex h-full w-full items-center justify-center bg-gray-200">
															Loading...
														</div>
													}
												>
													<ImageCredit credits={item.imageCredit}>
														<Image
															src={item.imageUrl}
															alt={item.title}
															width={400}
															height={300}
															className="h-full w-full object-cover"
														/>
													</ImageCredit>
												</Suspense>
											) : (
												<div className="flex h-full w-full items-center justify-center bg-gray-200">
													No image
												</div>
											)}
										</div>
										<p className="flex-grow text-sm">
											{contractSummary(item.summary)}
										</p>
									</CardContent>
								</Card>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
