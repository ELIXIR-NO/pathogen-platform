import DashboardsPreview from "@/components/dashboards-preview";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";

export default function Home() {
	return (
		<main className="flex w-full flex-col gap-y-3">
			<div className="text-center text-3xl font-bold">
				Pathogen Portal Norway
			</div>
			<div className="text-justify">
				The portal provides information about available datasets, resources,
				tools, and services related to pandemic preparedness in Norway. The
				portal gives researchers, clinicians and policymakers access to an
				extensive collection of biomolecular data about pathogens. The Portal
				will also be the main access to the Norwegian Pathogen Data Hub which
				enables sharing pathogen data and their associated
				clinical/epidemiological metadata under controlled access.
			</div>
			<div className="flex flex-row rounded-lg bg-accent p-2">
				<div className="flex">
					<Info className="self-center stroke-primary" size={20} />
				</div>
				<Separator orientation="vertical" className="mx-3 bg-foreground" />
				<div>
					We are happy for any input and suggestions for relevant content that
					you think should be mentioned in the Portal. Contact us at{" "}
					<a href="contact@elixir.no" className="text-primary">
						contact@elixir.no
					</a>{" "}
					or use the contact form.
				</div>
			</div>
			<DashboardsPreview />
		</main>
	);
}
