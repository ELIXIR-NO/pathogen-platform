export function getVaccinationStatisticsQuery(geoValue: string) {
	return {
		queryKey: ["vaccinationStatistics", geoValue],
		queryFn: async () => {
			const data = await fetch(
				"https://statistikk-data.fhi.no/api/open/v1/nokkel/Table/173/data",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({
						dimensions: [
							{
								code: "GEO",
								filter: "item",
								values: [geoValue],
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
					}),
				}
			);
			return await data.json();
		},
	};
}
