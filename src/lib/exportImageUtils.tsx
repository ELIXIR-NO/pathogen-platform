import * as htmlToImage from "html-to-image";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ChartDialog({
	open,
	onOpenChange,
	saveName,
	children,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	saveName: string;
	children: React.ReactNode;
}) {
	const [exportOptionsOpen, setExportOptionsOpen] = useState(false);

	const handleExport = (format: "png" | "svg", resolution: 1 | 2) => {
		exportChartImage("chart-dialog-id", format === "svg", saveName, resolution);
	};

	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className="max-w-screen h-screen">
					<DialogHeader>
						<DialogTitle>Grafvisualisering</DialogTitle>
					</DialogHeader>
					<div id="chart-dialog-id">{children}</div>
					<DialogFooter className="flex justify-between">
						<Button
							variant="outline"
							className="h-8 px-3 text-sm"
							onClick={() => setExportOptionsOpen(true)}
						>
							Eksport
						</Button>
						<DialogClose asChild>
							<Button variant="secondary" className="h-8 px-3 text-sm">
								Lukk
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<ExportOptionsDialog
				open={exportOptionsOpen}
				onOpenChange={setExportOptionsOpen}
				onConfirm={handleExport}
			/>
		</>
	);
}

export function ExportOptionsDialog({
	open,
	onOpenChange,
	onConfirm,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onConfirm: (format: "png" | "svg", resolution: 1 | 2) => void;
}) {
	const [format, setFormat] = useState<"png" | "svg">("png");
	const [resolution, setResolution] = useState<1 | 2>(1);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Eksporter graf</DialogTitle>
					<DialogDescription>Velg format og oppløsning:</DialogDescription>
				</DialogHeader>

				<div className="space-y-4">
					<div>
						<label className="mb-1 block text-sm font-medium">Format</label>
						<select
							value={format}
							onChange={(e) => setFormat(e.target.value as "png" | "svg")}
							className="w-full rounded border p-2"
						>
							<option value="png">PNG</option>
							<option value="svg">SVG</option>
						</select>
					</div>

					{format === "png" && (
						<div>
							<label className="mb-1 block text-sm font-medium">
								Resolution
							</label>
							<select
								value={resolution}
								onChange={(e) => setResolution(Number(e.target.value) as 1 | 2)}
								className="w-full rounded border p-2"
							>
								<option value={1}>Normal</option>
								<option value={2}>High</option>
							</select>
						</div>
					)}
				</div>

				<DialogFooter className="mt-4">
					<DialogClose asChild>
						<Button variant="ghost">Avbryt</Button>
					</DialogClose>
					<Button
						onClick={() => {
							onOpenChange(false);
							onConfirm(format, resolution);
						}}
					>
						Eksporter
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

function applyStylesToElements(node: HTMLElement) {
	const rootStyles = getComputedStyle(document.documentElement);

	function resolveVar(value: string): string {
		const match = value.match(/var\((--[^)]+)\)/);
		if (match) {
			const variableName = match[1];
			const variableValue = rootStyles.getPropertyValue(variableName).trim();
			if (variableValue) {
				return `hsl(${variableValue})`;
			}
		}
		return value;
	}

	const elements = node.querySelectorAll<HTMLElement>("*");

	elements.forEach((el) => {
		el.style.removeProperty("max-height");
		el.style.removeProperty("max-width");
		["fill", "stroke"].forEach((attr) => {
			const val = el.getAttribute(attr);
			if (val && val.includes("var(")) {
				el.setAttribute(attr, resolveVar(val));
			}
		});
	});
}

export async function exportChartImage(
	chartContainerId: string,
	asSVG = true,
	filename = "chart",
	pixelRatio = 1
) {
	const node = document.getElementById(chartContainerId);
	if (!node) {
		console.error("Chart element not found.");
		return;
	}

	applyStylesToElements(node);
	await new Promise((resolve) => setTimeout(resolve, 100));

	if (asSVG) {
		htmlToImage
			.toSvg(node)
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = `${filename}.svg`;
				link.href = dataUrl;
				link.click();
			})
			.catch((error) => console.error("Error exporting as SVG:", error));
	} else {
		htmlToImage
			.toPng(node, { quality: 1.0, pixelRatio })
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = `${filename}.png`;
				link.href = dataUrl;
				link.click();
			})
			.catch((error) => console.error("Error exporting as PNG:", error));
	}
}
