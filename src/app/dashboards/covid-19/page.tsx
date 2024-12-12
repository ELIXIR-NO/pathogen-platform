import DataLoader from "./data-loader";

export default function AntibioticResistanceAndDiseasesDashboards3() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<h1 className="text-3xl font-bold">Covid-19</h1>
			<p>
				Occurrences and vaccination data from MSIS and SYSVAK can be displayed
				in two synchronised plots.
			</p>
			<DataLoader />
			<p className="italic">
				<br></br>The data is being fetched from{" "}
				<a
					href="https://allvis.fhi.no/msis/sykdomshendelser?etter=diagnose&fordeltPaa=aar&diagnose=713&tidsrom=2020,2024&diagramtype=soyle"
					className="text-primary hover:underline"
				>
					Meldingssystem for smittsomme sykdommer (MSIS), FHI
				</a>{" "}
				and{" "}
				<a
					href="https://allvis.fhi.no/sysvak/antall-vaksinerte?etter=diagnose&diagnose=COVID_19&fordeltPaa=aar"
					className="text-primary hover:underline"
				>
					Nasjonalt vaksinasjonsregister (SYSVAK), FHI
				</a>
			</p>
		</section>
	);
}
