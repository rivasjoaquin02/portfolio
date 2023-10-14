"use client";

import { links } from "@/lib/data";
import Link from "next/link";

import { motion } from "framer-motion";
import { useActiveSection } from "@/context/active-section";

export function Header() {
	const { activeSection, setActiveSection } = useActiveSection();

	return (
		<motion.header
			className="fixed bottom-2 sm:top-6 left-1/2 z-[999]"
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
                border border-black/20 shadow-lg shadow-black/[0.03] "
			>
				<ul className="flex sm:flex-nowrap gap-3 h-8 sm:h-10 sm:py-1">
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
								<span className="hidden sm:block">
									{link.name}
								</span>
								<span className="block sm:hidden">
									{link.icon}
								</span>
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
