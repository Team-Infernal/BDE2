import moment from "moment";
import "moment/locale/fr";

import { About } from "../components/About";
import { Upcoming } from "../components/Upcoming";
import { Upcoming2 } from "../components/Upcoming2";
import "../styles/Accueil.scss";

export const Accueil = () => {
	
	moment.locale("fr");
	const { events } = require("../content.json");
	let viewEventsAmount = 3;

	const convertDate = (inputDate) => moment(inputDate).format("dddd D MMMM - H:mm");

	const showDesc = (e) => {
		console.log(e.target)
	}

	return (
		<main id="main">
			<h1 className="title"> <i className="fa-brands fa-audible fa-fw accent"></i> Nom incroyable de BDE</h1>

			<div id="desc_container">

				<p id="main_description">Lorem ipsum dolor sit amet. Aut sint explicabo eos eaque officiis est ipsum libero quo dolores delectus. Et autem nesciunt ad ullam magni ea officiis rerum qui dolor mollitia et nihil dolor eum quos soluta? Ut quia galisum quo recusandae omnis est dolores accusamus sit officia corrupti. Id ratione perferendis non rerum rerum sed praesentium quia sed iste culpa a itaque aliquam a dolore recusandae qui corrupti quae. Ea consequatur voluptatem qui facilis officiis ex vero accusantium et officiis similique aut dignissimos earum. Non odio voluptates vel ipsam quia sit omnis explicabo et rerum recusandae ut quam nemo non velit impedit ut necessitatibus eligendi. Est nihil quidem non itaque omnis ut cupiditate dolores qui aperiam molestias. Cum dolorem enim et dolores facilis aut numquam quidem et facilis eaque sed magni consectetur.</p>
				<img id="main_img" src="https://www.radioclassique.fr/wp-content/thumbnails/uploads/2019/05/bieres-article-tt-width-1200-height-900-crop-1-bgcolor-ffffff.jpg" alt="pres"/>
			
			</div>

			<About />
			<Upcoming />
			<Upcoming2 />

			<h1><i className="fas fa-calendar-days fa-fw"></i> Planning des prochains événements </h1>
			<div id="planning">
				{
					events.filter(event => moment().isBefore(moment(event.date)))
						.sort((eventA, eventB) => moment(eventA.date).isAfter(moment(eventB.date)))
						.slice(0, viewEventsAmount)
						.map(event => {
						return (
							<div key={event.id} className="test">
								<i className="fas fa-angle-right fa-fw more-info" onClick={showDesc}></i>
								<p className="event_name">
									<span className="Date_planning">{convertDate(event.date)}</span>
									{event.name}
									<span className="optional">{event.description.full}</span>
								</p>
							</div>
						);
					})
				}
				<p className="event_name" id="border_to_hide"><span className="Date_planning">A suivre :</span> <a href="#a">En savoir plus</a></p>
			</div>
		</main>
	);
}