import Image from "next/image";

export default function Partners() {
	return (
		<div className="text-medium mt-6 flex flex-col items-start justify-evenly gap-4 p-4 text-justify font-normal">
			<div className="flex flex-col items-center self-center">
				<Image
					src="/by-covid-logo3.svg"
					width={450}
					height={270}
					alt="By-Covid logo"
					className="self-center"
				/>
				<h3 className="font-sans text-xl italic">BY-COVID consortium</h3>
			</div>
			<div>
				The Norwegian Pathogen Portal is one of the partners in the{" "}
				<a
					className="text-primary visited:text-destructive"
					href="https://by-covid.org/"
				>
					BY-COVID consortium
				</a>
				. BY-COVID is a Horizon project{" "}
				<a
					className="text-primary visited:text-destructive"
					href="https://by-covid.org/news-events/by-covid-launch/"
				>
					funded by the European Commission
				</a>{" "}
				and brings together{" "}
				<a
					className="text-primary visited:text-destructive"
					href="https://by-covid.org/about"
				>
					53 partners from 19 countries
				</a>
				. Stakeholders include individuals and organization from multiple areas,
				including the biomedical field, hospitals, public health, social
				sciences and humanities.
			</div>
			<div>
				The BeYond-COVID (BY-COVID) project aims to make COVID-19 data
				accessible to anyone that can use it, including medical staff in
				hospitals, researchers in labs, and government officials. The project
				will provide a framework for making data from other infectious diseases
				open and accessible to everyone. The project will integrate established
				national and European infrastructures with ELIXIR, BBMRI, ECRIN, PHIRI
				and CESSDA. It will build on existing efforts, such as the COVID-19 Data
				Platform and the Versatile Emerging infectious disease Observatory
				project (VEO), in order to maximize efficiency. It will also develop
				synergies with the European Health Data Space.
			</div>
		</div>
	);
}
