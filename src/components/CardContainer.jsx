import user from "../assets/user.png"
import briefcase from "../assets/briefcase.png"
import CardImage from "./CardImage"

function CardContainer({ title, description }) {
	return (
		<div className="card-container">
			<h1 className="card-title">{title}</h1>
			<p className="card-description">{description}</p>
			<CardImage
				clase="developers-container"
				img={user}
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
