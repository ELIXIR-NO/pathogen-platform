export type NestedData = {
	[region: string]: {
		[year: number]: [number, number, number];
	};
};

export async function fetchSampleTypes(): Promise<string[] | null> {
	try {
		const response = await fetch("/data/json/sample-types.json");
		if (!response.ok) throw new Error("Couldn't get sample types");
		return await response.json();
	} catch (error) {
		console.error("Couldn't get sample types:", error);
		return null;
	}
}

export async function fetchFilteredMicrobes(
	sampleType: string
): Promise<string[] | null> {
	try {
		const response = await fetch("/data/json/filtered-microbes.json");
		if (!response.ok) throw new Error("Couldn't get filtered microbes");
		const data = await response.json();
		return data[sampleType] || [];
	} catch (error) {
		console.error("Couldn't get filtered microbes:", error);
		return null;
	}
}

export async function fetchFilteredAntibiotics(
	sampleType: string,
	microbe: string
): Promise<string[] | null> {
	try {
		const response = await fetch("/data/json/filtered-antibiotics.json");
		if (!response.ok) throw new Error("Couldn't get filtered antibiotics");
		const data = await response.json();
		return data[`${sampleType}-${microbe}`] || [];
	} catch (error) {
		console.error("Couldn't get filtered antibiotics:", error);
		return null;
	}
}

const normalizeString = (str: string) => str.toLowerCase().replace(/\//g, "-");

export async function fetchResistanceData(
	sampleType: string,
	microbe: string,
	antibiotic: string
): Promise<{ data: NestedData; years: number[] } | null> {
	try {
		const fileName = `${sampleType.toLowerCase()}-${microbe.toLowerCase().replace(/\s+/g, "_")}.json`;
		const response = await fetch(`/data/json/sampleType-microbe/${fileName}`);
		if (!response.ok) throw new Error("Couldn't get resistance data file");
		const json = await response.json();

		let antibioticKey = antibiotic;
		if (!json[antibioticKey]) {
			const normalizedAntibiotic = antibiotic
				.toLowerCase()
				.replace(/[\s\-\/]/g, "");
			for (const key in json) {
				if (
					key.toLowerCase().replace(/[\s\-\/]/g, "") === normalizedAntibiotic
				) {
					antibioticKey = key;
					break;
				}
			}
		}

		const antibioticData = json[antibioticKey];
		if (!antibioticData) throw new Error("Antibiotic key not found in data");

		const resistanceData: NestedData = {};
		const yearsSet = new Set<number>();
		for (const region in antibioticData) {
			const normalizedRegion = normalizeString(region);
			resistanceData[normalizedRegion] = {};
			for (const yearStr in antibioticData[region]) {
				const yearNum = parseInt(yearStr, 10);
				yearsSet.add(yearNum);
				resistanceData[normalizedRegion][yearNum] =
					antibioticData[region][yearStr];
			}
		}

		return {
			data: resistanceData,
			years: Array.from(yearsSet).sort((a, b) => a - b),
		};
	} catch (error) {
		console.error("Couldn't get resistance data:", error);
		return null;
	}
}

export async function fetchGeoJson(
	filename: string
): Promise<GeoJSON.FeatureCollection | null> {
	try {
		const response = await fetch(`/data/geojson/${filename}.geojson`);
		if (!response.ok) throw new Error("Couldn't get GeoJSON");
		return await response.json();
	} catch (error) {
		console.error("Couldn't get GeoJSON file:", error);
		return null;
	}
}
