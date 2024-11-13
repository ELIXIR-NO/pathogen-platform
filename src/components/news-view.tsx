import Link from "next/link";
import Image from "next/image";
import { fetchAllPages } from "@/lib/notion-utils";
import { createSearchIndex, exactTagSearch, relativeLinkSearch } from "@/lib/searchUtils";

type SearchType = "tags" | "relativeLinks";

interface NewsViewProps {
  title: string;
  searchFor: SearchType;
  searchTerm: string;
}

export default async function NewsView({ title, searchFor, searchTerm }: NewsViewProps) {
    const notionPages = await fetchAllPages();
	const searchIndex = createSearchIndex(notionPages);

	let searchResults;
	if (searchFor === "tags") {
		searchResults = exactTagSearch(searchTerm, searchIndex);
	} else {
		searchResults = relativeLinkSearch(searchTerm, searchIndex);
	}

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="grid gap-4 grid-cols-1"> {/* Alterado para grid-cols-1 */}
        {searchResults.map((item) => (
          <div key={item.pageId} className="p-4 border rounded-md shadow hover:shadow-lg transition">
            <Link href={`${item.relativeLink}/${item.slug}`}>
              <div className="block">
                {item.imageUrl && (
                  <div className="mb-4 h-48 overflow-hidden rounded-md">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.title} 
                      width={400} 
                      height={300} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-justify">
                  {item.summary.length > 180 ? item.summary.slice(0, 180) + "..." : item.summary}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
