import { getNormAtlasCSVData } from "@/lib/data/csvUtils";
import Atlas from "./atlas";

export default async function NormAtlas() {
	const data = await getNormAtlasCSVData();

	return <Atlas data={data} />;
}
