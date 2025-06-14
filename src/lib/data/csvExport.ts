const DownloadCSV = <T extends Record<string, any>>(
	data: T[],
	fileName: string,
	useTabs: boolean = false
) => {
	const convertToDelimited = (data: T[], delimiter: string) => {
		if (!data || data.length === 0) {
			return "";
		}

		const header = Object.keys(data[0]).join(delimiter);
		const rows = data.map((row) =>
			Object.values(row)
				.map((value) => (typeof value === "string" ? `"${value}"` : value))
				.join(delimiter)
		);
		return [header, ...rows].join("\n");
	};

	const delimiter = useTabs ? "\t" : ",";
	const content = convertToDelimited(data, delimiter);

	const blob = new Blob([content], {
		type: useTabs ? "text/plain;charset=utf-8;" : "text/csv;charset=utf-8;",
	});

	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.setAttribute("href", url);
	link.setAttribute("download", `${fileName}.${useTabs ? "tsv" : "csv"}`);
	link.click();
	URL.revokeObjectURL(url);
};

export default DownloadCSV;
