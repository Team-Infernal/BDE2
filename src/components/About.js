import "../styles/About.scss";

export const About = () => {
	return (
		<section id="about">
			<div id="about-text-container">
				<h1 id="about-title" className="fancy-text">Incroyable BDE</h1>
				<h2 className="section-title">A propos de nous</h2>
				<p className="section-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste at, ipsam deserunt deleniti molestiae voluptatibus. Excepturi cupiditate a, id asperiores aperiam sunt laudantium tenetur natus omnis libero aliquid, non cum nemo commodi quisquam sequi voluptate.</p>
			</div>
			<div id="about-image-container">
				<img id="about-image" src={require("../images/charles.jpg")} alt="Logo" />
			</div>
		</section>
	);
}