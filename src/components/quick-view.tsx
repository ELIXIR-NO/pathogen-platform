import {
	createSearchIndex,
	exactTagSearch,
	fuzzySearchIndex,
	SearchIndex,
} from "@/lib/searchUtils";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchAllPages } from "@/lib/notion-utils";

export default async function QuickView() {
	const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex(notionPages);
	const covidPages = exactTagSearch("Covid-19", searchIndex);

	return (
		<div>
			<Carousel>
				<CarouselContent>
					{covidPages.map((item) => (
						<CarouselItem key={item.pageId} className="basis-1/3">
							<div className="w-full"></div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<pre>{JSON.stringify(covidPages, null, 2)}</pre>
		</div>
	);
}
