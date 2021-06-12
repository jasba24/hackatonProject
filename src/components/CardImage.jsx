import React from "react"
import flecha from "../assets/img/flecha.png"

class CardImage extends React.Component {
	render() {
		const { img, clase, title, description, handleClick } = this.props
		return (
			<div onClick={handleClick} className="box grid-container">
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
}

export default CardImage
