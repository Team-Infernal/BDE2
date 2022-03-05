import "../styles/EventAdd.scss";

export const EventAdd = () => {
	return (
		<section id="eventAdd">
			<h2 className="section-title">Ajouter un événement</h2>
			<div id="eventAdd-container">
				<div id="eventAdd-title">
					<h2>Evenement</h2>
				</div>
				<div id="eventAdd-details">
					<form method="POST" action="/api/events/add">
						<label for="eventName">Nom</label>
						<input className="user-input" type="text" placeholder="Soirée, bowling..." name="eventName" required/>
						<label for="eventDateTime">Date & heure</label>
						<input className="user-input" type="datetime-local" name="eventDateTime" required/>
						<label for="eventDescription">Description</label>
						<input className="user-input" type="textarea" placeholder="Lorem ipsum..." name="eventDescription" required/>
						<label for="eventLocation">Endroit</label>
						<input className="user-input" type="text" placeholder="Rouen, en ligne..." name="eventLocation" required/>
						<button className="user-input" type="submit">Ajouter l'événement</button>
					</form>
				</div>
			</div>
		</section>
	);
}