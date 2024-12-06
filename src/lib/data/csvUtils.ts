import { promises as fsPromises } from "fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

export interface NormDataRecord {
	ProveAar: string;
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

export function extractUniqueOpplegg(data: NormDataRecord[]): string[] {
	return Array.from(new Set(data.map((record) => record.Opplegg)));
}

export interface EcoliRecord {
	sample: string;
	[key: string]: string | undefined;
	"DDM-Sample material": string;
	"AMINOGLYCOSIDE/QUINOLONE": string;
	"BETA-LACTAM": string;

	QUINOLONE: string;
	"QUATERNARY AMMONIUM": string;
	"Mobile Colistin?": string;
	SULFONAMIDE: string;
	TRIMETHOPRIM: string;

	"DDM-Collection": string;
	Phylogroup: string;
}

export async function getEcoliCSVData(): Promise<EcoliRecord[]> {
	const filePath = path.join(process.cwd(), "public", "data", "Ecoli_data.csv");

	try {
		const fileContent = await fsPromises.readFile(filePath, "utf8");

		return parse(fileContent, {
			columns: true,
			skip_empty_lines: true,
			delimiter: ",",
		});
	} catch (error) {
		console.error("Error reading CSV file: ", error);
		throw error;
	}
}

export function extractUniqueSamples(data: EcoliRecord[]): string[] {
	return Array.from(
		new Set(data.map((record) => record["DDM-Sample material"]))
	);
}

export function extractUniqueCollections(data: EcoliRecord[]): string[] {
	return Array.from(new Set(data.map((record) => record["DDM-Collection"])));
}

export function extractUniquePhylogroups(data: EcoliRecord[]): string[] {
	return Array.from(new Set(data.map((record) => record["Phylogroup"])));
}
