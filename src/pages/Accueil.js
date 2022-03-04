import { About } from "../components/About";
import { EventAdd } from "../components/EventAdd";
import { EventDelete } from "../components/EventDelete";
import { EventUpdate } from "../components/EventUpdate";
import { Upcoming } from "../components/Upcoming";

export const Accueil = () => {
	return (
		<main id="main">
			<About />
			<Upcoming />
			<EventAdd />
			<EventDelete />
			<EventUpdate />
		</main>
	);
}