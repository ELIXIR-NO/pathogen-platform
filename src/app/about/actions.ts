"use server";

import contactFormSchema, {
	ContactUsFormSchema,
} from "@/app/about/contactUsFormSchema";
import { Resend } from "resend";
import EmailTemplate from "@/app/about/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToElixir(values: ContactUsFormSchema) {
	console.log(values);
	const validatedValues = contactFormSchema.safeParse(values);
	if (!validatedValues.success) {
		return { error: validatedValues.error };
	}
	try {
		const { data, error } = await resend.emails.send({
			to: ["joshua.baskaran@uit.no"],
			from: "request@pathogens.unrelease.app",
			subject: validatedValues.data.subject,
			react: EmailTemplate({ message: validatedValues.data.message }),
		});
		if (error) {
			return { error: error };
		}
		return { success: true, data: data };
	} catch (error) {
		return { error };
	}
}
