import { Navbar } from "./Navbar";
import { Main } from "./Main";
import { Footer } from "./Footer";
import "../styles/General.scss";

export const App = () => {
	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	);
}