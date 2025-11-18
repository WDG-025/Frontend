import "./Hero.css";

const Hero = () => {
	return (
		<section>
			<h2
				className="hero__heading"
				style={{
					// cornerShape: "squircle"
					borderRadius: "1rem",
				}}
			>
				Hero!
			</h2>
		</section>
	);
};
export default Hero;
