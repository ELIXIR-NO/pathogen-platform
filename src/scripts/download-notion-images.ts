import { Client } from "@notionhq/client";
import { promises as fs } from "fs";
import path from "path";

const notion = new Client({ auth: process.env.NOTION_API_SECRET! });
const DB_ID = process.env.NOTION_DB_ID!;
const OUT_DIR = path.join(process.cwd(), "public/notion-images");

async function main() {
	await fs.mkdir(OUT_DIR, { recursive: true });

	const { results } = await notion.databases.query({
		database_id: DB_ID,
	});

	for (const page of results as any[]) {
		const files = page.properties.card_image.files;
		if (!files?.[0]) continue;
		const file = files[0];
		const url = file.type === "file" ? file.file.url : file.external?.url;
		if (!url) continue;

		const res = await fetch(url);
		if (!res.ok) {
			console.warn(`⚠️ failed to download ${url}: ${res.status}`);
			continue;
		}

		const buffer = Buffer.from(await res.arrayBuffer());
		const ext = path.extname(new URL(url).pathname) || ".jpg";
		const filename = `${page.id}${ext}`;
		await fs.writeFile(path.join(OUT_DIR, filename), buffer);
		console.log(`✔ downloaded ${filename}`);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
