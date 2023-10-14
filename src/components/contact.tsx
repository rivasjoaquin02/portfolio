"use client";

import { FaPaperPlane } from "react-icons/fa";
import { SectionHeader } from "./section-header";
import { useSectionInView } from "@/context/use-section-in-view";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";
import { FcCellPhone } from "react-icons/fc";

export function Contact() {
	const { ref } = useSectionInView({
		sectionName: "Contact",
		amountForView: 0.5,
	});

	return (
		<section ref={ref} id="contact" className="px-8 mb-28">
			<SectionHeader>Contact me</SectionHeader>

			<p className="mb-4">
				Contact me directly at{" "}
				<a className="underline" href="mailto:rivasjoaquin02@gmail.com">
					rivasjoaquin02@gmail.com
				</a>{" "}
				or
				<span className="underline">
					<FcCellPhone className="inline-block text-xl" /> 5358557872
				</span>
				or through this form.
			</p>

			<motion.form
				action={async (formData) => {
					await sendEmail(formData);
				}}
				className="flex flex-col gap-3 max-w-xl mx-auto"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<input
					type="email"
					name="email"
					placeholder="Your email"
					maxLength={30}
					className="border border-black/10 rounded-lg p-4"
				/>
				<textarea
					name="message"
					cols={30}
					rows={10}
					placeholder="Hi Joaquin ..."
					maxLength={500}
					className="border border-black/10 rounded-lg p-4"
				/>
				<button
					type="submit"
					className="group flex gap-2 items-center self-end bg-[#a21cb3] text-white font-normal px-6 py-3 rounded-lg shadow-xl 
                        hover:scale-[1.05] focus:scale-[1.05] active:scale-[initial] transition w-fit"
				>
					Send
					<FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 text-gray-200 transition" />
				</button>
			</motion.form>
		</section>
	);
}
