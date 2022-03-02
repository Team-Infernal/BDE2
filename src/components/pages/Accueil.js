import "../../styles/Accueil.scss";

export const Accueil = () => {
	return (
		<main>
			<h1 className="title"> <i className="fab fa-laravel"></i> Nom incroyable de BDE</h1>
			<div id="desc_container">
				<p id="main_description">Lorem ipsum dolor sit amet. Aut sint explicabo eos eaque officiis est ipsum libero quo dolores delectus. Et autem nesciunt ad ullam magni ea officiis rerum qui dolor mollitia et nihil dolor eum quos soluta? Ut quia galisum quo recusandae omnis est dolores accusamus sit officia corrupti. Id ratione perferendis non rerum rerum sed praesentium quia sed iste culpa a itaque aliquam a dolore recusandae qui corrupti quae. Ea consequatur voluptatem qui facilis officiis ex vero accusantium et officiis similique aut dignissimos earum. Non odio voluptates vel ipsam quia sit omnis explicabo et rerum recusandae ut quam nemo non velit impedit ut necessitatibus eligendi. Est nihil quidem non itaque omnis ut cupiditate dolores qui aperiam molestias. Cum dolorem enim et dolores facilis aut numquam quidem et facilis eaque sed magni consectetur.</p>
				<img id="main_img" src="https://www.radioclassique.fr/wp-content/thumbnails/uploads/2019/05/bieres-article-tt-width-1200-height-900-crop-1-bgcolor-ffffff.jpg" alt="pres"/>
			</div>
			<h1><i className="fas fa-calendar-days"></i> Planning des prochains événements </h1>
			<div id="planning">
				<p className="event_name"><span className="Date_planning">Jeudi 24 décembre :</span> Bière</p>
				<p className="event_name"><span className="Date_planning">Jeudi 24 décembre :</span> Re-bière</p>
				<p className="event_name"><span className="Date_planning">Jeudi 24 décembre :</span> Encore bière</p>
				<p className="event_name" id="border_to_hide"><span className="Date_planning">A suivre :</span> <a href="#a">En savoir plus</a></p>
			</div>
		</main>
	);
}