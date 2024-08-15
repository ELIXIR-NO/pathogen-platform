import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { fetchAllPages } from "@/lib/notion-utils";

export interface IndexItem {
	pageId: string;
	title: string;
	relativeLink: string;
	slug: string;
	summary: string;
	tags: string[];
}

export interface SearchIndex {
	[key: string]: IndexItem | IndexItem[];
}

function levenshteinDistance(a: string, b: string): number {
	const matrix = [];

	for (let i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}

	for (let j = 0; j <= a.length; j++) {
		matrix[0][j] = j;
	}

	for (let i = 1; i <= b.length; i++) {
		for (let j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) == a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1,
					matrix[i][j - 1] + 1,
					matrix[i - 1][j] + 1
				);
			}
		}
	}

	return matrix[b.length][a.length];
}

export function createSearchIndex(pages: PageObjectResponse[]): SearchIndex {
	const searchIndex: SearchIndex = {};

	pages.forEach((page) => {
		const slug =
			page.properties.slug.type === "rich_text"
				? page.properties.slug.rich_text[0]?.plain_text || ""
				: "";

		const relativeLink =
			page.properties.relative_link.type === "rich_text"
				? page.properties.relative_link.rich_text[0]?.plain_text || ""
				: "";

		const tags =
			page.properties.tags.type === "multi_select"
				? page.properties.tags.multi_select.map((tag) => tag.name)
				: [];

		const summary =
			page.properties.summary.type === "rich_text"
				? page.properties.summary.rich_text[0]?.plain_text || ""
				: "";

		const title =
			page.properties.page.type === "title"
				? page.properties.page.title[0]?.plain_text || ""
				: "";

		const pageId = page.id;

		const indexItem: IndexItem = {
			pageId,
			title,
			relativeLink,
			slug,
			summary,
			tags,
		};

		searchIndex[slug] = indexItem;
		searchIndex[relativeLink] = indexItem;

		tags.forEach((tag) => {
			if (!searchIndex[tag]) {
				searchIndex[tag] = [];
			}
			(searchIndex[tag] as IndexItem[]).push(indexItem);
		});
	});

	return searchIndex;
}

export function fuzzySearchIndex(
	searchTerm: string,
	searchIndex: SearchIndex,
	threshold: number = 0.3
): IndexItem[] {
	const results: Set<IndexItem> = new Set();
	const searchTermLower = searchTerm.toLowerCase();

	Object.entries(searchIndex).forEach(([_key, value]) => {
		const checkSimilarity = (str: string) => {
			const distance = levenshteinDistance(searchTermLower, str.toLowerCase());
			return 1 - distance / Math.max(searchTermLower.length, str.length);
		};

		const addToResults = (item: IndexItem) => {
			if (
				checkSimilarity(item.slug) >= threshold ||
				checkSimilarity(item.relativeLink) >= threshold ||
				item.tags.some((tag) => checkSimilarity(tag) >= threshold)
			) {
				results.add(item);
			}
		};

		if (Array.isArray(value)) {
			value.forEach(addToResults);
		} else {
			addToResults(value);
		}
	});

	return Array.from(results);
}
