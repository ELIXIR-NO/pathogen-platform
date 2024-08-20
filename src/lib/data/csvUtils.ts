import { promises as fsPromises } from "fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

export interface NormDataRecord {
	proveAar: string;
	Opplegg: string;
	Mikrobe: string;
	Antibiotika: string;
	region: string;
	antall: number;
	Andel_R: number;
	Andel_S_I: number;
	antall_R: number;
	antall_S_I: number;
}

export async function getNormAtlasCSVData(): Promise<NormDataRecord[]> {
	const filePath = path.join(
		process.cwd(),
		"public",
		"data",
		"Normdata_2003_2022.csv"
	);

	try {
		const fileContent = await fsPromises.readFile(filePath, "utf8");

		return parse(fileContent, {
			columns: true,
			skip_empty_lines: true,
			delimiter: ";",
			cast: (value, context) => {
				if (
					context.column === "antall" ||
					context.column === "antall_R" ||
					context.column === "antall_S_I"
				) {
					return parseInt(value, 10);
				}
				if (context.column === "Andel_R" || context.column === "Andel_S_I") {
					return parseFloat(value);
				}
				return value;
			},
		});
	} catch (error) {
		console.error("Error reading csv file: ", error);
		throw error;
	}
}

export function extractUniqueMicrobes(data: NormDataRecord[]): string[] {
	return Array.from(new Set(data.map((record) => record.Mikrobe)));
}

export function extractUniqueAntibiotics(data: NormDataRecord[]): string[] {
	return Array.from(new Set(data.map((record) => record.Antibiotika)));
}

export function extractUniqueRegions(data: NormDataRecord[]): string[] {
	return Array.from(new Set(data.map((record) => record.region)));
}
