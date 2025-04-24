import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type CardGridData = {
	title: string;
	description: string;
	image: string;
	link: string;
};

export default function CardGrid({
	data,
	className = "",
}: {
	data: CardGridData[];
	className?: string;
}) {
	return (
		<div
			className={cn(
				"mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				className
			)}
		>
			{data.map((item) => (
				<Card
					key={item.title}
					className="flex h-full flex-col transition-shadow duration-300 hover:shadow-2xl"
				>
					<Link href={item.link} className="flex h-full flex-col">
						<CardHeader>
							<CardTitle className="text-left text-lg">{item.title}</CardTitle>
							<CardDescription></CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col items-center justify-center space-y-6">
							<Image
								src={item.image}
								alt={item.title}
								width={500}
								height={250}
								className="aspect-video self-center object-fill"
							/>
							<p className="text-justify text-sm">{item.description}</p>
						</CardContent>
					</Link>
				</Card>
			))}
		</div>
	);
}
