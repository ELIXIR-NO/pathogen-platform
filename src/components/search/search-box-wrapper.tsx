import { SearchBox } from "@/components/search/search-box";
import { createSearchIndex } from "@/lib/searchUtils";
import { fetchAllPages } from "@/lib/notion-utils";

export default async function SearchBoxWrapper() {
	const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex(notionPages);

	return <SearchBox contentIndex={searchIndex} />;
}
