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
			<div id="footer-logos">
				<p>
					<a className="fancy-link" href="#about">A propos</a>
					<span className="separator">—</span>
					<i className="logo fa-brands fa-twitter fa-fw"></i>
					<i className="logo fa-brands fa-instagram fa-fw"></i>
					<i className="logo fa-brands fa-linkedin-in fa-fw"></i>
					<i className="logo fa-brands fa-discord fa-fw"></i>
					{/* <img id="charles" src={charles} alt="charles" /> */}
				</p>
			</div>
		</footer>
	);
}