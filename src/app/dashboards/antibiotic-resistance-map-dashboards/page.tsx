//import DataLoader from "./data-loader";

export default function AntibioticResistanceMapDashboards() {
    return (
        <section className="flex w-full flex-col space-y-6 text-justify">
            <h1 className="text-3xl font-bold">
                NORM Atlas: Norwegian Surveillance System for Antimicrobial Drug
                Resistance
            </h1>
            <p>
                The national health registry{" "}
                    <a
                        href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
                        className="text-primary hover:underline"
                    >
                        Norwegian Surveillance System for Antimicrobial Drug Resistance (NORM)
                    </a>{" "}
                    collects and analyzes antimicrobial resistance test data in humans for
                    Norway. The NORM-atlas visualizes antibacterial resistance for selected
                    bacterial species and antibiotics, with filters for sample type,
                    geographic region, and test year.
            </p>
            <h2 className="text-2xl font-bold">Filter menu:</h2>
            <ul className="flex list-decimal flex-col space-y-1 pl-5">
                <li>
                    <strong>Sample type:</strong> select a sample type
                </li>
                <li>
                    <strong>Microbe:</strong> select an available microbe for that sample type
                </li>
                <li>
                    <strong>Antibiotics:</strong> use the buttons to see resistance data for 
                    each antibiotic on the dashboard
                </li>
            </ul>
            <p>
                The map, charts, and table show antibiotic resistance data for your
				chosen sample type - microbe - antibiotic combination across all
				available health regions at the latest available year of data by
				default. You can toggle regions off below to see info for all of Norway
				(when available) and use the year selection above or below the map to 
                view data for other years.
            </p>
            {/* <DataLoader /> */}
            <p className="italic">
                All data from the national health registry{" "}
				<a
					href="https://www.unn.no/fag-og-forskning/norm-norsk-overvakingssystem-for-antibiotikaresistens-hos-mikrober"
					className="text-primary hover:underline"
				>
					Norwegian Surveillance System for Antimicrobial Drug Resistance (NORM)
				</a>
				.
            </p>
        </section>
    );
}
