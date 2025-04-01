export default function Overview() {
	return (
		<div className="mt-6 flex flex-col gap-7">
			<h1 className="text-3xl font-bold">About the portal</h1>
			<div className="text-medium text-justify font-normal">
				The Norwegian Pathogen Portal is maintained by ELIXIR Norway, including
				the new partners{" "}
				<a className="text-primary hover:underline" href="https://fhi.no">
					Folkehelseinstituttet
				</a>{" "}
				and{" "}
				<a
					className="text-primary hover:underline"
					href="https://www.vetinst.no"
				>
					Veterinærinstituttet
				</a>
				. The <strong>Pathogens Portal Norway</strong> provides information
				about available datasets, resources, tools, and services related to{" "}
				<strong>pandemic preparedness in Norway</strong>. We also cover topics
				that are relevant for national research and surveillance, and we welcome
				community contributions to the Portal. The portal aim to be a one-stop
				resource for all Norwegian pathogen data and projects, and provide
				documentation and training material on FAIR research data management,
				especially for pathogen omics data. The portal will be tightly
				integrated with the data hub, a national infrastructure for managing and
				sharing of data and contextual metadata. Indexing and exposure of
				aggregated data from the hub will enable early discovery of unpublished
				data, and foster research collaborations and synergies. We offer support
				to all those involved in pandemic preparedness research that are
				affiliated with a Norwegian research institution or university. All code
				used for the Portal is open source (held under an Apache licence) and is
				available on{" "}
				<a
					className="text-primary hover:underline"
					href="https://github.com/ELIXIR-NO/pathogen-platform"
				>
					GitHub
				</a>
				.
			</div>
		</div>
	);
}
