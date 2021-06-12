import flecha from "../assets/flecha.png"

function CardImage({ img, clase, title, description }) {
	return (
		<div className="box grid-container">
			<div className={clase}>
				<img className="user-logo" src={img} alt="" />
			</div>
			<div className="text-container">
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<img className="flecha" src={flecha} alt="" />
		</div>
	)
}

export default CardImage
