import { Intro } from "@/components/intro";
import { Separator } from "@/components/separator";
import { Skills } from "@/components/skills";

export default function Home() {
	return (
		<main className="pt-36">
			<Intro />
			<Separator />
			<Skills />
		</main>
	);
}
