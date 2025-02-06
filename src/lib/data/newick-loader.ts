import { promises as fsPromises } from "fs";
import path from "node:path";

function processTree(node: any): any {
	if (node.branchset && node.branchset.length > 0) {
		return {
			name: node.name || "",
			length: node.length || 0,
			branchset: node.branchset.map((child: any) => processTree(child)),
		};
	}

	return {
		name: node.name || "",
		length: node.length || 0,
	};
}

export type TreeNode = {
	name?: string;
	length?: number;
	branchset?: TreeNode[];
};

export function parseNewick(input: string): TreeNode {
	const stack: TreeNode[] = [];
	let currentNode: TreeNode = {};
	const tokens = input.split(/\s*(;|\(|\)|,|:)\s*/);

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];

		switch (token) {
			case "(":
				const newNode: TreeNode = {};
				if (!currentNode.branchset) {
					currentNode.branchset = [];
				}
				currentNode.branchset.push(newNode);
				stack.push(currentNode);
				currentNode = newNode;
				break;

			case ",":
				const siblingNode: TreeNode = {};
				stack[stack.length - 1].branchset!.push(siblingNode);
				currentNode = siblingNode;
				break;

			case ")":
				currentNode = stack.pop()!;
				break;

			case ":":
				break;

			default:
				const previousToken = tokens[i - 1];
				if (
					previousToken === "(" ||
					previousToken === ")" ||
					previousToken === ","
				) {
					currentNode.name = token;
				} else if (previousToken === ":") {
					currentNode.length = parseFloat(token);
				}
		}
	}

	return currentNode;
}

export async function getNewickDataToJson(): Promise<TreeNode[]> {
	const filePath = path.join(
		process.cwd(),
		"public",
		"data",
		"norm_t7_all_db_core_NJ.nwk"
	);
	try {
		let fileContent = await fsPromises.readFile(filePath, "utf8");
		const tree = parseNewick(fileContent);
		const processedTree = processTree(tree);
		return processedTree;
	} catch (error) {
		console.error("Error reading Newick file: ", error);
		throw error;
	}
}