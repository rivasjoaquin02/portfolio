import { useEffect, useRef } from "react";
import { useActiveSection } from "./active-section";
import { useInView } from "framer-motion";
import { Links } from "@/lib/types";

export function useSectionInView({
	sectionName,
	amountForView,
}: {
	sectionName: Links;
	amountForView: number;
}) {
	const { setActiveSection } = useActiveSection();

	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { amount: amountForView });

	useEffect(() => {
		if (inView) setActiveSection(sectionName);
	}, [inView, sectionName, setActiveSection]);

	return { ref };
}
