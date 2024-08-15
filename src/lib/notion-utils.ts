import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
	auth: process.env.NOTION_API_SECRET,
});

const dbId = process.env.NOTION_DB_ID || "";
if (dbId === "") {
	throw new Error("Notion DB ID not set!! Check env var");
}

export async function getNotionPagesWithTag(tag: string) {
	const pages = await notion.databases.query({
		database_id: dbId,
		filter: {
			property: "tags",
			multi_select: {
				contains: tag,
			},
		},
	});

	return pages.results;
}

export async function fetchAllPages(): Promise<PageObjectResponse[]> {
	let allPages: PageObjectResponse[] = [];
	let cursor: string | undefined = undefined;

	while (true) {
		const response = await notion.databases.query({
			database_id: dbId,
			start_cursor: cursor,
		});

		allPages = allPages.concat(response.results as PageObjectResponse[]);

		if (!response.next_cursor) {
			break;
		}

		cursor = response.next_cursor;
	}

	return allPages;
}
