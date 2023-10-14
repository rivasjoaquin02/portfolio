"use client";

import { useSectionInView } from "@/context/use-section-in-view";
import { SectionHeader } from "./section-header";
import { DiPython, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";

import { motion } from "framer-motion";

export function About() {
	const { ref } = useSectionInView({
		sectionName: "About",
		amountForView: 0.5,
	});

	return (
		<motion.section
			ref={ref}
			id="about"
			className="text-center max-w-4xl px-8 sm:px-10 mb-28 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			<SectionHeader>about</SectionHeader>
			<div className="text-lg sm:text-xl">
				<p>
					I'm currently a{" "}
					<span className="font-bold text-orange-600">
						CS Engineer Student
					</span>
					. My favorite part of programming is the problem-solving
					aspect 🤔. I love the feeling of finally figuring out a
					solution to a problem.
					<span className="underline">
						My core stack is{" "}
						<DiReact className="inline-block text-3xl text-lime-500" />
						,
						<TbBrandNextjs className="inline-block text-3xl text-teal-500" />
						,
						<BiLogoTypescript className="inline-block text-3xl text-yellow-500" />
						,
					</span>
				</p>
				<p>
					I am also familiar with{" "}
					<DiPython className="inline-block text-3xl text-green-400" />
					,
					<SiFastapi className="inline-block text-2xl text-red-400" />
					. I am always looking to learn new technologies. I am
					currently looking for a{" "}
					<span className="text-2xl text-orange-500">Junior</span>{" "}
					position as a software developer.
				</p>
				<p>
					When I'm not coding 👨‍💻, I enjoy learning new things, playing
					video games 🎮, watching movies 🍿, and playing with my dog
					🐶.
				</p>
			</div>
		</motion.section>
	);
}
