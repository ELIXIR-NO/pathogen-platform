"use client";

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export function ChartComponent({
	data,
	chartConfig,
}: {
	data: any;
	chartConfig: ChartConfig;
}) {
	return (
		<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
			<LineChart accessibilityLayer data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="year" tickLine={false} tickMargin={10} />
				<YAxis
					tickCount={10}
					type="number"
					label={{ value: "Andel (%)", angle: -90, position: "insideLeft" }}
					domain={[0, 100]}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent />} />
				<Line dataKey="value" fill="var(--color-value)" radius={4} />
			</LineChart>
		</ChartContainer>
	);
}
