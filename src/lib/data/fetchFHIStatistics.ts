export interface FHIVaccinationApiResponse {
	dimension: {
		GEO: {
			category: {
				index: string[];
				label: { [key: string]: string };
			};
		};
		AAR: {
			category: {
				index: string[];
				label: { [key: string]: string };
			};
		};
		MEASURE_TYPE: {
			category: {
				index: string[];
				label: { [key: string]: string };
			};
		};
	};
	value: number[];
}

export interface SimplifiedData {
	location: { [key: string]: string };
	years: string[];
	rates: number[];
	ratios: number[];
}

interface LocationNode {
	label: string;
	value: string;
	children?: LocationNode[];
}

interface Dimension {
	code: string;
	label: string;
	categories: LocationNode[];
}

interface LocationResult {
	id: string;
	location: string;
}

export interface FHIVaccinationStatisticsDimensionsAPIResponse {
	dimensions: Dimension[];
}

export function getFHIVaccinationStatisticsLocations(
	data: FHIVaccinationStatisticsDimensionsAPIResponse
): LocationResult[] {
	let result: LocationResult[] = [];
	const traverse = (node: LocationNode): void => {
		if (node.value && node.label) {
			result.push({ id: node.value, location: node.label });
		}
		if (node.children && node.children.length > 0) {
			node.children.forEach(traverse);
		}
	};

	const geoDimension = data.dimensions.find((dim) => dim.code === "GEO");
	if (geoDimension && geoDimension.categories) {
		geoDimension.categories.forEach(traverse);
	}

	return result;
}

export async function getFHIVaccinationStatistics(
	locationCode: string
): Promise<object> {
	const url = `https://statistikk-data.fhi.no/api/open/v1/nokkel/Table/173/data`;
	const requestBody = {
		dimensions: [
			{
				code: "GEO",
				filter: "item",
				values: [locationCode],
			},
			{
				code: "AAR",
				filter: "item",
				values: [
					"2016_2016",
					"2017_2017",
					"2018_2018",
					"2019_2019",
					"2020_2020",
					"2021_2021",
					"2022_2022",
					"2023_2023",
				],
			},
			{
				code: "MEASURE_TYPE",
				filter: "item",
				values: ["RATE", "SMR"],
			},
		],
		response: {
			format: "json-stat2",
			maxRowCount: 1000,
		},
	};

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(requestBody),
	});

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	return await response.json();
}

export function convertFHIVaccinationStatsFromJsonStatsToSimpleObject(
	response: FHIVaccinationApiResponse
): SimplifiedData {
	const location = response.dimension.GEO.category.label;
	const years = response.dimension.AAR.category.index.map(
		(year) => response.dimension.AAR.category.label[year]
	);

	const measureTypes = response.dimension.MEASURE_TYPE.category.index;
	const rateIndex = measureTypes.indexOf("RATE");
	const ratioIndex = measureTypes.indexOf("SMR");

	const rates: number[] = [];
	const ratios: number[] = [];

	for (let i = 0; i < years.length; i++) {
		rates.push(response.value[i * 2 + rateIndex]);
		ratios.push(response.value[i * 2 + ratioIndex]);
	}

	return {
		location,
		years,
		rates,
		ratios,
	};
}
