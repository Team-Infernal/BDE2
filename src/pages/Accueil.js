import { About } from "../components/About";
import { EventDelete } from "../components/EventDelete";
import { EventUpdate } from "../components/EventUpdate";
import { Upcoming } from "../components/Upcoming";

export const Accueil = () => {
	return (
		<main id="main">
			<About />
			<Upcoming />
			<EventDelete />
			<EventUpdate />
		</main>
	);
}