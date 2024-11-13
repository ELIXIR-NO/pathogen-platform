import QuickView from "@/components/quick-view";
import NewsView from "@/components/news-view";

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-y-3">
      <NewsView title="News" searchFor="tags" searchTerm="News" />
    </main>
  );
}
