import { promises as fsPromises } from "fs";
import path from "node:path";

export interface GeoJson {
	type: string;
	features: GeoJsonFeature[];
}

interface GeoJsonFeature {
	type: string;
	properties: any;
	geometry: {
		type: string;
		coordinates: any;
	};
}

export async function loadGeoJSON(): Promise<GeoJson> {
	const filePath = path.join(
		process.cwd(),
		"public",
		"geojson",
		"counties.geojson"
	);

	try {
		const fileContent = await fsPromises.readFile(filePath, "utf8");
		return JSON.parse(fileContent);
	} catch (error) {
		console.error("Error to load GeoJSON file:", error);
		throw error;
	}
}
