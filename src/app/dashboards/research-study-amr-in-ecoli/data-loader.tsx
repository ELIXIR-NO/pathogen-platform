import {
	extractUniqueCollections,
	extractUniquePhylogroups,
	extractUniqueSamples,
	getEcoliCSVData,
} from "@/lib/data/csvUtils";
import { SampleBarChart } from "./multi-region-resistance-line-charts";

export default async function DataLoader() {
	const records = await getEcoliCSVData();
	const samples = extractUniqueSamples(records);
	const collections = extractUniqueCollections(records);
	const phylogroups = extractUniquePhylogroups(records);

	return (
		<SampleBarChart
			collections={collections}
			phylogroups={phylogroups}
			samples={samples}
			data={records}
		/>
	);
}
