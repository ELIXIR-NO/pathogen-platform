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

export default async function QuickView({ tag }: { tag: string }) {
	const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex(notionPages);
	const covidPages = exactTagSearch(tag, searchIndex);

	return (
		<div>
			<h2 className="my-4 text-xl font-bold">{tag}</h2>
			<Carousel>
				<CarouselContent className="-ml-2 md:-ml-4">
					{covidPages.map((item) => (
						<CarouselItem key={item.pageId} className="basis-1/3 pl-2 md:pl-4">
							<Link href={`${item.relativeLink}/${item.slug}`}>
								<div className="flex flex-col">
									<div className="group relative h-[200px] w-full overflow-hidden">
										<div className="absolute inset-0 z-10">
											{item.imageUrl ? (
												<Image
													src={item.imageUrl}
													alt={item.title}
													width={300}
													height={200}
													style={{
														width: "100%",
														height: "100%",
														objectFit: "cover",
													}}
												/>
											) : (
												<div className="flex h-full w-full items-center justify-center bg-gray-200">
													No image
												</div>
											)}
										</div>
										<div className="absolute inset-0 z-20 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
										<div className="absolute inset-0 z-30 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
											<p className="text-center text-white">{item.summary}</p>
										</div>
									</div>
									<h3 className="truncate bg-primary text-center font-semibold text-primary-foreground">
										{item.title}
									</h3>
								</div>
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
