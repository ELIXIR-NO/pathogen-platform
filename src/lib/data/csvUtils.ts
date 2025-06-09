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
		"Normdata_2003_2024.csv"
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

export interface Covid19Record {
	ProveAar: string;
	Covid19?: number;
	Vaccine?: number;
}

export async function getCovid19CSVData(): Promise<Covid19Record[]> {
	const filePath = path.join(
		process.cwd(),
		"public",
		"data",
		"combine_covid19xvac.csv"
	);

	try {
		const fileContent = await fsPromises.readFile(filePath, "utf8");

		return parse(fileContent, {
			columns: true,
			skip_empty_lines: true,
			delimiter: ";",
		});
	} catch (error) {
		console.error("Error reading csv file: ", error);
		throw error;
	}
}

export function extractUniqueYears(data: Covid19Record[]): string[] {
	return Array.from(new Set(data.map((record) => record.ProveAar)));
}

export interface AnnTreeNodeRecord {
	Node: string;
	Label: number;
	Phylogroup: string;
	FimType: number;
	"blaCTX-M-1": number;
	"blaCTX-M-3": number;
	"blaCTX-M-8": number;
	"blaCTX-M-14": number;
	"blaCTX-M-15": number;
	"blaCTX-M-24": number;
	"blaCTX-M-27": number;
	"blaCTX-M-32": number;
	"blaCTX-M-55": number;
	"blaCTX-M-101": number;
	"blaCTX-M-104": number;
	"blaSHV-12": number;
	"blaCMY-2": number;
	"blaIMP-26": number;
	"blaOXA-181": number;
}

export async function getTreeNodeCSVData(): Promise<AnnTreeNodeRecord[]> {
	const filePath = path.join(process.cwd(), "public", "data", "Annotation.csv");

	try {
		const fileContent = await fsPromises.readFile(filePath, "utf8");

		return parse(fileContent, {
			columns: true,
			skip_empty_lines: true,
			delimiter: ",",
			cast: (value, context) => {
				if (context.column === "Label") {
					return parseInt(value, 10);
				}
				return value;
			},
		});
	} catch (error) {
		console.error("Error reading CSV file: ", error);
		throw error;
	}
}

export function extractUniqueLabels(data: AnnTreeNodeRecord[]): number[] {
	return Array.from(new Set(data.map((record) => record.Label)));
}

export function extractUniquePhylogroupsAnno(
	data: AnnTreeNodeRecord[]
): string[] {
	return Array.from(new Set(data.map((record) => record.Phylogroup)));
}

export function extractUniqueFimType(data: AnnTreeNodeRecord[]): number[] {
	return Array.from(new Set(data.map((record) => record.FimType)));
}

export function extractUniqueTreeNodes(data: AnnTreeNodeRecord[]): string[] {
	return Array.from(new Set(data.map((record) => record.Node)));
}
