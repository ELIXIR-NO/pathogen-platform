import DataLoader from "./data-loader";

export default function AntibioticResistanceAndDiseasesDashboards3() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<h1 className="text-3xl font-bold">Trends (NORM)</h1>
			<p>
				Norsk overvåkingssystem for antibiotikaresistens hos mikrober (
				<a
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline"
				>
					NORM
				</a>
				) er det norske overvåkingssystemet for antibiotikaresistens i mikrober.
				Helseregisteret samler inn og analyserer data om antibiotikaresistens og
				samarbeider med referanselaboratorier for å sikre høy kvalitet på
				testing og datafortolkning.
			</p>
			<h2 className="text-2xl font-bold">Plott forekomst av resistens:</h2>
			<ul className="flex list-decimal flex-col space-y-1 pl-5">
				<li>
					<strong>Velg prøvetype</strong> - tillater kun én prøvetype
				</li>
				<li>
					<strong>Velg mikrober</strong> - tillater kun én mikrobe
				</li>
				<li>
					<strong>Velg regioner</strong> - tillater flere regioner som vises som
					individuelle linjer
				</li>
				<li>
					<strong>Velg antibiotika</strong> - tillater flere antibiotika som
					vises som synkroniserte plott
				</li>
			</ul>
			<DataLoader />
			<p className="italic">
				Dataene hentes fra det nasjonale helseregisteret{" "}
				<a
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline"
				>
					Norsk overvåkingssystem for antibiotikaresistens hos mikrober (NORM)
				</a>
				.
			</p>
		</section>
	);
}
