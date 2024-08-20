import {
	extractUniqueAntibiotics,
	extractUniqueMicrobes,
	extractUniqueRegions,
	getNormAtlasCSVData,
} from "@/lib/data/csvUtils";
import { ResistanceOccurrenceLineChart } from "./resistance-occurrence-line-chart";

export default async function DataLoader() {
	const records = await getNormAtlasCSVData();
	const microbes = extractUniqueMicrobes(records);
	const antibiotics = extractUniqueAntibiotics(records);
	const regions = extractUniqueRegions(records);

	return (
		<ResistanceOccurrenceLineChart
			microbes={microbes}
			antibiotics={antibiotics}
			regions={regions}
			data={records}
		/>
	);
}
