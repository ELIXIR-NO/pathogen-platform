import { getNormAtlasCSVData } from "@/lib/data/csvUtils";
import Atlas from "./atlas";

export default async function NormAtlas() {
	const data = await getNormAtlasCSVData();

	return (
		<div className="-mx-[calc((100vw-75vw)/2)] w-screen pl-2 pr-16">
			<Atlas data={data} />
		</div>
	);
}
