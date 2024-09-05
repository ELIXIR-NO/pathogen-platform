import Image from "next/image";
import ContributorsPanel from "@/components/contributors-panel";
import { DataTable } from "./_table/data-table";
import { resources } from "./_table/resources";
import { columns } from "./_table/columns";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const cardItems: {
	title: string;
	description: string;
	image: string;
	link: string;
}[] = [
	{
		title: "The Pathogens Portal",
		description:
			"A web portal for accessing open data on emerging and endemic pathogens. Developed and maintaned by EMBL-EBI.",
		image: "pathogens_logo.png",
		link: "https://www.pathogensportal.org/",
	},
	{
		title: "European Nucleotide Archive",
		description:
			"The European Nucleotide Archive (ENA) is a repository providing free and unrestricted access to annotated DNA and RNA sequences.",
		image: "ena-logo.png",
		link: "https://www.ebi.ac.uk/ena/browser/home",
	},
	{
		title: "DataverseNO",
		description:
			"DataverseNO is a national research data repository hosted by UiT The Arctic University of Norway. It allows researchers to store, share, and publish their research data in a secure and organized manner.",
		image: "dataverseno-logo.png",
		link: "https://dataverse.no/",
	},
];

export default function DatabasesPage() {
	return (
		<div>
			<ContributorsPanel contributors={["dorota", "erik"]} />
			<section className="flex flex-col space-y-6 text-justify">
				<h2 className="text-3xl font-bold">
					Databases and public repositories
				</h2>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Image
							src="/rdm/databases/databases-and-public-repositories.jpg"
							alt=""
							width={700}
							height={500}
							className="mx-auto rounded-md"
						/>
					</HoverCardTrigger>
					<HoverCardContent className="w-fit">
						Photo by{" "}
						<a
							href="https://unsplash.com/@pawel_czerwinski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Pawel Czerwinski
						</a>{" "}
						on{" "}
						<a
							href="https://unsplash.com/photos/a-black-and-white-photo-of-a-cross-in-the-middle-of-a-picture-WEizaiwLk1k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
							className="text-primary hover:underline"
						>
							Unsplash
						</a>
					</HoverCardContent>
				</HoverCard>
				<p>
					On this page you will find descriptions and links to databases and
					data repositories relevant for research on pathogen data. We have
					selected these resources because they are public and freely available.
				</p>

				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					{cardItems.map((item) => (
						<Card
							key={item.title}
							className="transition-shadow duration-300 hover:shadow-lg"
						>
							<CardHeader>
								<CardTitle className="text-lg">{item.title}</CardTitle>
								<CardDescription></CardDescription>
							</CardHeader>
							<CardContent>
								<a href={item.link}>
									<Image
										src={`/rdm/databases/${item.image}`}
										alt={item.title}
										width={300}
										height={150}
										className="aspect-video self-center object-fill"
									/>
									<p>{item.description}</p>
								</a>
							</CardContent>
						</Card>
					))}
				</div>
				<div>
					<h2 className="text-2xl font-bold">Recommended Databases</h2>
					<DataTable data={resources} columns={columns} />
				</div>
			</section>
		</div>
	);
}
