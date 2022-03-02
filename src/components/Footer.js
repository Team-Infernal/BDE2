import "../styles/Footer.scss";

export const Footer = () => {
	return (
		<footer id="footer">
			<div id="footer-content">
				<div id="footer-content-1">
					<h3>Nom Incroyable de BDE</h3>
					<h4><i className="fa-solid fa-envelope fa-fw accent"></i> <a className="fancy-link" href="mailto:contact@incroyablebde.fr">contact@incroyablebde.fr</a></h4>
					<h4><i className="fa-solid fa-location-dot fa-fw accent"></i> <a className="fancy-link" href="https://goo.gl/maps/hPD9r2huAapAYFHr7" target="_blank" rel="noreferrer">CESI Rouen</a></h4>
				</div>
				<div id="footer-content-2">
					<p className="">Lorem ipsum dolor sit amet. Aut sint explicabo eos eaque officiis est ipsum libero quo dolores delectus.</p>
				</div>
			</div>
			<div id="footer-links">
				<p id="footer-about"><i className="fa-solid fa-circle-info fa-fw accent"></i> <a className="fancy-link" href="#about">A propos</a></p>
				<p title="Twitter"><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="logo fa-brands fa-twitter fa-fw"></i></a></p>
				<p title="Instagram"><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="logo fa-brands fa-instagram fa-fw"></i></a></p>
				<p title="LinkedIn"><a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="logo fa-brands fa-linkedin-in fa-fw"></i></a></p>
				<p title="Discord"><a href="https://discord.com" target="_blank" rel="noreferrer"><i className="logo fa-brands fa-discord fa-fw"></i></a></p>
			</div>
		</footer>
	);
}