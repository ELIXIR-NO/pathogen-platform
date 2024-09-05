import ContactUsForm from "./contact-us-form";

export default function ContactUs() {
	return (
		<div className="mt-6 flex flex-col gap-7">
			<div className="text-medium text-justify font-normal">
				We are happy for any input and suggestions for relevant content that you
				think should be mentioned in the Portal. Contact us at{" "}
				<a
					className="text-primary visited:text-destructive"
					href="mailto:contact@elixir.no"
				>
					contact@elixir.no
				</a>{" "}
				or use the contact form below.
			</div>
			<ContactUsForm />
		</div>
	);
}
