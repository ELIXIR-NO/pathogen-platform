import { getNormAtlasCSVData } from "@/lib/data/csvUtils";
import Atlas from "./atlas";
import {
	Tabs,
	TabsTrigger,
	TabsList,
	TabsContent,
} from "@/components/ui/tabs-modified";
import AntibioticResistanceAndDiseasesDashboards3 from "../antibiotic-resistance-and-diseases-dashboards-4/page";

export default async function NormAtlas() {
	const data = await getNormAtlasCSVData();

	return (
		<Tabs defaultValue="atlas" className="w-full">
			<TabsList variant="underline">
				<TabsTrigger
					value="atlas"
					variant="underline"
					className="text-lg font-semibold text-gray-500 hover:text-foreground"
				>
					Atlas
				</TabsTrigger>
				<TabsTrigger
					value="trends"
					variant="underline"
					className="text-lg font-semibold text-gray-500 hover:text-foreground"
				>
					Trends
				</TabsTrigger>
			</TabsList>
			<TabsContent value="atlas">
				<div className="-mx-[calc((100vw-75vw)/2)] mt-10 w-screen pl-2 pr-16">
					<Atlas data={data} />
				</div>
			</TabsContent>
			<TabsContent value="trends" className="mt-10">
				<AntibioticResistanceAndDiseasesDashboards3 />
			</TabsContent>
		</Tabs>
	);
}
