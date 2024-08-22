import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export interface Reference {
	referenceNumber: number;
	reference: string;
	pmcid: string;
	link: string;
}

interface ReferencesPanelProps {
	references: Reference[];
}

export default function ReferencesPanel({ references }: ReferencesPanelProps) {
	return (
		<Sheet>
			<SheetTrigger className="fixed right-[-56px] top-[32rem] z-10 flex h-[80px] w-[140px] -rotate-90 justify-center rounded-t-2xl bg-primary px-4 py-1 text-lg font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:right-[-30px]">
				References
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-xl font-bold">References</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<div className="flex flex-col space-y-6 italic">
					{references.map((reference) => (
						<div key={reference.referenceNumber}>
							({reference.referenceNumber}) {reference.reference};
							<a href={reference.link} className="text-primary hover:underline">
								PMCID:{reference.pmcid}
							</a>
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
}
