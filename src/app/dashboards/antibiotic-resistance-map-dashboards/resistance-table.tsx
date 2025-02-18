"use client";

import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "@/components/ui/table";
import { ResponsiveContainer } from "recharts";

interface SingleYearData {
	[year: number]: [number, number, number];
}

export interface ResistanceData {
	[region: string]: SingleYearData;
}

interface ResistanceTableProps {
	resistanceData: ResistanceData;
	selectedYear: number;
}

export default function ResistanceTable({
	resistanceData,
	selectedYear,
}: ResistanceTableProps) {
	if (!resistanceData || Object.keys(resistanceData).length === 0) {
		return (
			<ResponsiveContainer width="100%" height={300}>
				<div className="flex h-full items-center justify-center text-gray-500">
					No data available
				</div>
			</ResponsiveContainer>
		);
	}

	let rows = Object.entries(resistanceData).filter(([region, regionData]) => {
		return regionData[selectedYear] != null;
	});

	if (rows.length === 0) {
		return (
			<ResponsiveContainer width="100%" height={300}>
				<div className="flex h-full items-center justify-center text-gray-500">
					No data available for year {selectedYear}.
				</div>
			</ResponsiveContainer>
		);
	}

	// rows.sort(([rA], [rB]) => rA.localeCompare(rB));

	rows.sort(
		([, dataA], [, dataB]) => dataB[selectedYear][2] - dataA[selectedYear][2]
	);

	return (
		<div className="overflow-x-auto">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Region</TableHead>
						<TableHead>Total</TableHead>
						<TableHead>Resistant (n)</TableHead>
						<TableHead>Resistant (%)</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{rows.map(([regionName, regionData]) => {
						const [total, resistant, percent] = regionData[selectedYear];

						function formatRegionName(regionName: string) {
							if (regionName.toLowerCase() === "oslo-akershus") {
								return "Oslo-Akershus";
							}

							return regionName.charAt(0).toUpperCase() + regionName.slice(1);
						}

						return (
							<TableRow key={regionName}>
								<TableCell>{formatRegionName(regionName)}</TableCell>
								<TableCell>{total}</TableCell>
								<TableCell>{resistant}</TableCell>
								<TableCell>{percent.toFixed(1)}%</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}
