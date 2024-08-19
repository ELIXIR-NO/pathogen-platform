import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
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
			<SheetTrigger className="fixed right-[-56px] top-[32rem] z-10 flex h-[80px] w-[140px] -rotate-90 justify-center rounded-t-2xl bg-primary px-4 py-1 text-lg font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:right-[-30px]">
				Contributors
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
								<a
									className="italic text-primary hover:underline"
									href={`mailto:${getEmailByAlias(contributor)}`}
								>
									{getEmailByAlias(contributor)}
								</a>
							</div>
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
