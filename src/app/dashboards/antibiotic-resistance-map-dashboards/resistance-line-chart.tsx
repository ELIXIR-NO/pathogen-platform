"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { useState } from "react";

type SingleRegionData = {
	[year: number]: [number, number, number];
};

export interface ResistanceData {
	[region: string]: SingleRegionData;
}

interface MultiRegionLineChartProps {
	resistanceData: ResistanceData;
	onRegionClick?: (region: string) => void;
}

export default function MultiRegionLineChart({
	resistanceData,
	onRegionClick,
}: MultiRegionLineChartProps) {
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

	const allYears = new Set<number>();
	for (const regionData of Object.values(resistanceData)) {
		for (const yearStr of Object.keys(regionData)) {
			allYears.add(Number(yearStr));
		}
	}
	const sortedYears = Array.from(allYears).sort((a, b) => a - b);

	const chartData = sortedYears.map((yearNum) => {
		const row: Record<string, number | undefined> = { year: yearNum };
		for (const [regionName, regionData] of Object.entries(resistanceData)) {
			const dataForYear = regionData[yearNum];
			if (dataForYear) {
				row[regionName] = dataForYear[2];
			} else {
				row[regionName] = undefined;
			}
		}
		return row;
	});

	const chartRegions = Object.keys(resistanceData);

	if (!chartRegions.length) {
		return (
			<ResponsiveContainer width="100%" height={300}>
				<div className="flex h-full items-center justify-center text-gray-500">
					No data available
				</div>
			</ResponsiveContainer>
		);
	}

	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart data={chartData}>
				<XAxis dataKey="year" type="number" domain={["dataMin", "dataMax"]} />
				<YAxis domain={[0, 100]} />
				<Tooltip />
				<Legend />

				{chartRegions.map((regionName) => {
					const strokeWidth = regionName === selectedRegion ? 4 : 2;
					const colorMap: Record<string, string> = {
						north: "#fdc527",
						central: "#f89540",
						west: "#e66c5c",
						south: "#cc4778",
						east: "#aa2395",
						"oslo-akershus": "#7e03a8",
						norway: "#0d0887",
					};

					return (
						<Line
							key={regionName}
							type="monotone"
							dataKey={regionName}
							stroke={colorMap[regionName] || "#ccc"}
							strokeWidth={strokeWidth}
							dot={false}
							connectNulls={false}
							activeDot={{ r: 6 }}
							onClick={() => {
								setSelectedRegion((prev) =>
									prev === regionName ? null : regionName
								);
								if (onRegionClick) {
									onRegionClick(regionName);
								}
							}}
						/>
					);
				})}
			</LineChart>
		</ResponsiveContainer>
	);
}
