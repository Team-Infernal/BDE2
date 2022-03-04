import { useState, useEffect } from "react";

export const CGU = () => {
	const [cgu, setCGU] = useState([]);

	useEffect(() => {
		fetch("/api/cgu")
			.then(res => res.json())
			.then(data => setCGU(data));
	}, []);

	return (
		<main id="main">
			<h1 id="page-title">Conditions d'utilisation</h1>
			<div>
				{
					cgu.map(section => {
						return (
							<div key={section.name} className="main-box">
								<h3><i className="fa-solid fa-angle-right fa-fw accent"></i>{section.name}</h3>
								<p>{section.content}</p>
							</div>
						)
					})
				}
			</div>
		</main>
	);
}