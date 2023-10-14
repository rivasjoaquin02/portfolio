"use client";

import { FaPaperPlane } from "react-icons/fa";
import { SectionHeader } from "./section-header";
import { useSectionInView } from "@/context/use-section-in-view";

import { motion } from "framer-motion";

export function Contact() {
	const { ref } = useSectionInView({
		sectionName: "Contact",
		amountForView: 0.5,
	});

	return (
		<section ref={ref} id="contact" className="px-8 mb-28">
			<SectionHeader>Contact me</SectionHeader>

			<motion.form
				action=""
				className="flex flex-col gap-3 max-w-xl mx-auto"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<input
					type="email"
					placeholder="Your email"
					maxLength={30}
					className="border border-black/10 rounded-lg p-4"
				/>
				<textarea
					name="message"
					id=""
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
