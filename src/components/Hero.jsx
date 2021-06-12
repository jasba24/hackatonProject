import Vector from "../assets/Vector 2.png"
function Hero() {
	return (
		<section className="column hero-container">
			<p className="home-title">
				Nuwe es la plataforma que convierte el desarrollo profesional la
				búsqueda de trabajo y las conexiones de personas y empresas en un juego.
				Haciendo que puedas centrarte en lo que te gusta, programar, diseñar,
				crear, planear...
				<br />
				<img className="hero-icon" src={Vector} alt="" />
			</p>
		</section>
	)
}

export default Hero
