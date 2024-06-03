"use server";

import { contactFormSchema } from "@/components/contact-us-form";
import { z } from "zod";

export async function onSubmit(values: z.infer<typeof contactFormSchema>) {
	console.log(values);
}
