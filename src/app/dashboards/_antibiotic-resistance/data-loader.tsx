import {
	extractUniqueAntibiotics,
	extractUniqueMicrobes,
	extractUniqueRegions,
	getNormAtlasCSVData,
} from "@/lib/data/csvUtils";
import { MultiRegionResistanceLineCharts } from "./multi-region-resistance-line-charts";

export default async function DataLoader() {
	const records = await getNormAtlasCSVData();
	const microbes = extractUniqueMicrobes(records);
	const antibiotics = extractUniqueAntibiotics(records);
	const regions = extractUniqueRegions(records);

	return (
		<MultiRegionResistanceLineCharts
			microbes={microbes}
			antibiotics={antibiotics}
			regions={regions}
			data={records}
		/>
	);
}