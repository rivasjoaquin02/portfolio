import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "strangedevel-portfolio",
	description: "This is my first portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} 
					relative bg-gray-50 h-[100rem] max-w-[60rem]`}
			>
				<div
					className="absolute -z-10 top-[-6rem] right-[11rem] 
					bg-[#fd7940]/50 h-[31.25rem] w-[31.25rem] 
					rounded-full blur-[10rem] sm:w-[68.75rem]"
				></div>
				<div
					className="absolute -z-10 top-[10rem] left-[20rem]
					bg-[#bc13a4]/50 h-[31.25rem] w-[31.25rem] 
					rounded-full blur-[10rem] sm:w-[68.75rem]"
				></div>

				<Header />

				{children}
			</body>
		</html>
	);
}
