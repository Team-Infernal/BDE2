import { NavLink } from "react-router-dom";

import "../styles/Navbar.scss";

export const Navbar = () => {
	return (
		<header id="navbar">
			<nav>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="vitrine">Vitrine</NavLink>
				<NavLink to="boutique">Boutique</NavLink>
				<NavLink to="gestion">Gestion</NavLink>
			</nav>
		</header>
	);
}