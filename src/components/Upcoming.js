import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";

import "../styles/Upcoming.scss";

export const Upcoming = () => {
	const [selectedEventId, setSelectedEventId] = useState(-1);
	const [events, setEvents] = useState([]);

	const viewableEventsAmount = 3;

	useEffect(() => {
		fetch("/api/events")
			.then(res => res.json())
			.then(data => {
				const filteredData = data
					.filter(event => moment().isBefore(moment(event.date)))
					.sort((eventA, eventB) => moment(eventA.date).diff(moment(eventB.date)))
					.slice(0, viewableEventsAmount)
				setEvents(filteredData);
			})
			.then(() => setSelectedEventId(0));
	}, []);

	moment.locale("fr");

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
						events.map((event, index) => {
							return (
								<div
									key={`event${index}`}
									id={`event${index}date`}
									className={`upcoming-date ${index === selectedEventId ? "active" : ""} ${index + 1 === selectedEventId ? "roundBottom" : ""} ${index - 1 === selectedEventId ? "roundTop" : ""}`}
									onClick={() => handleEventClick(index)}
								>
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
				{
					!events || selectedEventId === -1
					? <>
						<h2 id="upcoming-details-title"><i className="fa-solid fa-spinner fa-spin-pulse fa-fw accent-dark"></i> Chargement...</h2>
					</>
					: <>
						<h2 id="upcoming-details-title">{events[selectedEventId].name}</h2>
						<div id="upcoming-details-full">
							<p><i className="fa-solid fa-calendar-days fa-fw accent-dark"></i> {convertDate(events[selectedEventId].date)}</p>
							<p><i className="fa-solid fa-location-dot fa-fw accent-dark"></i> {events[selectedEventId].location}</p>
							<p><i className="fa-solid fa-circle-question fa-fw accent-dark"></i> {events[selectedEventId].description}</p>
						</div>
					</>
				}
				</div>
			</div>
		</section>
	);
}