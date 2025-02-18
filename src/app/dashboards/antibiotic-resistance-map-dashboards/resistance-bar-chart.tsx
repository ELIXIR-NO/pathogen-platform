"use client";

import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { getColorScale } from "@/lib/data/colorScale";

interface SingleYearData {
	[year: number]: [number, number, number];
}

interface ResistanceData {
	[region: string]: SingleYearData;
}

interface ResistanceBarChartProps {
	resistanceData: ResistanceData;
	selectedYear: number;
}

export default function ResistanceBarChart({
	resistanceData,
	selectedYear,
}: ResistanceBarChartProps) {
	if (!resistanceData || Object.keys(resistanceData).length === 0) {
		return (
			<ResponsiveContainer width="100%" height={300}>
				<div className="flex h-full items-center justify-center text-gray-500">
					No data for the selected year.
				</div>
			</ResponsiveContainer>
		);
	}

	const chartData = Object.entries(resistanceData)
		.filter(([region, regionData]) => regionData[selectedYear] != null)
		.map(([region, regionData]) => {
			return {
				region,
				percentResistant: regionData[selectedYear][2],
			};
		});

	if (chartData.length === 0) {
		return (
			<ResponsiveContainer width="100%" height={300}>
				<div className="flex h-full items-center justify-center text-gray-500">
					No data for the selected year {selectedYear}.
				</div>
			</ResponsiveContainer>
		);
	}
	
	// Reformat the Oslo/Akershus label - too long to show both
	function formatRegionLabel(r: string) {
		const lower = r.toLowerCase();
		if (lower.includes("oslo") && lower.includes("akershus")) {
			return "Oslo";
		}
		return r.charAt(0).toUpperCase() + r.slice(1);
	}

	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart data={chartData}>
				<XAxis
					dataKey="region"
					tickFormatter={formatRegionLabel}
					tick={{ fontSize: 12 }}
				/>
				<YAxis domain={[0, 100]} />
				<Tooltip
					formatter={(value, name) =>
						name === "percentResistant"
							? `${(value as number).toFixed(1)}%`
							: value
					}
					labelFormatter={(label) => formatRegionLabel(label as string)}
				/>

				<Bar dataKey="percentResistant" name="% Resistant">
					{chartData.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={getColorScale(entry.percentResistant)}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}
