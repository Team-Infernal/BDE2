import moment from "moment";
import "moment/locale/fr";

import "../styles/Upcoming.scss";

export const Upcoming = () => {

	moment.locale("fr");
	const { events } = require("../content.json");
	let viewEventsAmount = 3;

	const convertDate = (inputDate) => moment(inputDate).format("dddd D MMMM - H:mm");

	return (
		<section id="upcoming">
			<h1 className="section-title">Événements à venir</h1>
			<div id="upcoming-content">
			{
				events.filter(event => moment().isBefore(moment(event.date)))
					.sort((eventA, eventB) => moment(eventA.date).isAfter(moment(eventB.date)))
					.slice(0, viewEventsAmount)
					.map(event => {
					return (
						<>
							<h3 className="upcoming-date">{convertDate(event.date)}</h3>
							<div>
								<p className="upcoming-details">{event.name}</p>
								<p className="upcoming-details">{event.description.full}</p>
							</div>
						</>
					);
				})
			}
			</div>
		</section>
	);
}