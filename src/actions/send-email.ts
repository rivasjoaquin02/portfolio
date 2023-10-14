"use server";

import { getErrorMessage, isValidString } from "@/lib/utils";
import { Resend } from "resend";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
	const senderEmail = formData.get("email");
	const message = formData.get("message");

	if (!isValidString(senderEmail, 30))
		return { error: "Invalid email address" };
	if (!isValidString(message, 500)) return { error: "Invalid message" };

	let data: CreateEmailResponse;
	try {
		data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "rivasjoaquin02@gmail.com",
			subject: "Possible Job Ofert",
			reply_to: senderEmail as string,
			text: message as string,
			html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
		});
	} catch (e) {
		return { error: getErrorMessage(e) };
	}

	return { data };
}
