"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import * as d3 from "d3";
import { TreeNode } from "@/lib/data/newick-loader";
import { AnnTreeNodeRecord } from "@/lib/data/csvUtils";

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

export function MyChart({
	data,
	annotations,
	labels,
	phylogroup,
	fimtype,
}: {
	data: TreeNode[];
	annotations: AnnTreeNodeRecord[];
	labels: number[];
	phylogroup: string[];
	fimtype: number[];
}) {
	const chartRef = useRef(null);
	const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
	const currentTransform = useRef(d3.zoomIdentity);

	const { width, height } = useWindowSize();

	useEffect(() => {
		if (!data || !chartRef.current) return;

		const outerRadius = 960 / 1.7;
		const innerRadius = outerRadius - 170;

		d3.select(chartRef.current).selectAll("g").remove();

		const svgg = d3.select(chartRef.current).append("g");

		const chart = svgg.append("g");

		const zoom: d3.ZoomBehavior<SVGSVGElement, unknown> = d3
			.zoom<SVGSVGElement, unknown>()
			.scaleExtent([0.3, 3])
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

		const graphWidth = outerRadius * 2;
		const graphHeight = outerRadius * 2;

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

		cluster(root);

		const mouseovered = (active: boolean) => {
			return (event: any, d: any) => {
				const target = event.currentTarget;
				let totalLeaves = 0;

				const nameValue =
					(d.data && d.data.name) ||
					(d.target && d.target.data && d.target.data.name) ||
					"";
				const lengthValue =
					(d.data && d.data.length) ||
					(d.target && d.target.data && d.target.data.length) ||
					0;

				const hierarchyNode = d.target || d.source || d;

				d3.select(target).classed("label--active", active);

				if (
					hierarchyNode.descendants &&
					typeof hierarchyNode.descendants === "function"
				) {
					const descendants = hierarchyNode.descendants();
					totalLeaves = descendants.filter(
						(descendant: any) => !descendant.children
					).length;

					if (active) {
						descendants.forEach((descendant: any) => {
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
					tooltip
						.style("visibility", "visible")
						.html(
							`<h1><strong>Node Information</strong></h1><strong>Name:</strong> ${nameValue}<br><strong>Length:</strong> ${lengthValue}<br><strong>Leaves:</strong> ${totalLeaves}<br>`
						)
						.style("top", event.pageY + 5 + "px")
						.style("left", event.pageX + 5 + "px");
				} else {
					tooltip.style("visibility", "hidden");
				}
			};
		};

		const linkExtension = chart
			.append("g")
			.selectAll("path")
			.data(root.links().filter((d) => !d.target.children))
			.join("path")
			.each(function (d: any) {
				d.target.linkExtensionNode = this;
			})
			.attr("d", linkExtensionConstant);

		const link = chart
			.append("g")
			.attr("fill", "none")
			.attr("stroke", "black")
			.selectAll("path")
			.data(root.links())
			.join("path")
			.each(function (d: any) {
				d.target.linkNode = this;
			})
			.attr("d", linkConstant);

		const active = chart
			.append("g")
			.selectAll("path")
			.data(root.links())
			.join("path")
			.each(function (d: any) {
				d.target.linkNode = this;
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

		const active2 = chart
			.append("g")
			.selectAll("text")
			.data(root.leaves())
			.join("text")
			.attr("dy", ".31em")
			.attr(
				"transform",
				(d: any) =>
					`rotate(${d.x - 90}) translate(${innerRadius + 4},0)${
						d.x < 180 ? "" : " rotate(180)"
					}`
			)
			.attr("text-anchor", (d: any) => (d.x < 180 ? "start" : "end"))
			.text((d: any) => d.data.name)
			.attr("font-family", "sans-serif")
			.on("mouseover", mouseovered(true))
			.on("mouseout", mouseovered(false));

		const labelColorMap = new Map<any, string>();
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

		const annotationMap = new Map(
			annotations.map((a: AnnTreeNodeRecord) => [
				a.Node,
				{
					Label: a.Label,
					Phylogroup: a.Phylogroup,
					FimType: a.FimType,
					blaCTXM1: a["blaCTX-M-1"],
					blaCTXM14: a["blaCTX-M-14"],
					blaCTXM15: a["blaCTX-M-15"],
					blaCTXM24: a["blaCTX-M-24"],
					blaCTXM27: a["blaCTX-M-27"],
					blaCTXM55: a["blaCTX-M-55"],
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
			data: d3.HierarchyNode<any>[],
			outerRadius: number,
			annotationMap: Map<string, any>,
			annotationType: string,
			colorMap: Map<string, string>,
			anno_x: number,
			anno_y: number
		): void {
			chart
				.append("text")
				.attr("transform", () => {
					const angle = -90;
					const radians = angle * (Math.PI / 180);
					const x = (outerRadius - 90) * Math.cos(radians);
					const y = (outerRadius - 90) * Math.sin(radians);
					return `translate(${x + anno_x},${y + anno_y}) rotate(${angle + 82})`;
				})
				.attr("text-anchor", "middle")
				.attr("font-size", "14px")
				.style("fill", "black")
				.style("font-weight", "bold")
				.text(annotationType);

			chart
				.append("g")
				.selectAll("rect")
				.data(data)
				.join("rect")
				.attr("transform", (d: any) => {
					const angle = d.x - 90;
					const radians = angle * (Math.PI / 180);
					const x = (outerRadius - 90) * Math.cos(radians);
					const y = (outerRadius - 90) * Math.sin(radians);
					return `translate(${x},${y}) rotate(${angle + 90})`;
				})
				.attr("x", -15)
				.attr("y", -15)
				.attr("width", 30)
				.attr("height", 20)
				.attr("fill", (d: any) => {
					const value =
						annotationMap.get(d.data.name)?.[annotationType] || "No Annotation";
					return colorMap.get(value) || "black";
				});

			chart
				.append("g")
				.selectAll("text")
				.data(data)
				.join("text")
				.attr("transform", (d: any) => {
					const angle = d.x - 90;
					const radians = angle * (Math.PI / 180);
					const x = (outerRadius - 90) * Math.cos(radians);
					const y = (outerRadius - 90) * Math.sin(radians);
					return `translate(${x},${y}) rotate(${angle + 90})`;
				})
				.text(
					(d: any) =>
						annotationMap.get(d.data.name)?.[annotationType] || "No Annotation"
				)
				.attr("text-anchor", "middle")
				.attr("font-size", "11px")
				.style("fill", "white");
		}

		createAnnotations(
			chart,
			root.leaves(),
			outerRadius,
			annotationMap,
			"Label",
			labelColorMap,
			-60,
			3
		);

		createAnnotations(
			chart,
			root.leaves(),
			outerRadius + 40,
			annotationMap,
			"FimType",
			fimTypeColorMap,
			-58,
			3
		);

		createAnnotations(
			chart,
			root.leaves(),
			outerRadius + 80,
			annotationMap,
			"Phylogroup",
			phylogroupColorMap,
			-57,
			3
		);

		function drawESBL(
			chart: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
			data: d3.HierarchyNode<any>[],
			outerRadius: number,
			annotationMap: Map<string, any>,
			field: string,
			columnName: string,
			colorMap: Map<string, string>,
			anno_x: number,
			anno_y: number
		): void {
			const first = data.length > 0 && data[0].x !== undefined ? data[0].x : 0;
			const firstAngle = first - 90;
			const radians = firstAngle * (Math.PI / 180);
			const firstX = (outerRadius - 90) * Math.cos(radians);
			const firstY = (outerRadius - 90) * Math.sin(radians);

			chart
				.append("text")
				.attr("transform", () => {
					const xOffset = -55;
					return `translate(${firstX + anno_x + xOffset},${firstY + anno_y}) rotate(${firstAngle + 82})`;
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
				.attr("transform", (d: any) => {
					const angle = d.x - 90;
					const radians = angle * (Math.PI / 180);
					const x = (outerRadius - 90) * Math.cos(radians);
					const y = (outerRadius - 90) * Math.sin(radians);
					return `translate(${x},${y}) rotate(${angle + 90})`;
				})
				.attr("x", -7)
				.attr("y", -15)
				.attr("width", 15)
				.attr("height", 15)
				.attr("fill", (d: any) => {
					const value = annotationMap.get(d.data.name)?.[field] || 0;
					return value === "1" ? colorMap.get("1") || "#949fdb" : "none";
				})
				.attr("stroke", (d: any) => {
					const value = annotationMap.get(d.data.name)?.[field] || 0;

					return value === "0" ? "#949fdb" : "none";
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

		const colorMap = new Map<string, string>([
			["0", "#cccccc"],
			["1", "#949fdb"],
		]);

		let colIndex = 0;
		columns.forEach((columnName, column) => {
			colIndex++;
			drawESBL(
				chart,
				root.leaves(),
				outerRadius + 120 + colIndex * 20,
				annotationMap,
				column,
				columnName,
				colorMap,
				-65 - colIndex * 4,
				6
			);
		});

		function createLegend(
			chart: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
			data: any[],
			title: string,
			colorMap: Map<string, string>,
			position: any
		) {
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
				.attr("fill", (d) => colorMap.get(d) || "black");

			legendItems
				.append("text")
				.attr("x", 24)
				.attr("y", 9)
				.attr("dy", "0.35em")
				.text((d) => d);
		}

		function linkConstant(d: any): string {
			return linkStep(d.source.x, d.source.y, d.target.x, d.target.y);
		}

		function linkExtensionConstant(d: any): string {
			return linkStep(d.target.x, d.target.y, d.target.x, innerRadius);
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
	}, [data, width, height]);

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

		const outerRadius = 960 / 1.7;
		const graphWidth = outerRadius * 2;
		const graphHeight = outerRadius * 2;

		const scaleX = width / graphWidth;
		const scaleY = height / graphHeight;
		const scale = Math.min(scaleX, scaleY);

		const initialTransform = d3.zoomIdentity
			.translate(width / 2.9, height / 2)
			.scale(scale);

		d3.select(chartRef.current as SVGSVGElement)
			.transition()
			.duration(500)
			.call(zoomRef.current.transform, initialTransform);

		currentTransform.current = initialTransform;
	}, [width, height]);

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div
				style={{ display: "flex", flexDirection: "column", marginRight: 10 }}
			>
				<button
					onClick={handleZoomIn}
					style={{
						border: "1px solid black",
						padding: "10px 20px",
						marginBottom: "10px",
						fontSize: "24px",
						backgroundColor: "#f0f0f0",
						borderRadius: "8px",
						cursor: "pointer",
					}}
				>
					+
				</button>
				<button
					onClick={handleZoomOut}
					style={{
						border: "1px solid black",
						padding: "10px 20px",
						marginBottom: "10px",
						fontSize: "24px",
						backgroundColor: "#f0f0f0",
						borderRadius: "8px",
						cursor: "pointer",
					}}
				>
					-
				</button>
				<button
					onClick={handleResetZoom}
					style={{
						padding: "10px 20px",
						fontSize: "18px",
						backgroundColor: "#f0f0f0",
						borderRadius: "8px",
						cursor: "pointer",
					}}
				>
					Reset
				</button>
			</div>

			<svg ref={chartRef} width={width} height={height}></svg>
		</div>
	);
}
