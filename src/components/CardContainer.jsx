import user from "../assets/img/user.png"
import briefcase from "../assets/img/briefcase.png"
import CardImage from "./CardImage"

function CardContainer({ handleClick }) {
	return (
		<div className="form-container">
			<h1 className="card-title">¡Únete a la comunidad!</h1>
			<p className="card-description">
				Para empezar, dinos que cuenta te gustaría abrir.
			</p>
			<CardImage
				clase="developers-container"
				img={user}
				handleClick={handleClick}
				title="Developers"
				description="Cuenta personas para entrar en el mundo dev"
			></CardImage>
			<CardImage
				clase="business-container"
				img={briefcase}
				title="Business"
				description="Tienes o perteneces a una compañia"
			></CardImage>
		</div>
	)
}

export default CardContainer
