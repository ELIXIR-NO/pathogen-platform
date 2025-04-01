import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

interface Region {
	region: string;
	description: string;
}

export const regions: Region[] = [
	{
		region: "Nord",
		description: "Nordland, Troms og Finnmark",
	},
	{
		region: "Midt ",
		description: "Trøndelag, Møre og Romsdal",
	},
	{
		region: "Vest",
		description: "Rogaland, Vestland",
	},
	{
		region: "Sør",
		description: "Agder, Telemark og Vestfold",
	},
	{
		region: "Øst",
		description: "Østfold, Buskerud, Innlandet",
	},
	{
		region: "Oslo/Akershus",
		description: "Oslo og Akershus",
	},
] as const;

export default function RegionsPanel() {
	return (
		<Sheet>
			<SheetTrigger className="fixed right-[-56px] top-80 z-10 flex h-[45px] w-[140px] -rotate-90 justify-center rounded-t-2xl bg-primary px-4 py-1 text-lg font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:right-[-50px] md:h-[80px] md:hover:right-[-30px]">
				Regionene
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-xl font-bold">Regionene</SheetTitle>
					<SheetDescription className="pb-4 text-sm text-black">
						I atlasene deles Norge inn i 6 regioner ut fra fylker:
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col space-y-6">
					{regions.map((region) => (
						<div
							key={region.region}
							className="flex flex-row items-center justify-start space-x-6"
						>
							<div className="flex flex-col">
								<p className="flex-grow text-justify text-lg font-semibold">
									{region.region}
								</p>
								<p className="flex-grow text-justify text-sm">
									{region.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
