import {
	TabsWithUrlSync as Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs-modified";
import PathogenPortalContributors from "@/app/about/pathogen-portal-contributors";
import Partners from "@/app/about/partners";
import ContactUs from "@/app/about/contact-us";

export default function About() {
	return (
		<main>
			<Tabs defaultValue="people">
				<TabsList variant="underline">
					<TabsTrigger
						value="people"
						variant="underline"
						className="text-lg font-semibold"
					>
						People
					</TabsTrigger>
					<TabsTrigger
						value="partners"
						variant="underline"
						className="text-lg font-semibold"
					>
						Partners
					</TabsTrigger>
					<TabsTrigger
						value="contact-us"
						variant="underline"
						className="text-lg font-semibold"
					>
						Contact Us
					</TabsTrigger>
				</TabsList>
				<TabsContent value="people">
					<PathogenPortalContributors />
				</TabsContent>
				<TabsContent value="partners">
					<Partners />
				</TabsContent>
				<TabsContent value="contact-us">
					<ContactUs />
				</TabsContent>
			</Tabs>
		</main>
	);
}
