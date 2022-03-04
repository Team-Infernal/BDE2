import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../styles/Navbar.scss";

export const Navbar = () => {
	const { pathname } = useLocation();
	const [expanded, setExpanded] = useState(false);

	return (
		<header id="navbar">
			<nav>
				<div id="navbar-logo-container">
					<p id="navbar-logo">&lt;Logo&gt;</p>
				</div>
				<div id="navbar-links-container" className={expanded ? "expanded" : "minimized"}>
					<p className={`fancy-link inverted ${pathname === "/" ? "active" : ""}`}><NavLink to="/" className="">Accueil</NavLink></p>
					<p className={`fancy-link inverted ${pathname === "/equipe" ? "active" : ""}`}><NavLink to="equipe" className="">Equipe</NavLink></p>
					<p className={`fancy-link inverted ${pathname === "/evenements" ? "active" : ""}`}><NavLink to="evenements">Evenements</NavLink></p>
					<p className={`fancy-link inverted ${pathname === "/boutique" ? "active" : ""}`}><NavLink to="boutique">Boutique</NavLink></p>
					<p className={`fancy-link inverted connexion ${pathname === "/connexion" ? "active" : ""}`}><NavLink to="connexion">Connexion</NavLink></p>
					<p id="nav-menu" onClick={() => setExpanded(!expanded)}><i className="fa-solid fa-bars fa-fw"></i></p>
				</div>
			</nav>
		</header>
	);
}