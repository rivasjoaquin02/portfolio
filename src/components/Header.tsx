"use client";

import { links } from "@/lib/data";
import { Links } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";

export function Header() {
	const [activeSection, setActiveSection] = useState<Links>("Home");

	return (
		<motion.header
			className="fixed top-6 left-1/2 z-[999]"
			initial={{
				opacity: 0,
				y: -100,
				x: "-50%",
			}}
			animate={{
				opacity: 1,
				y: 0,
				x: "-50%",
			}}
		>
			<nav
				className="bg-gray-50/70 backdrop-blur-[0.5rem] px-3 py-1 rounded-xl 
                border border-black/20 shadow-lg shadow-black/[0.03]"
			>
				<ul className="flex gap-4 h-10 py-1">
					{links.map((link, idx) => (
						<li
							key={idx}
							className="relative flex items-center justify-center"
							onClick={() => setActiveSection(link.name)}
						>
							<Link
								href={link.hash}
								className="flex w-full items-center justify-center px-3  
                                text-gray-500 text-[1rem] hover:text-gray-950"
								onClick={() => setActiveSection(link.name)}
							>
								{link.name}
								{link.name === activeSection && (
									<motion.span
										className="absolute inset-0 -z-10 bg-[#00a6e6]/20 rounded-lg"
										layoutId="activeSection"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								)}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</motion.header>
	);
}
