import Link from "next/link";
import Image from "next/image";
import { createSearchIndex, exactTagSearch } from "@/lib/searchUtils";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchAllPages } from "@/lib/notion-utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function QuickView({ tag }: { tag: string }) {
	const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex(notionPages);
	const taggedPages = exactTagSearch(tag, searchIndex);

	const contractSummary = (text: string) => {
		if (text.length > 180) return text.slice(0, 180) + "...";
		return text;
	};

	return (
		<div className="p-6">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-bold">{tag}</h2>
			</div>
			<Carousel className="w-full">
				<CarouselContent className="-ml-2 md:-ml-4">
					{taggedPages.map((item) => (
						<CarouselItem
							key={item.pageId}
							className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
						>
							<Link href={`${item.relativeLink}/${item.slug}`}>
								<Card className="h-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
									<CardHeader>
										<CardTitle>{item.title}</CardTitle>
									</CardHeader>
									<CardContent className="flex flex-col">
										<div className="mb-4 h-48 w-full overflow-hidden rounded-md">
											{item.imageUrl ? (
												<Image
													src={item.imageUrl}
													alt={item.title}
													width={400}
													height={300}
													className="h-full w-full object-cover"
												/>
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
