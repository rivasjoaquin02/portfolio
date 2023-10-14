import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "public/corpcomment.png";
import rmtdevImg from "public/rmtdev.png";
import wordanalyticsImg from "public/wordanalytics.png";

import {
	DiJavascript1,
	DiHtml5,
	DiCss3,
	DiReact,
	DiGit,
	DiPython,
} from "react-icons/di";
import {
	BiLogoTypescript,
	BiLogoRedux,
	BiLogoTailwindCss,
	BiDotsHorizontalRounded,
	BiHomeAlt2,
	BiSolidContact,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFastapi } from "react-icons/si";
import { BsFillPersonFill, BsTools } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GrWorkshop } from "react-icons/gr";

export const links = [
	{
		name: "Home",
		hash: "#home",
		icon: React.createElement(BiHomeAlt2),
	},
	{
		name: "Skills",
		hash: "#skills",
		icon: React.createElement(BsTools),
	},
	{
		name: "Projects",
		hash: "#projects",
		icon: React.createElement(AiOutlineAppstoreAdd),
	},
	{
		name: "About",
		hash: "#about",
		icon: React.createElement(BsFillPersonFill),
	},
	{
		name: "Experience",
		hash: "#experience",
		icon: React.createElement(GrWorkshop),
	},
	{
		name: "Contact",
		hash: "#contact",
		icon: React.createElement(BiSolidContact),
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated bootcamp",
		location: "Miami, FL",
		description:
			"I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2019",
	},
	{
		title: "Front-End Developer",
		location: "Orlando, FL",
		description:
			"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Full-Stack Developer",
		location: "Houston, TX",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "CorpComment",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	{ name: "HTML", icon: React.createElement(DiHtml5) },
	{ name: "CSS", icon: React.createElement(DiCss3) },
	{ name: "JavaScript", icon: React.createElement(DiJavascript1) },
	{ name: "TypeScript", icon: React.createElement(BiLogoTypescript) },
	{ name: "React", icon: React.createElement(DiReact) },
	{ name: "Next.js", icon: React.createElement(TbBrandNextjs) },
	{ name: "Git", icon: React.createElement(DiGit) },
	{ name: "Tailwind", icon: React.createElement(BiLogoTailwindCss) },
	{ name: "Redux", icon: React.createElement(BiLogoRedux) },
	{ name: "Python", icon: React.createElement(DiPython) },
	{ name: "FastAPI", icon: React.createElement(SiFastapi) },
	{ name: "", icon: React.createElement(BiDotsHorizontalRounded) },
] as const;
