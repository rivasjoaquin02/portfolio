import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Separator } from "@/components/separator";
import { Skills } from "@/components/skills";

export default function Home() {
	return (
		<main>
			<Intro />
			<Separator />
			<Skills />
			<Projects />
			<About />
			<Contact />
		</main>
	);
}
