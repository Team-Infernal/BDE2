import "../styles/Equipe.scss";

export const Equipe = () => {
	return (
		<main>
			<section className="equipe-presentation-1">
				<div className="equipe-presentation-image">
					<img src={require("../images/dorian.jpg")} alt="President Dorian Chesnais"/>
					{/* <h3>Président</h3> */}
				</div>
				<div className="equipe-presentation-details">
					<div>
						<h2>Dorian Chesnais</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet dignissim lacus. In tempus, mauris eget convallis sollicitudin, neque dolor.</p>
					</div>
					<p className="equipe-role">President</p>
				</div>
			</section>
			<section className="equipe-presentation-2">
				
			</section>
		</main>
	);
}