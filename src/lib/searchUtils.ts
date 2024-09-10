import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface IndexItem {
	pageId: string;
	title: string;
	relativeLink: string;
	slug: string;
	summary: string;
	oneLiner: string;
	imageUrl?: string;
	imageCredit: Array<{ text: string; href: string | null }>;
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
				? page.properties.summary.rich_text
						.map((textBlock) => textBlock.plain_text)
						.join("") || ""
				: "";

		const oneLiner =
			page.properties.one_liner.type === "rich_text"
				? page.properties.one_liner.rich_text
						.map((textBlock) => textBlock.plain_text)
						.join("") || ""
				: "";

		const title =
			page.properties.page.type === "title"
				? page.properties.page.title
						.map((textBlock) => textBlock.plain_text)
						.join("") || ""
				: "";

		const imageUrl =
			page.properties.card_image.type === "files"
				? page.properties.card_image.files[0]?.type === "file"
					? page.properties.card_image.files[0].file.url
					: page.properties.card_image.files[0]?.type === "external"
						? page.properties.card_image.files[0].external.url
						: ""
				: "";

		const imageCredit =
			page.properties.card_image_credit.type === "rich_text"
				? page.properties.card_image_credit.rich_text.map((textBlock) => ({
						text: textBlock.plain_text,
						href: textBlock.href,
					}))
				: [];

		const pageId = page.id;

		const indexItem: IndexItem = {
			pageId,
			title,
			relativeLink,
			slug,
			summary,
			oneLiner,
			imageUrl,
			imageCredit,
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

export function exactTagSearch(
	tag: string,
	searchIndex: SearchIndex
): IndexItem[] {
	const resultsSet = new Set<IndexItem>();

	const normalizedTag = tag.toLowerCase();

	Object.entries(searchIndex).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			if (key.toLowerCase() === normalizedTag) {
				value.forEach((item) => resultsSet.add(item));
			}
		} else {
			if (value.tags.some((t) => t.toLowerCase() === normalizedTag)) {
				resultsSet.add(value);
			}
		}
	});

	return Array.from(resultsSet);
}

export function exactSlugSearch(
	slug: string,
	searchIndex: SearchIndex
): IndexItem | null {
	const normalizedSlug = slug.toLowerCase();

	if (normalizedSlug in searchIndex) {
		const result = searchIndex[normalizedSlug];

		if (!Array.isArray(result)) {
			return result;
		}
	}

	for (const value of Object.values(searchIndex)) {
		if (Array.isArray(value)) {
			for (const item of value) {
				if (item.slug.toLowerCase() === normalizedSlug) {
					return item;
				}
			}
		} else {
			if (value.slug.toLowerCase() === normalizedSlug) {
				return value;
			}
		}
	}

	return null;
}

export function relativeLinkSearch(
	basePath: string,
	searchIndex: SearchIndex
): IndexItem[] {
	const results = new Map<string, IndexItem>();
	const normalizedBasePath = basePath.toLowerCase().replace(/^\/+|\/+$/g, "");

	Object.values(searchIndex).forEach((value) => {
		const processItem = (item: IndexItem) => {
			const normalizedRelativeLink = item.relativeLink
				.toLowerCase()
				.replace(/^\/+|\/+$/g, "");
			if (normalizedRelativeLink.includes(normalizedBasePath)) {
				results.set(item.pageId, item);
			}
		};

		if (Array.isArray(value)) {
			value.forEach(processItem);
		} else if (typeof value === "object" && value !== null) {
			processItem(value as IndexItem);
		}
	});

	return Array.from(results.values());
}
