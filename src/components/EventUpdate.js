import { useState, useEffect } from "react";

export const EventUpdate = () => {
	const [events, setEvents] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState([]);

	useEffect(() => {
		fetch("/api/events")
			.then(res => res.json())
			.then(data => setEvents(data));
	}, []);

	const handleEventSelect = (eventIdInput) => {
		const eventId = parseInt(eventIdInput);
		const event = events.filter(event => event.id === eventId);
		setSelectedEvent(event);
	}

	return (
		<section>
			<h2 className="section-title">Modifier un événement</h2>
			<form method="POST" action="/api/events/update">
				<select name="eventId" onChange={(e) => handleEventSelect(e.target.value)}>
					<option value={null} defaultChecked>Selectionner un événement</option>
					{
						events.map(event => <option key={`eventSelectUpdate${event.id}`} value={event.id}>{event.name} ({event.id})</option>)
					}
				</select>
				{
					selectedEvent
					? selectedEvent.map(event => <div key={`eventSelectUpdate${event.id}`}>
						<div>
							<input type="text" placeholder="Nom" name="eventName" defaultValue={event.name} required/>
							<input type="datetime-local" name="eventDateTime" defaultValue={event.date} required/>
							<input type="text" placeholder="Description" name="eventDescription" defaultValue={event.description} required/>
							<input type="text" placeholder="Location" name="eventLocation" defaultValue={event.location} required/>
						</div>
						<input type="submit"/>
					</div>
					) : null
				}
			</form>
		</section>
	)
}