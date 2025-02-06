import { TreeNode } from "./newick-loader";

export function DownloadNewick(data: TreeNode, fileName: string) {
	const toNewick = (node: TreeNode): string => {
		if (!node.branchset || node.branchset.length === 0) {
			return node.name ? `${node.name}:${node.length || 0}` : "";
		}

		const branches = node.branchset.map((child) => toNewick(child));
		return `(${branches.join(",")})${node.name ? `:${node.length || 0}` : ""}`;
	};

	const newickContentData = toNewick(data);
	const blob = new Blob([newickContentData], {
		type: "text/plain;charset=utf-8;",
	});
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.setAttribute("href", url);
	link.setAttribute("download", `${fileName}.nwk`);
	link.click();
	URL.revokeObjectURL(url);
}

export function serializeSVG(svg: SVGElement): Blob {
	const xmlns = "http://www.w3.org/2000/xmlns/";
	const xlinkns = "http://www.w3.org/1999/xlink";
	const svgns = "http://www.w3.org/2000/svg";

	const clonedSvg = svg.cloneNode(true) as SVGElement;
	const fragment = window.location.href + "#";

	const walker = document.createTreeWalker(clonedSvg, NodeFilter.SHOW_ELEMENT);
	while (walker.nextNode()) {
		const currentNode = walker.currentNode as Element;
		for (const attr of Array.from(currentNode.attributes)) {
			if (attr.value.includes(fragment)) {
				attr.value = attr.value.replace(fragment, "#");
			}
		}
	}

	clonedSvg.setAttributeNS(xmlns, "xmlns", svgns);
	clonedSvg.setAttributeNS(xmlns, "xmlns:xlink", xlinkns);

	const serializer = new XMLSerializer();
	const svgString = serializer.serializeToString(clonedSvg);

	return new Blob([svgString], { type: "image/svg+xml" });
}
