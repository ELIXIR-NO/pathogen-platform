import { getNewickDataToJson } from "@/lib/data//newick-loader";
import {
	extractUniqueFimType,
	extractUniqueLabels,
	extractUniquePhylogroupsAnno,
	getTreeNodeCSVData,
} from "@/lib/data/csvUtils";
import { MyChart } from "./chart";

export default async function DataLoader() {
	const treeData = await getNewickDataToJson();
	const annotationData = await getTreeNodeCSVData();
	const labels = await extractUniqueLabels(annotationData);
	const phylogroup = await extractUniquePhylogroupsAnno(annotationData);
	const fimtype = await extractUniqueFimType(annotationData);

	return (
		<MyChart
			data={treeData}
			annotations={annotationData}
			labels={labels}
			phylogroup={phylogroup}
			fimtype={fimtype}
		/>
	);
}
