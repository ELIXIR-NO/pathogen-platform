import { Client } from "@notionhq/client";
import type { DatabaseObjectResponse, PageObjectResponse } from "@notionhq/client";

export const notion = new Client({
	auth: process.env.NOTION_API_SECRET,
});

const dbId = process.env.NOTION_DB_ID || "";
if (dbId === "") {
	throw new Error("Notion DB ID not set!! Check env var");
}

let _dataSourceId: string | undefined;

async function getDataSourceId(): Promise<string> {
	if (_dataSourceId) return _dataSourceId;
	const db = await notion.databases.retrieve({ database_id: dbId });
	const ds = (db as DatabaseObjectResponse).data_sources?.[0];
	if (!ds) throw new Error(`No data source found for database ${dbId}`);
	_dataSourceId = ds.id;
	return _dataSourceId;
}

export async function getNotionPagesWithTag(tag: string) {
	const dsId = await getDataSourceId();
	const pages = await notion.dataSources.query({
		data_source_id: dsId,
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
	const dsId = await getDataSourceId();
	let allPages: PageObjectResponse[] = [];
	let cursor: string | undefined = undefined;

	while (true) {
		const response = await notion.dataSources.query({
			data_source_id: dsId,
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
