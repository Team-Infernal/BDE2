import { NavLink } from "react-router-dom";

import "../styles/Navbar.scss";

export const Navbar = () => {
	return (
		<header id="navbar">
			<nav>
				<p id="page-logo"><NavLink to="/">&lt;Logo&gt;</NavLink></p>
				<p className="fancy-link inverted"><NavLink to="/">Accueil</NavLink></p>
				<p className="fancy-link inverted"><NavLink to="vitrine">Vitrine</NavLink></p>
				<p className="fancy-link inverted"><NavLink to="boutique">Boutique</NavLink></p>
				<p className="fancy-link inverted connexion"><NavLink to="connexion">Connexion</NavLink></p>
			</nav>
		</header>
	);
}