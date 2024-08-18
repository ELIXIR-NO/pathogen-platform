import ContactUs from "./contact-us";
import Partners from "./partners";
import People from "./people";
import AboutUsTabs from "./tabs";

export default function About() {
	return (
		<main>
			<AboutUsTabs people={<People />} partners={<Partners />} contactUs={<ContactUs />} />
		</main>
	);
}
