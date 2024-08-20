import DataLoader from "@/app/dashboards/_antibiotic-resistance/data-loader";

export default function DashboardPage() {
	return (
		<section className="flex w-full flex-col space-y-6">
			<h1 className="text-3xl font-bold">Resistance Occurrence in Norway</h1>
			<DataLoader />
		</section>
	);
}
