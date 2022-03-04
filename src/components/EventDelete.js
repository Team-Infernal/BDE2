import { useEffect } from "react";
import { useState } from "react";

export const EventDelete = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch("/api/events")
			.then(res => res.json())
			.then(data => setEvents(data));
	}, []);

	return (
		<section>
			<h2 className="section-title">Supprimer un événement</h2>
			<form method="POST" action="/api/events/delete">
				<select name="eventId">
					{
						events.map(event => <option key={`eventSelect${event.id}`} value={event.id}>{event.name} ({event.id})</option>)
					}
				</select>
				<input type="submit"/>
			</form>
		</section>
	);
}