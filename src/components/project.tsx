"use client";

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { motion } from "framer-motion";

type ProjectTypes = (typeof projectsData)[number];

export function Project({ title, description, tags, imageUrl }: ProjectTypes) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<motion.div
			ref={ref}
			className="group "
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
		>
			<section
				className="relative overflow-hidden h-[18rem] sm:h-[20rem]  cursor-pointer
				border border-black/10 bg-[#c4e5f4]/20 hover:bg-[#c4e5f4]/50 rounded-lg transition"
			>
				<div
					className="flex flex-col p-8 sm:w-1/2 h-full absolute top-0 left-0 
                sm:group-even:right-0 sm:group-even:left-[initial] "
				>
					<h2 className="text-2xl font-semibold mb-2">{title}</h2>
					<p>{description}</p>
					<ul className="flex flex-wrap gap-2 mt-auto">
						{tags.map((tag, idx) => (
							<span
								key={idx}
								className="bg-[#fc6d26]/20 px-2 py-1 rounded-lg uppercase 
                            text-[0.8rem] tracking-wider"
							>
								{tag}
							</span>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt={title}
					quality={95}
					className="absolute hidden sm:block 
                rounded-lg shadow-2xl w-[28.25rem] 
                top-10 
                -right-40
                group-even:right-[initial]
                group-even:-left-40
				
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
				
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                
                transition"
				/>
			</section>
		</motion.div>
	);
}
