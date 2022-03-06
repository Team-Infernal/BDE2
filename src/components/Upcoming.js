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
					.filter(event => moment().isBefore(moment(event.date.start)))
					.sort((eventA, eventB) => moment(eventA.date.start).diff(moment(eventB.date.start)))
					.slice(0, viewableEventsAmount)
				setEvents(filteredData);
			})
			.then(() => setSelectedEventId(0));
	}, []);

	moment.locale("fr");

	const handleEventClick = (eventId) => setSelectedEventId(eventId);

	const handleSelectAdd = () => {
		setSelectedEventId(-2);
	}
	const handleSelectRemove = () => {
		setSelectedEventId(-3);

	}
	const handleSelectEdit = () => {
		setSelectedEventId(-4);

	}

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
										<span className="day">{convertDateDay(event.date.start)}</span>
										<span className="time">{convertDateTime(event.date.start)}</span>
									</h3>
								</div>
							);
						})
					}
					<NavLink to="/evenements" className={`upcoming-date upcoming-more ${selectedEventId === events.length - 1 ? "roundTop" : ""}`}>
						<h3>Voir plus d'événements...</h3>
					</NavLink>
					<div id="upcoming-dates-controls">
						<i className="fa-solid fa-plus fa-fw accent" onClick={() => handleSelectAdd()}></i>
						<i className="fa-solid fa-minus fa-fw accent" onClick={() => handleSelectRemove()}></i>
						<i className="fa-solid fa-pen-to-square fa-fw accent" onClick={() => handleSelectEdit()}></i>
					</div>
					<div className="upcoming-date upcoming-filler" />
				</div>
				<div id="upcoming-details">
				{
					!events || selectedEventId === -1
					?
					<>
						<h2 id="upcoming-details-title"><i className="fa-solid fa-spinner fa-spin-pulse fa-fw accent-dark"></i> Chargement...</h2>
					</>
					: selectedEventId === -2
					?
					<>
						<h2 id="upcoming-details-title">Ajouter un événement</h2>
						<div id="eventAdd-details">
							<form method="POST" action="/api/events/add">
								<label htmlFor="eventName">Nom</label>
								<input className="user-input" type="text" placeholder="Soirée, bowling..." name="eventName" required/>
								<label htmlFor="eventDates">Date & Heure</label>
								<div id="eventAdd-date-inputs" name="eventDates">
									<div>
										<label htmlFor="eventDateTimeStart">Début</label>
										<input className="user-input" type="datetime-local" name="eventDateTimeStart" required/>
									</div>
									<div>
										<label htmlFor="eventDateTimeEnd">Fin</label>
										<input className="user-input" type="datetime-local" name="eventDateTimeEnd" required/>
									</div>
								</div>
								<label htmlFor="eventDescription">Description</label>
								<input className="user-input" type="textarea" placeholder="Lorem ipsum..." name="eventDescription" required/>
								<label htmlFor="eventLocation">Endroit</label>
								<input className="user-input" type="text" placeholder="Rouen, en ligne..." name="eventLocation" required/>
								<button className="user-input" type="submit">Ajouter l'événement</button>
							</form>
						</div>
					</>
					: events.length === 0
					?
					<>
						<h2 id="upcoming-details-title">Pas d'événements prévus</h2>
					</>
					:
					<>
						<h2 id="upcoming-details-title">{events[selectedEventId].name}</h2>
						<div id="upcoming-details-full">
							<p><i className="fa-solid fa-calendar-days fa-fw accent-dark"></i> {convertDate(events[selectedEventId].date.start)}</p>
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