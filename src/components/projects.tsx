"use client";

import { projectsData } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Project } from "./project";
import { useSectionInView } from "@/context/use-section-in-view";

export function Projects() {
	const { ref } = useSectionInView({
		sectionName: "Projects",
		amountForView: 0.75,
	});

	return (
		<section
			ref={ref}
			id="projects"
			className="px-8 sm:px-12 xl:px-16 mb-28 scroll-mt-28"
		>
			<SectionHeader>My projects</SectionHeader>
			<div className="flex flex-col gap-4 max-w-[40rem] mx-auto">
				{projectsData.map((project, idx) => (
					<Project key={idx} {...project} />
				))}
			</div>
		</section>
	);
}
