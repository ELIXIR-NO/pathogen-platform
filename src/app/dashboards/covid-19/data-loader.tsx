import {
	extractUniqueYears,
	getCovid19CSVData,
} from "@/lib/data/csvUtils";
import { Covid19LineChart } from "./multi-region-resistance-line-charts";

export default async function DataLoader() {
	const records = await getCovid19CSVData();
	const years = extractUniqueYears(records);
	
	return (
		<Covid19LineChart 
			years={years}
			data={records}
		/>
	);
  }