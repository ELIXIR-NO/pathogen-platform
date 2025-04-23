import { getNormAtlasCSVData } from "@/lib/data/csvUtils";
import AntibioticResistanceAndDiseasesDashboards3 from "../../antibiotic-resistance-and-diseases-dashboards-4/page";
import Atlas from "../atlas";
import { loadGeoJSON } from "@/lib/data/geojsonLoader";
import TabsNorm from "../tabsNorm";
import { Suspense } from "react";

export default async function DataLoader() {
	const data = await getNormAtlasCSVData();
	const geoData = await loadGeoJSON();

	return (
		<div className="-mx-[calc((100vw-75vw)/2)] mt-10 w-full w-screen pl-2 pr-16">
			<Atlas data={data} geoData={geoData} />
		</div>
	);
}
