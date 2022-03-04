export const EventAdd = () => {
	return (
		<section>
			<h2 className="section-title">Ajouter un événement</h2>
			<form method="POST" action="/api/events/add">
				<input type="text" placeholder="Nom" name="eventName" required/>
				<input type="datetime-local" name="eventDateTime" required/>
				<input type="text" placeholder="Description" name="eventDescription" required/>
				<input type="text" placeholder="Location" name="eventLocation" required/>
				<input type="submit"/>
			</form>
		</section>
	);
}