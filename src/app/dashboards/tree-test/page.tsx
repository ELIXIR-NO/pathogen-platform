import DataLoader from "./data-loader";

export default function TreeVisualizationPage() {
	return (
		<section className="flex w-full flex-col space-y-6 text-justify">
			<h1 className="text-3xl font-bold">Radial Tree Visualization</h1>
			<p>
				This is a radial tree visualization using D3. The tree data is
				dynamically loaded and rendered below.
			</p>
			<DataLoader />
			<p className="italic">
				Data visualization showcasing hierarchical relationships.
			</p>
		</section>
	);
}
