"use client";

import React from "react";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ title, showDetails = false }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<CristtinResults title={title} showDetails={showDetails} />
		</QueryClientProvider>
	);
}

function CristtinResults({ title, showDetails }) {
	const { isPending, error, data } = useQuery({
		queryKey: ["repoData"],
		queryFn: async () => {
			const response = await fetch(
				`https://api.cristin.no/v2/results?title=${title}&sort=year_published%20desc`
			);
			const results = await response.json();
			return results.slice(0, 5);
		},
	});

	if (isPending) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	return (
		<div className="mt-6 space-y-4">
			<h3 className="font-bold">
				Latest publications by{" "}
				<a
					href={`https://app.cristin.no/search.jsf?t=${title}&type=result&sort=PUBL_YEAR_DESC`}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					Cristin
				</a>
			</h3>
			{showDetails && data.length > 0 ? (
				data.map((item: any, index: number) => (
					<div key={index} className="rounded-lg border p-4">
						<h2 className="text-xl font-bold">
							{item.title.en || item.title.no}
						</h2>
						<p className="text-gray-700">Published in: {item.year_published}</p>
						<p className="text-gray-700">Journal: {item.journal?.name}</p>
						<p className="text-gray-700">
							Publisher: {item.journal?.publisher?.name}
						</p>
						<p className="mt-4">
							<a
								href={
									Array.isArray(item.links)
										? item.links.find((link) => link.url_type === "DOI")?.url ||
											"#"
										: "#"
								}
								className="text-blue-500 hover:underline"
							>
								{Array.isArray(item.links) &&
								item.links.find((link) => link.url_type === "DOI")
									? "View Article (DOI)"
									: "DOI Not Available"}
							</a>
						</p>
					</div>
				))
			) : (
				<div className="text-gray-700"></div>
			)}
		</div>
	);
}
