import "../assets/css/login.css"
import CardContainer from "./CardContainer"

function LoginSection() {
	return (
		<section className="column">
			<header className="login-header">
				<h1>
					Ya tienes cuenta? <a href="/">Inicia sesión</a>
				</h1>
			</header>
			<CardContainer
				title="¡Únete a la comunidad!"
				description="Para empezar, dinos que cuenta te gustaría abrir."
			></CardContainer>
		</section>
	)
}

export default LoginSection
