import { Routes, Route } from "react-router-dom";

import { Accueil } from "../pages/Accueil";
import { Vitrine } from "../pages/Vitrine";
import { Boutique } from "../pages/Boutique";
import { Gestion } from "../pages/Gestion";
import { Erreur } from "../pages/Erreur";
import { CGU } from "../pages/CGU";
import { Confidentialite } from "../pages/Confidentialite";
import { Evenements } from "../pages/Evenements";
import { Equipe } from "../pages/Equipe";
import "../styles/Main.scss";

export const Main = () => {
	return (
		<Routes>
			<Route path="/" element={<Accueil />}></Route>
			<Route path="/vitrine" element={<Vitrine />}></Route>
			<Route path="/boutique" element={<Boutique />}></Route>
			<Route path="/gestion" element={<Gestion />}></Route>
			<Route path="/conditions-utilisation" element={<CGU />}></Route>
			<Route path="/confidentialite" element={<Confidentialite />}></Route>
			<Route path="/evenements" element={<Evenements />}></Route>
			<Route path="/equipe" element={<Equipe />}></Route>
			<Route path="*" element={<Erreur />}></Route>
		</Routes>
	);
}