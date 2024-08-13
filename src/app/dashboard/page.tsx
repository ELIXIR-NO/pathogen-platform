import { VaccinationStatistics } from "@/app/dashboard/vaccination-statistics";

export default function DashboardPage() {
	return (
		<section className="flex w-full flex-col space-y-6">
			<h1 className="text-3xl font-bold">Vaccination statistics in Norway</h1>
			<VaccinationStatistics />
		</section>
	);
}
