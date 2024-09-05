import QuickView from "@/components/quick-view";

export default function TopicsPage() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<QuickView title="Topics" searchFor="relativeLinks" searchTerm="topics" />
		</section>
	);
}
