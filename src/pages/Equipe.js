import "../styles/Equipe.scss";

export const Equipe = () => {
	return (
		<main>
			<section className="section-presidence">
				<h2 className="section-title">Présidence</h2>
				<div>
					<div>

					</div>
					<div>

					</div>
				</div>
			</section>
			<section className="equipe-presentation">
				<div className="equipe-presentation-image">
					<img src={require("../images/dorian.jpg")} alt="President Dorian Chesnais"/>
				</div>
				<div className="equipe-presentation-details">
					<div>
						<h2>Dorian Chesnais</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet dignissim lacus. In tempus, mauris eget convallis sollicitudin, neque dolor.</p>
					</div>
					<p className="equipe-role">President</p>
				</div>
			</section>
			<section className="equipe-presentation">
				<div className="equipe-presentation-image">
					<img src={require("../images/dorian.jpg")} alt="President Dorian Chesnais"/>
				</div>
				<div className="equipe-presentation-details">
					<div>
						<h2>Lorem Ipsum</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet dignissim lacus. In tempus, mauris eget convallis sollicitudin, neque dolor.</p>
					</div>
					<p className="equipe-role">Vice President</p>
				</div>
			</section>
		</main>
	);
}