import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Contributor {
	name: string;
	alias: string;
	email: string;
	github?: string;
	twitter?: string;
	linkedin?: string;
}

export const CONTRIBUTORS: Contributor[] = [
	{
		name: "Erik Hjerde",
		alias: "erik",
		email: "erik.hjerde@uit.no",
	},
	{
		name: "Espen Åberg",
		alias: "espen",
		email: "espen.aberg@uit.no",
	},
	{
		name: "Terje Klemetsen",
		alias: "terje",
		email: "terje.klemetsen@uit.no",
	},
	{
		name: "Peter Wilfred Kovachich",
		alias: "peter",
		email: "peter.w.kovachich@uit.no",
	},
	{
		name: "Sebastian Petters",
		alias: "sebastian",
		email: "sebastian.petters@uit.no",
	},
	{
		name: "Dorota Julia Buczek",
		alias: "dorota",
		email: "dorota.j.buczek@uit.no",
	},
] as const;

function getEmailByAlias(alias: string) {
	const contributor = CONTRIBUTORS.find((it) => it.alias === alias);
	return contributor ? contributor.email : null;
}

function getNameByAlias(alias: string) {
	const contributor = CONTRIBUTORS.find((it) => it.alias === alias);
	return contributor ? contributor.name : null;
}

export default function ContributorsPanel({
	contributors,
}: {
	contributors: string[];
}) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Contributors</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-xl font-bold">Contributors</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<div className="flex flex-col space-y-6">
					{contributors.map((contributor) => (
						<div
							key={contributor}
							className="flex flex-row items-center justify-start space-x-6"
						>
							<Avatar>
								<AvatarImage src={`/people/${contributor}.jpg`} />
								<AvatarFallback>{contributor[0]}</AvatarFallback>
							</Avatar>
							<div className="flex flex-col">
								<p className="font-bold">{getNameByAlias(contributor)}</p>
								<p className="italic">{getEmailByAlias(contributor)}</p>
							</div>
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
