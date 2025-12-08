import QuickView from "@/components/quick-view";
import { Suspense } from "react";

export default function DashboardPage() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<h1 className="text-3xl font-bold">Dashboards</h1>
			<p>
				The dashboards are pages where data from external resources are pulled
				in and plotted as graphs with options for filtering the data. The added
				value of the dashboards in the Pathogens Portal Norway are that data
				from multiple resources can be combined and visualised in a single plot.
				Also, the original data sources have data for multiple purposes. In the
				Pathogen Portal, the data has been filtered for a specific topic and put
				into to a context.
			</p>
			<Suspense>
				<QuickView
					title="Dashboards"
					searchFor="relativeLinks"
					searchTerm="dashboards"
				/>
			</Suspense>
		</section>
	);
}
