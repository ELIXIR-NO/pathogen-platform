import { Client } from "@notionhq/client";

const isDevelopment = process.env.NODE_ENV === "development";

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

export async function fetchAllPages() {
	if (isDevelopment) {
		console.log("Skipping Notion API call in development.");
		return []; // Return empty data to prevent API calls
	}

	try {
		const response = await notion.databases.query({
			database_id: process.env.NOTION_DB_ID!,
		});

		return response.results;
	} catch (error) {
		console.error("Error fetching Notion pages:", error);
		return [];
	}
}
