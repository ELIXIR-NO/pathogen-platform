import { fetchAllPages } from "@/lib/notion-utils";

import { ReactNode } from "react";

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	const isDevelopment = process.env.NODE_ENV === "development";

	// Only fetch Notion data in production
	const notionPages = isDevelopment ? [] : await fetchAllPages();

	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
