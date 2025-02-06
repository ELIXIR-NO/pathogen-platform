import {
	extractUniqueCollections,
	extractUniquePhylogroups,
	extractUniqueSamples,
	getEcoliCSVData,
} from "@/lib/data/csvUtils";
import { SampleBarChart } from "./multi-phylogroup-bar-charts";
import { getNewickDataToJson } from "@/lib/data//newick-loader";
import {
	extractUniqueFimType,
	extractUniqueLabels,
	extractUniquePhylogroupsAnno,
	getTreeNodeCSVData,
} from "@/lib/data/csvUtils";

export default async function DataLoader() {
	const records = await getEcoliCSVData();
	const samples = extractUniqueSamples(records);
	const collections = extractUniqueCollections(records);
	const phylogroups = extractUniquePhylogroups(records);
	// TOL Data
	const treeData = await getNewickDataToJson();
	const annotationData = await getTreeNodeCSVData();
	const labels = await extractUniqueLabels(annotationData);
	const phylogroup = await extractUniquePhylogroupsAnno(annotationData);
	const fimtype = await extractUniqueFimType(annotationData);

	return (
		<SampleBarChart
			collections={collections}
			phylogroups={phylogroups}
			samples={samples}
			data={records}
			TreeData={treeData}
			annotations={annotationData}
			labels={labels}
			phylogroup={phylogroup}
			fimtype={fimtype}
		/>
	);
}
