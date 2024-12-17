export interface NormDataRecord {
	ProveAar: string;
	Opplegg: string;
	Mikrobe: string;
	Antibiotika: string;
	region: string;
	antall: number;
	Andel_R: number;
	Andel_S_I: number;
	antall_R: number;
	antall_S_I: number;
}

const DownloadCSV = (data: NormDataRecord[], fileName: string) => {
	const convertToCSV = (data: NormDataRecord[]) => {
		if (!data || data.length === 0) {
			return "";
		}

		const header = Object.keys(data[0]).join(",");
		const rows = data.map((row) =>
			Object.values(row)
				.map((value) => (typeof value === "string" ? `"${value}"` : value))
				.join(",")
		);
		return [header, ...rows].join("\n");
	};

	const csvContent = convertToCSV(data);
	const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.setAttribute("href", url);
	link.setAttribute("download", `${fileName}.csv`);
	link.click();
	URL.revokeObjectURL(url);
};

export default DownloadCSV;
