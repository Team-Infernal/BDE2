import { NavLink } from "react-router-dom";

import "../styles/Footer.scss";

export const Footer = () => {

	const data = require("../content.json");
	const quotes = data.quotes;
	const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
	const randomQuote = getRandomQuote();

	return (
		<footer id="footer">
			<div id="footer-content">
				<div id="footer-content-1">
					<h3>Nom Incroyable de BDE</h3>
					<h4><i className="fa-solid fa-envelope fa-fw accent"></i> <a className="fancy-link" href="mailto:contact@incroyablebde.fr">contact@incroyablebde.fr</a></h4>
					<h4><i className="fa-solid fa-location-dot fa-fw accent"></i> <a className="fancy-link" href="https://goo.gl/maps/hPD9r2huAapAYFHr7" target="_blank" rel="noreferrer">CESI Rouen</a></h4>
				</div>
				<div id="footer-content-2">
					<p>{randomQuote}</p>
				</div>
			</div>
			<div id="footer-links">
				<div id="footer-links-info">
					<div>
						{/* <span><NavLink to="a-propos" className="fancy-link">A propos</NavLink></span> */}
						<span><NavLink to="conditions-utilisation" className="fancy-link">Conditions d'utilisation</NavLink></span>
						<span><NavLink to="confidentialite" className="fancy-link">Confidentialité</NavLink></span>
						<span><a className="fancy-link" href="https://teaminfernal.fr" target="_blank" rel="noreferrer">Powered by Infernal</a> <span id="footer-copyright">© 2022</span></span>
					</div>
				</div>
				<div id="footer-links-contact">
					<p title="Twitter"><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="logo fa-brands fa-twitter fa-fw"></i></a></p>
					<p title="Instagram"><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="logo fa-brands fa-instagram fa-fw"></i></a></p>
					<p title="Discord"><a href="https://discord.com" target="_blank" rel="noreferrer"><i className="logo fa-brands fa-discord fa-fw"></i></a></p>
				</div>
			</div>
		</footer>
	);
}