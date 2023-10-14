import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveSectionProvider } from "@/context/active-section";
import { Footer } from "@/components/footer";

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
					relative bg-gray-50 h-[100rem] max-w-screen-lg overflow-x-hidden mx-auto`}
			>
				<div
					className="absolute -z-10 top-[-6rem] right-[11rem] 
					bg-[#fd7940]/30 h-[31.25rem] w-[31.25rem] 
					rounded-full blur-[10rem] sm:w-[68.75rem]"
				></div>
				<div
					className="absolute -z-10 top-[10rem] left-[20rem]
					bg-[#bc13a4]/30 h-[31.25rem] w-[31.25rem] 
					rounded-full blur-[10rem] sm:w-[68.75rem]"
				></div>

				<ActiveSectionProvider>
					<Header />
					{children}
				</ActiveSectionProvider>

				<Footer />
			</body>
		</html>
	);
}
