"use client";

import { skillsData } from "@/lib/data";
import { SectionHeader } from "./section-header";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (idx: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * idx,
		},
	}),
};

export function Skills() {
	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-center mb-28"
		>
			<SectionHeader>My toolchain</SectionHeader>
			<ul className="flex flex-wrap gap-2 justify-center text-gray-800">
				{skillsData.map((skill, idx) => (
					<motion.li
						className="bg-white flex items-center gap-2 rounded-lg 
                        px-5 py-3 border border-black/10 cursor-pointer 
                         transition"
						key={idx}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						custom={idx}
					>
						<span className="text-xl">{skill.icon}</span>
						{skill.name}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
