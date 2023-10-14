"use client";

import Image from "next/image";
import { BsTriangleFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { motion } from "framer-motion";
import { useSectionInView } from "@/context/use-section-in-view";

export function Intro() {
	const { ref } = useSectionInView({
		sectionName: "Home",
		amountForView: 0.5,
	});

	return (
		<section
			ref={ref}
			id="#home"
			className="flex flex-col items-center justify-center mt-10 sm:mt-36 mb-20 px-2 scroll-mt-28"
		>
			<motion.div
				className="relative mb-5 bg-white/40 
				rounded-t-3xl rounded-tl-[5rem] rounded-b-3xl rounded-br-[5rem] 
				border-8 border-black/10 overflow-hidden shadow-lg cursor-pointer"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Image src="/avatar.png" alt="me" width={300} height={300} />
				<motion.span
					className="absolute bottom-0 left-0 text-6xl"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 125,
						delay: 0.1,
						duration: 0.7,
					}}
				>
					😎
				</motion.span>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<h1 className="text-2xl font-black !leading-[1.5] sm:text-4xl lg:text-6xl mb-5 text-center">
					Yet Another React Developer
				</h1>
				<p className="text-xl sm:text-2xl text-center mb-12 max-w-3xl">
					Hello, I'm Joaquin. I'm a{" "}
					<span className="underline font-bold">
						front-end developer
					</span>
					. I enjoy building{" "}
					<span className="italic">sites & apps</span>. My focus is{" "}
					<span className="underline font-bold">React (Next.js)</span>
				</p>

				<div className="flex flex-col sm:flex-row gap-3 items-center justify-center px-10">
					<a
						href="#contact"
						className="group flex gap-2 items-center bg-[#a21cb3] text-white font-normal px-6 py-3 rounded-lg cursor-pointer shadow-xl 
                        hover:scale-[1.05] focus:scale-[1.05] active:scale-[initial] transition"
					>
						<BsTriangleFill className="group-hover:animate-spin-one-time " />{" "}
						Contact me
					</a>
					<a
						download=""
						className="group flex gap-2 items-center bg-white font-normal px-6 py-3 rounded-lg cursor-pointer
                        hover:scale-[1.05] focus:scale-[1.05] active:scale-[initial] transition"
					>
						Download CV{" "}
						<HiDownload className="group-hover:animate-bounce transition" />
					</a>
					<a
						href="https://linkedin/"
						className="text-gray-500 bg-white flex items-center px-5 py-4 rounded-lg cursor-pointer
                        hover:scale-[1.05] focus:scale-[1.05] active:scale-[initial] transition"
					>
						<BsLinkedin />
					</a>
					<a
						href="https://github.com/rivasjoaquin02"
						className="text-gray-500 bg-white flex items-center px-5 py-4 rounded-lg cursor-pointer
                        hover:scale-[1.05] focus:scale-[1.05] active:scale-[initial] transition
                        "
					>
						<BsGithub />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
