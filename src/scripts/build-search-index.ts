import { SearchIndex, createSearchIndex } from "@/lib/searchUtils";
import { Client } from "@notionhq/client";
import { promises as fs } from "fs";
import path from "path";

async function main() {
	const notion = new Client({ auth: process.env.NOTION_API_SECRET! });
	const { results } = await notion.databases.query({
		database_id: process.env.NOTION_DB_ID!,
	});

	const index: SearchIndex = createSearchIndex(results as any[]);
	const outPath = path.join(process.cwd(), "public/search-index.json");
	await fs.writeFile(outPath, JSON.stringify(index, null, 2));
	console.log(
		`✔ wrote search-index.json (${Object.keys(index).length} entries)`
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
