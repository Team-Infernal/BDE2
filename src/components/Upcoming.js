import { useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";

import "../styles/Upcoming.scss";

export const Upcoming = () => {
	const [selectedEventId, setSelectedEventId] = useState(0);

	moment.locale("fr");
	const { events } = require("../content.json");
	const viewableEventsAmount = 3;
	const viewableEvents = events.filter(event => moment().isBefore(moment(event.date)))
		.sort((eventA, eventB) => moment(eventA.date).isAfter(moment(eventB.date)))
		.slice(0, viewableEventsAmount);
	const selectedEvent = viewableEvents[selectedEventId];
	
	const handleEventClick = (eventId) => setSelectedEventId(eventId);

	const convertDate = (inputDate) => moment(inputDate).format("dddd D MMMM à H:mm");
	const convertDateDay = (inputDate) => moment(inputDate).format("dddd D MMMM");
	const convertDateTime = (inputDate) => moment(inputDate).format("H:mm");


	return (
		<section id="upcoming">
			<h2 className="section-title">Événements à venir</h2>
			<div id="upcoming-container">
				<div id="upcoming-dates">
					{
						viewableEvents.map((event, index) => {
							return (
								<div key={`event${index}`} id={`event${index}date`} className={`upcoming-date ${index === selectedEventId ? "active" : ""} ${index + 1 === selectedEventId ? "roundBottom" : ""} ${index - 1 === selectedEventId ? "roundTop" : ""}`} onClick={() => handleEventClick(index)}>
									<h3 className="upcoming-event-title">{event.name}</h3>
									<h3>
										<span className="day">{convertDateDay(event.date)}</span>
										<span className="time">{convertDateTime(event.date)}</span>
									</h3>
								</div>
							);
						})
					}
					<NavLink to="/evenements" className={`upcoming-date upcoming-more ${selectedEventId === viewableEventsAmount - 1 ? "roundTop" : ""}`}>
						<h3>Voir plus d'événements...</h3>
					</NavLink>
					<div className="upcoming-date upcoming-filler" />
				</div>
				<div id="upcoming-details">
					<h2 id="upcoming-details-title">{selectedEvent.name}</h2>
					<div id="upcoming-details-full">
						<p><i className="fa-solid fa-calendar-days fa-fw accent-dark"></i> {convertDate(selectedEvent.date)}</p>
						<p><i className="fa-solid fa-location-dot fa-fw accent-dark"></i> {selectedEvent.location}</p>
						<p><i className="fa-solid fa-circle-question fa-fw accent-dark"></i> {selectedEvent.description.full}</p>
					</div>
				</div>
			</div>
		</section>
	);
}