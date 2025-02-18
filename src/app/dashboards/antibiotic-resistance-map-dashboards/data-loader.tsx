"use client";

import { useState, useEffect, useMemo } from "react";
import { fetchGeoJson, fetchResistanceData } from "@/lib/data/fetchData";

export type ResistanceData = {
	[region: string]: {
		[year: number]: [number, number, number];
	};
};

interface DataLoaderProps {
	selectedSampleType: string;
	selectedMicrobe: string;
	selectedAntibiotic: string;
	selectedYear: number;
	setSelectedYear: (year: number) => void;
	showRegions: boolean;
	children: (data: {
		resistanceData: ResistanceData;
		geoData: GeoJSON.FeatureCollection | null;
		loading: boolean;
		availableYears: number[];
		selectedRegions: string[];
	}) => JSX.Element;
}

function normalizeKey(key: string) {
	return key.toLowerCase().replace(/\//g, "-").trim();
}

export default function DataLoader({
	selectedSampleType,
	selectedMicrobe,
	selectedAntibiotic,
	selectedYear,
	setSelectedYear,
	showRegions,
	children,
}: DataLoaderProps) {
	const [resistanceData, setResistanceData] = useState<ResistanceData>({});
	const [availableYears, setAvailableYears] = useState<number[]>([]);
	const [geoData, setGeoData] = useState<GeoJSON.FeatureCollection | null>(
		null
	);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadData() {
			setLoading(true);
			try {
				const result = await fetchResistanceData(
					selectedSampleType,
					selectedMicrobe,
					selectedAntibiotic
				);
				if (result) {
					setResistanceData(result.data);
					setAvailableYears(result.years);

					if (!result.years.includes(selectedYear)) {
						setSelectedYear(result.years[result.years.length - 1]);
					}
				} else {
					setResistanceData({});
					setAvailableYears([]);
				}
			} catch (err) {
				console.error("loadResistanceData error:", err);
				setResistanceData({});
				setAvailableYears([]);
			} finally {
				setLoading(false);
			}
		}
		loadData();
	}, [selectedSampleType, selectedMicrobe, selectedAntibiotic]);

	const computedRegions = useMemo(() => {
		const keys = Object.keys(resistanceData);
		if (!keys.length) return [];

		if (!showRegions) {
			return keys.includes("norway") ? ["norway"] : [];
		}

		return keys.filter((r) => r !== "norway");
	}, [resistanceData, showRegions]);

	useEffect(() => {
		async function loadGeoData() {
			if (!Object.keys(resistanceData).length) {
				setGeoData(null);
				return;
			}
			const baseMap = await fetchGeoJson("norway");
			if (!baseMap) {
				setGeoData(null);
				return;
			}

			if (!computedRegions.length) {
				setGeoData(baseMap);
				return;
			}

			try {
				const geoJsons = await Promise.all(
					computedRegions.map((r) => fetchGeoJson(normalizeKey(r)))
				);
				const valid = geoJsons.filter((g) => g && g.features?.length);
				if (!valid.length) {
					setGeoData(baseMap);
					return;
				}
				const merged: GeoJSON.FeatureCollection = {
					type: "FeatureCollection",
					features: [...baseMap.features, ...valid.flatMap((g) => g!.features)],
				};
				setGeoData(merged);
			} catch (error) {
				console.error("loadGeoData error:", error);
				setGeoData(baseMap);
			}
		}
		loadGeoData();
	}, [resistanceData, computedRegions]);

	return children({
		resistanceData,
		geoData,
		loading,
		availableYears,
		selectedRegions: computedRegions,
	});
}
