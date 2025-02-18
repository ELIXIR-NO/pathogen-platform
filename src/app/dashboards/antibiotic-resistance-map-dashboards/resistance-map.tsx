"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getColorScale } from "@/lib/data/colorScale";

export type ResistanceData = {
	[region: string]: {
		[year: number]: [number, number, number];
	};
};

interface ResistanceMapProps {
	geoData: GeoJSON.FeatureCollection | null;
	resistanceData: ResistanceData;
	selectedYear: number;
	showCounties?: boolean;
	selectedBin?: number | null;
}

interface HighlightedRegion {
	[regionName: string]: boolean;
}

const normalizeKey = (key: string) =>
	key.toLowerCase().replace(/\//g, "-").trim();

export default function ResistanceMap({
	geoData,
	resistanceData,
	selectedYear,
	showCounties = false,
	selectedBin = null,
}: ResistanceMapProps) {
	const [mapData, setMapData] = useState<GeoJSON.FeatureCollection | null>(
		null
	);
	const [highlighted, setHighlighted] = useState<HighlightedRegion>({});

	useEffect(() => {
		async function mergeCountiesOverlay() {
			if (!geoData) {
				setMapData(null);
				return;
			}
			try {
				const resp = await fetch("/data/geojson/counties.geojson");
				if (!resp.ok) {
					throw new Error(`Couldn't get counties: ${resp.statusText}`);
				}

				const counties = (await resp.json()) as GeoJSON.FeatureCollection;
				const merged: GeoJSON.FeatureCollection = {
					type: "FeatureCollection",
					features: [...geoData.features, ...counties.features],
				};
				setMapData(merged);
			} catch (error) {
				console.error("Couldn't get counties:", error);
				setMapData(geoData);
			}
		}

		if (showCounties) {
			mergeCountiesOverlay();
		} else {
			setMapData(geoData);
		}
	}, [geoData, showCounties]);

	useEffect(() => {}, [selectedYear, selectedBin]);

	function handleRegionClick(regionName: string) {
		setHighlighted((prev) => ({
			...prev,
			[regionName]: !prev[regionName],
		}));
	}

	const getRegionStyle = (feature: any) => {
		const regionNameRaw: string = feature?.properties?.name || "";
		const regionName = normalizeKey(regionNameRaw);

		const regionData = resistanceData[regionName];
		if (!regionData || !regionData[selectedYear]) {
			return {
				fillColor: "#ddd",
				weight: 2,
				opacity: 1,
				color: "#000",
				fillOpacity: 0.3,
			};
		}

		const [total, resistant, percent] = regionData[selectedYear];
		const baseColor = getColorScale(percent);

		let borderColor = "#000";
		let borderWeight = 2;

		if (selectedBin != null && percent >= selectedBin) {
			borderColor = "#ff0000";
			borderWeight = 2;
		}
		if (highlighted[regionName]) {
			borderColor = "#44bf70";
			borderWeight = 2;
		}

		return {
			fillColor: baseColor,
			weight: borderWeight,
			opacity: 1,
			color: borderColor,
			fillOpacity: 0.7,
		};
	};

	const onEachFeature = (feature: any, layer: any) => {
		if (!feature.properties?.name) return;
		const regionNameRaw: string = feature.properties.name;
		const regionName = normalizeKey(regionNameRaw);
		const regionData = resistanceData[regionName];

		if (regionData && regionData[selectedYear]) {
			const [total, resistant, percent] = regionData[selectedYear];
			const tooltipContent = `
        <strong>${feature.properties.name}</strong><br/>
        Total: ${total}<br/>
        Resistant: ${resistant}<br/>
        Resistance: ${percent.toFixed(1)}%
      `;
			layer.bindTooltip(tooltipContent, { sticky: true });
		} else {
			layer.bindTooltip(
				`<strong>${feature.properties.name}</strong><br/>No data`,
				{ sticky: true }
			);
		}

		layer.on("click", () => handleRegionClick(regionName));
	};

	return (
		<div className="h-2/3 min-h-80 w-full min-w-80 border border-gray-300 bg-white">
			{mapData ? (
				<MapContainer
					center={[62, 18]}
					zoom={4}
					maxBounds={[
						[57, -5],
						[72, 35],
					]}
					maxBoundsViscosity={1.0}
					minZoom={3}
					maxZoom={7}
					className="h-full w-full"
				>
					<GeoJSON
						data={mapData}
						style={getRegionStyle}
						onEachFeature={onEachFeature}
					/>
				</MapContainer>
			) : (
				<p className="text-center text-gray-500">Loading map..</p>
			)}
		</div>
	);
}
