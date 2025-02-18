"use client";

import { useState } from "react";
import { getColorScale } from "@/lib/data/colorScale";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const legendBins = [0, 0.75, 1.5, 3, 6, 12, 25, 50, 100];

export const Legend = ({
	showRegions,
	onToggleShowRegions,
	showCounties,
	onToggleShowCounties,
	onSelectResistance,
}: {
	showRegions: boolean;
	onToggleShowRegions: (value: boolean) => void;

	showCounties: boolean;
	onToggleShowCounties: (value: boolean) => void;

	onSelectResistance: (value: number | null) => void;
}) => {
	const [selectedBin, setSelectedBin] = useState<number | null>(null);

	return (
		<div className="w-full rounded-lg p-4 bg-white dark:bg-gray-800 sm:w-60">
			<h3 className="mb-2 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 sm:text-base">
				Resistance (%)
			</h3>

			<div className="mb-3 flex flex-col space-y-2">
				<label className="flex items-center space-x-2">
					<Checkbox
						checked={showCounties}
						onCheckedChange={(checked) =>
							onToggleShowCounties(checked === true)
						}
					/>
					<span>Show counties</span>
				</label>

				<label className="flex items-center space-x-2">
					<Checkbox
						checked={showRegions}
						onCheckedChange={(checked) => onToggleShowRegions(!!checked)}
					/>
					<span>Show regions</span>
				</label>
			</div>

			<div className="grid grid-cols-4 gap-1">
				{legendBins.map((bin) => (
					<div key={bin} className="flex flex-col items-center">
						<Button
							variant="outline"
							size="sm"
							className={`h-8 w-8 rounded-full ${
								selectedBin === bin ? "ring-2 ring-black dark:ring-white" : ""
							}`}
							style={{ backgroundColor: getColorScale(bin) }}
							onClick={() => {
								setSelectedBin(selectedBin === bin ? null : bin);
								onSelectResistance(selectedBin === bin ? null : bin);
							}}
						/>
						<span className="text-xs text-gray-900 dark:text-gray-100 sm:text-sm">
							{bin}%
						</span>
					</div>
				))}
			</div>

			<div className="mt-3 flex justify-between text-xs text-gray-900 dark:text-gray-100 sm:text-sm">
				<span>0%</span>
				<span>100%</span>
			</div>
		</div>
	);
};
