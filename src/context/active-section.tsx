"use client";

import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { Links } from "@/lib/types";

type ActiveSectionType = {
	activeSection: Links;
	setActiveSection: Dispatch<SetStateAction<Links>>;
};

const ActiveSectionContext = createContext<ActiveSectionType | null>(null);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
	const [activeSection, setActiveSection] = useState<Links>("Home");

	return (
		<ActiveSectionContext.Provider
			value={{ activeSection, setActiveSection }}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSection() {
	const context = useContext(ActiveSectionContext);

	if (!context)
		throw new Error(
			"useActiveSection can only be used as a child of ActiveSectionProvider"
		);

	return context;
}
