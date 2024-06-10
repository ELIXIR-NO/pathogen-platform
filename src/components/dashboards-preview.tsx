import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import Image from "next/image";

import { getNotionPagesWithTag } from "@/lib/notion-utils";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function DashboardsPreview() {
	const pandemicPreparednessPages = await getNotionPagesWithTag(
		"Pandemic preparedness"
	);

	const pandemicPreparednessDashboardItems = getDashboardDetails(
		pandemicPreparednessPages as PageObjectResponse[]
	);

	const covidPages = await getNotionPagesWithTag("Covid-19");
	const covidDashboardItems = getDashboardDetails(
		covidPages as PageObjectResponse[]
	);

	const infectiousDiseasesPages =
		await getNotionPagesWithTag("Infectious disease");
	const infectiousDiseasesDashboardItems = getDashboardDetails(
		infectiousDiseasesPages as PageObjectResponse[]
	).slice(0, 3);

	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="col-span-3">
				<h2 className="text-2xl font-semibold">Pandemic Preparedness</h2>
			</div>
			{pandemicPreparednessDashboardItems.map((it) => (
				<div key={it.id} className="h-full w-full">
					{DashBoardItem(it, it.id)}
				</div>
			))}
			<div className="col-span-3">
				<h2 className="text-2xl font-semibold">Covid 19</h2>
			</div>
			{covidDashboardItems.map((it) => (
				<div key={it.id} className="h-full w-full">
					{DashBoardItem(it, it.id)}
				</div>
			))}
			<div className="col-span-3">
				<h2 className="text-2xl font-semibold">Infectious Diseases</h2>
			</div>
			{infectiousDiseasesDashboardItems.map((it) => (
				<div key={it.id} className="h-full w-full">
					{DashBoardItem(it, it.id)}
				</div>
			))}
		</div>
	);
}

type PageSummary = {
	id: string;
	title: string;
	tags: string[];
	slug: string;
	relative_link: string;
	summary: string;
	image_url: string;
};

function DashBoardItem(item: PageSummary, key: string) {
	return (
		<Card key={key} className="h-full">
			<CardHeader>
				<Image src={item.image_url} width={360} height={180} alt="card-image" />
				<CardTitle className="text-center capitalize">{item.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-justify">{item.summary}</p>
			</CardContent>
			<CardFooter className="flex flex-row items-center justify-center">
				<Button className="relative">
					<Link href={`${item.relative_link}/${item.slug}`}>Read More</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}

// function DashBoardItem(item: PageSummary, key: string) {
//   return (
//     <div className='h-full rounded-xl border bg-card text-card-foreground shadow'>
//       <div>{item.title}</div>
//       <div>{item.summary}</div>
//       <div>{item.slug}</div>
//     </div>
//   );
// }

function getDashboardDetails(page: PageObjectResponse[]): PageSummary[] {
	return page.map((page: any) => ({
		id: page.id,
		title: page.properties?.page?.title[0]?.plain_text ?? "",
		tags: page.properties?.tags?.multi_select.map((tag: any) => tag.name) ?? [],
		slug: page.properties?.slug?.rich_text[0]?.plain_text ?? "",
		relative_link:
			page.properties?.relative_link?.rich_text[0]?.plain_text ?? "",
		summary: page.properties?.summary?.rich_text[0]?.plain_text ?? "",
		image_url: page.properties?.card_image?.files[0]?.file?.url ?? "",
	}));
}
