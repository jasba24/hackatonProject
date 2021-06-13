import React from "react"
import "../assets/css/login.css"
import CardContainer from "./CardContainer"
import RegisterContainer from "./RegisterContainer"
import Header from "./Header"
import Localization from "./Localization"

class LoginSection extends React.Component {
	constructor() {
		super()
		this.state = {
			value: 0,
		}
	}

	handleClick = e => {
		this.setState({ value: 1 })
	}
	backOne = () => {
		this.setState({ value: this.state.value - 1 })
	}
	toogleClass = () => {
		return this.state.value === 0 ? "" : "register-header"
	}
	handleChange = () => {
		this.setState({ value: this.state.value + 1 })
	}
	render() {
		return (
			<section className="column">
				<Header
					clase={this.toogleClass()}
					value={this.state.value}
					backOne={this.backOne}
				></Header>
				{this.state.value === 0 && (
					<CardContainer handleClick={this.handleClick}></CardContainer>
				)}
				{this.state.value === 1 && (
					<RegisterContainer
						title="Registra tu cuenta individual"
						form1="Nombre completo"
						form2="Email address"
						form3="Contraseña"
						value={this.state.value}
						handleChange={this.handleChange}
					></RegisterContainer>
				)}
				{this.state.value === 2 && (
					<Localization
						title="Completa tu Perfil"
						form1="Número de teléfono"
						form2="Dirección"
						form3="País de residencia"
						description="Para poder revisar que se trata de una cuenta real, necesitamos la
						siguiente informacion."
						value={this.state.value}
						handleChange={this.handleChange}
					></Localization>
				)}
				{this.state.value === 3 && (
					<Localization
						title="Verifica tu Perfil"
						form1="Número de tarjeta"
						form2="Código secreto"
						description="Para poder revisar que se trata de una cuenta real, necesitamos la
						siguiente informacion."
						value={this.state.value}
						handleChange={this.handleChange}
					></Localization>
				)}
				{this.state.value > 3 && (
					<CardContainer handleClick={this.handleClick}></CardContainer>
				)}
			</section>
		)
	}
}

export default LoginSection
