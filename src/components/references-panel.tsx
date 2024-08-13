import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Reference {
	referenceNumber: number;
	reference: string;
	pmcid: string;
	link: string;
}

interface ReferencesPanelProps {
	references: Reference[];
	className?: string;
}

export default function ReferencesPanel({
	references,
	className,
}: ReferencesPanelProps) {
	return (
		<Sheet>
			<SheetTrigger asChild className={cn(className)}>
				<Button variant="outline">References</Button>
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
