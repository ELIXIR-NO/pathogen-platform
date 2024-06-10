import ContactUs from "./contact-us";
import Partners from "./partners";
import AboutUsTabs from "./tabs";

export default function About() {
	return (
		<main>
			<AboutUsTabs partners={<Partners />} contactUs={<ContactUs />} />
		</main>
	);
}
