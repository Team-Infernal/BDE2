import { Routes, Route } from "react-router-dom";

import { Accueil } from "../pages/Accueil";
import { Vitrine } from "../pages/Vitrine";
import { Boutique } from "../pages/Boutique";
import { Gestion } from "../pages/Gestion";
import { Erreur } from "../pages/Erreur";
import "../styles/Main.scss";

export const Main = () => {
	return (
		<main id="main">
			<Routes>
				<Route path="/" element={<Accueil />}></Route>
				<Route path="/vitrine" element={<Vitrine />}></Route>
				<Route path="/boutique" element={<Boutique />}></Route>
				<Route path="/gestion" element={<Gestion />}></Route>
				<Route path="*" element={<Erreur />}></Route>
			</Routes>
		</main>
	);
}