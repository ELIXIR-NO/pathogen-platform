"use client";

import React, {
	useRef,
	useState,
	useCallback,
	useEffect,
	useMemo,
	forwardRef,
	useImperativeHandle,
} from "react";
import * as d3 from "d3";
import { TreeNode } from "@/lib/data/newick-loader";
import { AnnTreeNodeRecord } from "@/lib/data/csvUtils";

declare module "d3" {
	interface HierarchyNode<Datum> {
		linkExtensionNode?: SVGPathElement;
		linkNode?: SVGPathElement;
		radius?: number;
	}
}

declare module "d3" {
	interface HierarchyLink<Datum> {
		linkExtensionNode?: SVGPathElement;
		linkNode?: SVGPathElement;
		radius?: number;
	}
}

const useWindowSize = () => {
	const [size, setSize] = useState<{ width: number; height: number }>({
		width: 1000,
		height: 800,
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleResize = () => {
			setSize({ width: window.innerWidth, height: window.innerHeight });
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return size;
};

const calculateDynamicRadius = (node: TreeNode): number => {
	const countLeaves = (node: TreeNode): number => {
		if (!node.branchset || node.branchset.length === 0) {
			return 1;
		}
		return node.branchset.reduce((sum, child) => sum + countLeaves(child), 0);
	};

	const totalLeaves = countLeaves(node);
	const baseRadius = 500;
	const radiusPerLeaf = 3.2;

	return baseRadius + totalLeaves * radiusPerLeaf;
};

export interface MyChartProps {
	data: TreeNode | null;
	annotations: AnnTreeNodeRecord[];
	labels: number[];
	phylogroup: string[];
	fimtype: number[];
	validNodes: string[];
	selectedAnnotations: string[];
}

export const MyChart = forwardRef<SVGSVGElement, MyChartProps>(
	(
		{
			data,
			annotations,
			labels,
			phylogroup,
			fimtype,
			validNodes,
			selectedAnnotations,
		}: {
			data: TreeNode | null;
			annotations: AnnTreeNodeRecord[];
			labels: number[];
			phylogroup: string[];
			fimtype: number[];
			validNodes: string[];
			selectedAnnotations: string[];
		},
		ref: React.Ref<SVGSVGElement>
	) => {
		const chartRef = useRef(null);
		const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(
			null
		);
		const currentTransform = useRef(d3.zoomIdentity);

		const { width, height } = useWindowSize();

		const [showLength, setShowLength] = useState(true);

		useImperativeHandle(ref, () => chartRef.current!);

		useMemo(() => {
			if (!data || !chartRef.current)
				return d3.select(chartRef.current).selectAll("g").remove();

			const outerRadius = calculateDynamicRadius(data);
			const innerRadius = outerRadius - 170;

			d3.select(chartRef.current).selectAll("g").remove();

			const svgg = d3.select(chartRef.current).append("g");

			const chart = svgg.append("g");

			const zoom: d3.ZoomBehavior<SVGSVGElement, unknown> = d3
				.zoom<SVGSVGElement, unknown>()
				.scaleExtent([0.15, 3])
				.on("zoom", (event) => {
					currentTransform.current = event.transform;
					svgg.attr("transform", event.transform);
				});

			d3.select<SVGSVGElement, unknown>(chartRef.current).call(zoom);
			zoomRef.current = zoom;

			d3.select<SVGSVGElement, unknown>(chartRef.current).call(
				zoom.transform,
				currentTransform.current
			);

			const graphWidth = outerRadius * 2.9;
			const graphHeight = outerRadius * 2.9;

			console.log("data:", data);

			const scaleX = width / graphWidth;
			const scaleY = height / graphHeight;
			const scale = Math.min(scaleX, scaleY);

			const initialTransform = d3.zoomIdentity
				.translate(width / 2.9, height / 2)
				.scale(scale);

			d3.select<SVGSVGElement, unknown>(chartRef.current).call(
				zoom.transform,
				initialTransform
			);

			currentTransform.current = initialTransform;

			svgg.append("style").text(`

				
				.link--active {
					stroke: black !important;
					stroke-width: 3.5px !important;
					opacity:1 !important;
				}

				.link-extension--active {
					stroke-opacity: 1;
				}

				.label--active {
					font-weight: bold;
				}

				.tooltip {
					font-size: 16px;
					color: black;
					background: rgba(255, 255, 255, 0.8);
					border-radius: 8px;
					padding: 10px;
					pointer-events: none;
				}
				
				.path_click {
					stroke: black;
					stroke-width: 10;
					fill: none;
					opacity:0;
				}
				.annotations text {
					fill: #333;
					font-family: Arial, sans-serif;
					font-size: 12px;
				}
		`);

			const cluster = d3
				.cluster<TreeNode>()
				.size([350, innerRadius])
				.separation((a, b) => 1);

			const root = d3
				.hierarchy<TreeNode>(data, (d) => d.branchset)
				.sum((d) => (d.branchset ? 0 : 1))
				.sort(
					(a, b) =>
						a.value! - b.value! || d3.ascending(a.data.length, b.data.length)
				);

			root.descendants().forEach((node) => {
				if (node.data.name && validNodes.includes(node.data.name)) {
					node.children = node.children;
					node.children = undefined;
				}
			});

			cluster(root);
			setRadius(root, (root.data.length = 0), innerRadius / maxLength(root));

			const mouseovered = (active: boolean) => {
				return (
					event: React.MouseEvent<SVGPathElement, MouseEvent>,
					d: d3.HierarchyNode<TreeNode> | d3.HierarchyLink<TreeNode>
				) => {
					const node = d as d3.HierarchyNode<TreeNode>;
					const link = d as d3.HierarchyLink<TreeNode>;

					const target = event.currentTarget;
					let totalLeaves = 0;
					let text = "";

					const nameValue =
						(node.data && node.data.name) ||
						(link.target && link.target.data && link.target.data.name) ||
						"";
					const lengthValue =
						(node.data && node.data.length) ||
						(link.target && link.target.data && link.target.data.length) ||
						0;

					const hierarchyNode = link.target || link.source || node;

					d3.select(target).classed("label--active", active);

					if (
						hierarchyNode.descendants &&
						typeof hierarchyNode.descendants === "function"
					) {
						const descendants = hierarchyNode.descendants();

						totalLeaves = descendants.filter(
							(descendant: d3.HierarchyNode<TreeNode>) =>
								descendant.children == null || descendant.children.length === 0
						).length;

						if (active) {
							descendants.forEach((descendant: d3.HierarchyNode<TreeNode>) => {
								if (descendant.linkNode) {
									d3.select(descendant.linkNode)
										.classed("link--active", true)
										.raise();
								}
							});
						} else {
							d3.selectAll(".link--active").classed("link--active", false);
						}
					} else {
						console.error("No method `descendants`:", hierarchyNode);
					}

					if (active) {
						if (totalLeaves === 1) {
							text = `<h1><strong>Node Information</strong></h1><strong>Name:</strong> ${nameValue}<br><strong>Length:</strong> ${lengthValue}<br>`;
						} else {
							text = `<h1><strong>Node Information</strong></h1><strong>Name:</strong> ${nameValue}<br><strong>Length:</strong> ${lengthValue}<br><strong>Leaves:</strong> ${totalLeaves}<br>`;
						}
						tooltip
							.style("visibility", "visible")
							.html(text)
							.style("top", event.pageY + 5 + "px")
							.style("left", event.pageX + 5 + "px");
					} else {
						tooltip.style("visibility", "hidden");
					}
				};
			};

			const linkExtension = chart
				.append("g")
				.attr("fill", "none")
				.attr("stroke", "#000")
				.attr("stroke-opacity", 0.25)
				.selectAll("path")
				.data(root.links().filter((d) => !d.target.children))
				.join("path")
				.each(function (d: d3.HierarchyLink<TreeNode>) {
					console.log("d:", d);
					d.target.linkExtensionNode = this as SVGPathElement;
				})
				.attr("d", linkExtensionConstant);

			const link = chart
				.append("g")
				.attr("fill", "none")
				.attr("stroke", "black")
				.selectAll("path")
				.data(root.links())
				.join("path")
				.each(function (d: d3.HierarchyLink<TreeNode>) {
					d.target.linkNode = this as SVGPathElement;
				})
				.attr("d", linkConstant);

			const active = chart
				.append("g")
				.selectAll("path")
				.data(root.links())
				.join("path")
				.each(function (d: d3.HierarchyLink<TreeNode>) {
					d.target.linkNode = this as SVGPathElement;
				})
				.attr("d", linkConstant)
				.attr("class", "path_click")
				.on("mouseover", mouseovered(true))
				.on("mouseout", mouseovered(false));

			const tooltip = d3
				.select("body")
				.append("div")
				.attr("class", "tooltip")
				.style("position", "absolute")
				.style("visibility", "hidden")
				.style("background-color", "#fff")
				.style("border", "1px solid #ccc")
				.style("padding", "5px")
				.style("border-radius", "4px");

			const t = d3.transition().duration(750);
			linkExtension
				.transition(t)
				.attr("d", showLength ? linkExtensionVariable : linkExtensionConstant);
			link.transition(t).attr("d", showLength ? linkVariable : linkConstant);
			active.transition(t).attr("d", showLength ? linkVariable : linkConstant);

			const active2 = chart
				.append("g")
				.selectAll("text")
				.data(root.leaves())
				.join("text")
				.attr("dy", ".31em")
				.attr(
					"transform",
					(d: d3.HierarchyNode<TreeNode>) =>
						`rotate(${d.x! - 90}) translate(${innerRadius + 4},0)${
							d.x! < 180 ? "" : " rotate(180)"
						}`
				)
				.attr("text-anchor", (d: d3.HierarchyNode<TreeNode>) =>
					d.x! < 180 ? "start" : "end"
				)
				.text((d: d3.HierarchyNode<TreeNode>) => d.data.name || "")
				.attr("font-family", "sans-serif")
				.on("mouseover", mouseovered(true))
				.on("mouseout", mouseovered(false));

			const labelColorMap = new Map<number, string>();
			const phylogroupColorMap = new Map();
			const fimTypeColorMap = new Map();

			const generateColors = (count: number) => {
				const scale = d3
					.scaleSequential(d3.interpolateRainbow)
					.domain([0, count - 1]);
				return d3.range(count).map(scale);
			};

			const labelColors = generateColors(labels.length);
			const phylogroupColors = generateColors(phylogroup.length + 1);
			const fimTypeColors = generateColors(fimtype.length + 1);

			labels.forEach((label, index) => {
				labelColorMap.set(label, labelColors[index]);
			});

			phylogroup.forEach((phylogroup, index) => {
				phylogroupColorMap.set(phylogroup, phylogroupColors[index + 1]);
			});

			fimtype.forEach((fimType, index) => {
				fimTypeColorMap.set(fimType, fimTypeColors[index + 1]);
			});

			type Annotation = {
				ST: number;
				Phylogroup: string;
				fimH: number;
				blaCTXM1: number;
				blaCTXM3: number;
				blaCTXM8: number;
				blaCTXM14: number;
				blaCTXM15: number;
				blaCTXM24: number;
				blaCTXM27: number;
				blaCTXM32: number;
				blaCTXM55: number;
				blaCTXM101: number;
				blaCTXM104: number;
				blaSHV12: number;
				blaCMY2: number;
				blaIMP26: number;
				blaOXA181: number;
			};

			type AnnotationMap = Map<string, Annotation>;

			const annotationMap: AnnotationMap = new Map(
				annotations.map((a: AnnTreeNodeRecord) => [
					a.Node,
					{
						ST: a.ST,
						Phylogroup: a.Phylogroup,
						fimH: a.fimH,
						blaCTXM1: a["blaCTX-M-1"],
						blaCTXM3: a["blaCTX-M-3"],
						blaCTXM8: a["blaCTX-M-8"],
						blaCTXM14: a["blaCTX-M-14"],
						blaCTXM15: a["blaCTX-M-15"],
						blaCTXM24: a["blaCTX-M-24"],
						blaCTXM27: a["blaCTX-M-27"],
						blaCTXM32: a["blaCTX-M-32"],
						blaCTXM55: a["blaCTX-M-55"],
						blaCTXM101: a["blaCTX-M-101"],
						blaCTXM104: a["blaCTX-M-104"],
						blaSHV12: a["blaSHV-12"],
						blaCMY2: a["blaCMY-2"],
						blaIMP26: a["blaIMP-26"],
						blaOXA181: a["blaOXA-181"],
					},
				])
			);

			function createAnnotations(
				chart: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
				data: d3.HierarchyNode<TreeNode>[],
				outerRadius: number,
				annotationMap: AnnotationMap,
				annotationType: string,
				colorMap: Map<number, string>
			): void {
				const arcHeight = 15;

				const arcGenerator = d3
					.arc<d3.PieArcDatum<d3.HierarchyNode<TreeNode>>>()
					.innerRadius(outerRadius - arcHeight)
					.outerRadius(outerRadius);

				const startAngle = 0 * (Math.PI / 180);
				const endAngle = 350 * (Math.PI / 180);

				const startAngleLabel = 350 * (Math.PI / 180);
				const endAngleLabel = 360 * (Math.PI / 180);

				const pieGenerator = d3
					.pie<d3.HierarchyNode<TreeNode>>()
					.value(() => 1)
					.sort(null)
					.startAngle(startAngle)
					.endAngle(endAngle);

				const pieGeneratorLabel = d3
					.pie<d3.HierarchyNode<TreeNode>>()
					.value((d) => d.x!)
					.sort(null)
					.startAngle(startAngleLabel)
					.endAngle(endAngleLabel);

				const arcData = pieGenerator(data);
				const arcDataLabel = pieGeneratorLabel([data[0]]);

				const lastArc = arcDataLabel[arcDataLabel.length - 1];

				chart
					.append("g")
					.selectAll("path")
					.data(arcDataLabel)
					.join("path")
					.attr("d", arcGenerator)
					.attr("fill", "none")
					.each(function (d, i) {
						const firstArcSection = /(^.+?)L/;
						const newArc = firstArcSection.exec(d3.select(this).attr("d"))?.[1];
						if (newArc) {
							const cleanedArc = newArc.replace(/,/g, " ");
							chart
								.append("path")
								.attr("class", "hiddenDonutArcs")
								.attr("id", `${annotationType}_donutArcLabel${i}`)
								.attr("d", cleanedArc)
								.style("fill", "none");
						}
					});

				chart
					.append("g")
					.selectAll(".annotationText")
					.data([lastArc])
					.enter()
					.append("text")
					.attr("class", "annotationText")
					.attr("x", 5)
					.attr("dy", 12)
					.append("textPath")
					.attr("href", (d, i) => `#${annotationType}_donutArcLabel${i}`)
					.style("text-anchor", "start")
					.text(annotationType)
					.attr("font-size", "12px")
					.style("font-weight", "bold")
					.style("fill", "black");

				chart
					.append("g")
					.selectAll("path")
					.data(arcData)
					.join("path")
					.attr("d", arcGenerator)
					.attr("fill", (d: d3.PieArcDatum<d3.HierarchyNode<TreeNode>>) => {
						const annotation = annotationMap.get(d.data.data.name!);
						if (annotation) {
							const value =
								annotation[annotationType as keyof typeof annotation];
							return colorMap.get(value as number) || "black";
						}
						return "black";
					})
					.each(function (d, i) {
						const firstArcSection = /(^.+?)L/;
						const newArc = firstArcSection.exec(d3.select(this).attr("d"))?.[1];
						if (newArc) {
							const cleanedArc = newArc.replace(/,/g, " ");

							chart
								.append("path")
								.attr("class", "hiddenDonutArcs")
								.attr("id", `${annotationType}_donutArc${i}`)
								.attr("d", cleanedArc)
								.style("fill", "none");
						}
					});

				//Append the month names within the arcs
				chart
					.append("g")
					.selectAll(".annotationText")
					.data(arcData)
					.enter()
					.append("text")
					.attr("class", "annotationText")
					.attr("dy", 12)
					.append("textPath")
					.attr("href", (d, i) => `#${annotationType}_donutArc${i}`)
					.attr("startOffset", "50%")
					.style("text-anchor", "middle")
					.text((d: d3.PieArcDatum<d3.HierarchyNode<TreeNode>>) => {
						const annotation = annotationMap.get(d.data.data.name!);
						return annotation
							? annotation[annotationType as keyof typeof annotation]
							: "No Annotation";
					})
					.attr("font-size", "11px")
					.style("fill", "black");
			}

			function drawESBL(
				chart: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
				data: d3.HierarchyNode<TreeNode>[],
				outerRadius: number,
				annotationMap: AnnotationMap,
				field: string,
				columnName: string,
				anno_x: number,
				anno_y: number
			): void {
				chart
					.append("g")
					.selectAll("text")
					.data(data[data.length - 1])
					.join("text")
					.attr("transform", (d: d3.HierarchyNode<TreeNode>) => {
						const angle = d.x! - 90;
						const radians = angle * (Math.PI / 180);
						const x = (outerRadius - 90) * Math.cos(radians);
						const y = (outerRadius - 90) * Math.sin(radians);
						return `translate(${x + 18},${y - 5}) rotate(${angle + 90})`;
					})
					.attr("text-anchor", "start")
					.attr("font-size", "14px")
					.style("font-weight", "bold")
					.style("fill", "black")
					.text(columnName);

				chart
					.append("g")
					.selectAll("rect")
					.data(data)
					.join("rect")
					.attr("transform", (d: d3.HierarchyNode<TreeNode>) => {
						const angle = d.x! - 90;
						const radians = angle * (Math.PI / 180);
						const x = (outerRadius - 90) * Math.cos(radians);
						const y = (outerRadius - 90) * Math.sin(radians);
						return `translate(${x},${y}) rotate(${angle + 90})`;
					})
					.attr("x", -7)
					.attr("y", -12)
					.attr("width", 15)
					.attr("height", 15)
					.attr("fill", (d: d3.HierarchyNode<TreeNode>) => {
						const annotation = annotationMap.get(d.data.name!);
						if (annotation) {
							const value = annotation[field as keyof typeof annotation] || 0;
							return value === "1" ? "#949fdb" : "none";
						}
						return null;
					})
					.attr("stroke", (d: d3.HierarchyNode<TreeNode>) => {
						const annotation = annotationMap.get(d.data.name!);
						if (annotation) {
							const value = annotation[field as keyof typeof annotation] || 0;
							return value === "0" ? "#949fdb" : "none";
						}
						return null;
					})
					.attr("stroke-width", 1.2);
			}

			const columns = new Map<string, string>([
				["blaCTXM1", "blaCTX-M-1"],
				["blaCTXM14", "blaCTX-M-14"],
				["blaCTXM15", "blaCTX-M-15"],
				["blaCTXM24", "blaCTX-M-24"],
				["blaCTXM27", "blaCTX-M-27"],
				["blaCTXM55", "blaCTX-M-55"],
				["blaCTXM104", "blaCTX-M-104"],
				["blaSHV12", "blaSHV-12"],
				["blaCMY2", "blaCMY-2"],
				["blaIMP26", "blaIMP-26"],
				["blaOXA181", "blaOXA-181"],
			]);

			const colorMaps: Record<string, Map<number, string>> = {
				ST: labelColorMap,
				fimH: fimTypeColorMap,
				Phylogroup: phylogroupColorMap,
			};

			let currentOuterRadius = outerRadius - 80;

			selectedAnnotations.forEach((annotation, index) => {
				if (annotation === "ESBL") {
					let colIndex = 0;
					columns.forEach((columnName, column) => {
						colIndex++;
						drawESBL(
							chart,
							root.leaves(),
							currentOuterRadius + 50 + colIndex * 20,
							annotationMap,
							column,
							columnName,
							-65 - colIndex * 4,
							11
						);
					});
					currentOuterRadius += 40 + colIndex * 20;
				} else {
					createAnnotations(
						chart,
						root.leaves(),
						currentOuterRadius,
						annotationMap,
						annotation,
						colorMaps[annotation]
					);

					currentOuterRadius += 40;
				}
			});

			function createLegend(
				chart: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
				data: d3.HierarchyNode<TreeNode>[],
				title: string,
				colorMap: Map<string, string>,
				position: { x: number; y: number }
			): void {
				const legendGroup = chart
					.append("g")
					.attr("transform", `translate(${position.x}, ${position.y})`);

				legendGroup
					.append("text")
					.attr("x", 0)
					.attr("y", -20)
					.attr("text-anchor", "start")
					.style("font-size", "14px")
					.style("font-weight", "bold")
					.text(title);

				const legendItems = legendGroup
					.selectAll("g")
					.data(data)
					.join("g")
					.attr("transform", (d, i) => `translate(0, ${i * 20})`);

				legendItems
					.append("rect")
					.attr("width", 18)
					.attr("height", 18)
					.attr("fill", (d) => colorMap.get(d.name) || "black");

				legendItems
					.append("text")
					.attr("x", 24)
					.attr("y", 9)
					.attr("dy", "0.35em")
					.text((d) => d.name);
			}

			function maxLength(d: d3.HierarchyNode<TreeNode>): number {
				return (
					d.data.length! + (d.children ? d3.max(d.children, maxLength) : 0)!
				);
			}

			function setRadius(d: d3.HierarchyNode<TreeNode>, y0: number, k: number) {
				d.radius = (y0 += d.data.length!) * k;
				if (d.children) d.children.forEach((d) => setRadius(d, y0, k));
			}

			function linkConstant(d: d3.HierarchyLink<TreeNode>): string {
				return linkStep(d.source.x!, d.source.y!, d.target.x!, d.target.y!);
			}

			function linkExtensionConstant(d: d3.HierarchyLink<TreeNode>): string {
				return linkStep(d.target.x!, d.target.y!, d.target.x!, innerRadius);
			}

			function linkVariable(d: d3.HierarchyLink<TreeNode>) {
				return linkStep(
					d.source.x!,
					d.source.radius!,
					d.target.x!,
					d.target.radius!
				);
			}

			function linkExtensionVariable(d: d3.HierarchyLink<TreeNode>) {
				return linkStep(
					d.target.x!,
					d.target.radius!,
					d.target.x!,
					innerRadius
				);
			}

			function linkStep(
				startAngle: number,
				startRadius: number,
				endAngle: number,
				endRadius: number
			): string {
				const c0 = Math.cos((startAngle = ((startAngle - 90) / 180) * Math.PI));
				const s0 = Math.sin(startAngle);
				const c1 = Math.cos((endAngle = ((endAngle - 90) / 180) * Math.PI));
				const s1 = Math.sin(endAngle);
				return (
					"M" +
					startRadius * c0 +
					"," +
					startRadius * s0 +
					(endAngle === startAngle
						? ""
						: "A" +
							startRadius +
							"," +
							startRadius +
							" 0 0 " +
							(endAngle > startAngle ? 1 : 0) +
							" " +
							startRadius * c1 +
							"," +
							startRadius * s1) +
					"L" +
					endRadius * c1 +
					"," +
					endRadius * s1
				);
			}
		}, [data, width, height, chartRef, showLength]);

		const handleZoomIn = () => {
			if (!chartRef.current || !zoomRef.current) return;
			d3.select(chartRef.current as SVGSVGElement)
				.transition()
				.duration(500)
				.call(zoomRef.current!.scaleBy, 1.2);
		};

		const handleZoomOut = () => {
			if (!chartRef.current || !zoomRef.current) return;
			d3.select(chartRef.current as SVGSVGElement)
				.transition()
				.duration(500)
				.call(zoomRef.current!.scaleBy, 0.8);
		};

		const handleResetZoom = useCallback(() => {
			if (!chartRef.current || !zoomRef.current) return;

			const outerRadius = calculateDynamicRadius(data!);
			const graphWidth = outerRadius * 2.8;
			const graphHeight = outerRadius * 2.8;

			console.log("dataRESET:", data);

			const scaleX = width / graphWidth;
			const scaleY = height / graphHeight;
			const scale = Math.min(scaleX, scaleY);

			console.log(scale);

			const initialTransform = d3.zoomIdentity
				.translate(width / 2.9, height / 2)
				.scale(scale);

			d3.select(chartRef.current as SVGSVGElement)
				.transition()
				.duration(500)
				.call(zoomRef.current.transform, initialTransform);

			currentTransform.current = initialTransform;
		}, [width, height, data, chartRef]);

		return (
			<div className="flex flex-row">
				<div className="flex flex-col items-start space-y-2 px-5 py-5">
					{/* Checkbox */}
					<label className="flex items-center font-sans text-xs">
						<input
							type="checkbox"
							checked={showLength}
							onChange={() => {
								setShowLength(!showLength);
								console.log("Novo valor de showLength:", !showLength);
							}}
							className="mr-2"
						/>
						<span>Show branch length</span>
					</label>

					{/* Botões de zoom */}
					<div className="flex flex-col py-5">
						<button
							onClick={handleZoomIn}
							className="mb-2 cursor-pointer rounded-lg border border-black bg-gray-200 px-2 py-1 text-2xl"
						>
							+
						</button>
						<button
							onClick={handleZoomOut}
							className="mb-2 cursor-pointer rounded-lg border border-black bg-gray-200 px-2 py-1 text-2xl"
						>
							-
						</button>
						<button
							onClick={handleResetZoom}
							className="cursor-pointer rounded-lg bg-gray-200 px-2 py-1 text-lg"
						>
							Reset
						</button>
					</div>
				</div>

				<svg ref={chartRef} width={width} height={height}></svg>
			</div>
		);
	}
);

MyChart.displayName = "MyChart";
