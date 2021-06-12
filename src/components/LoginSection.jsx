import React from "react"
import "../assets/css/login.css"
import CardContainer from "./CardContainer"
import RegisterForm from "./RegisterForm"
class LoginSection extends React.Component {
	constructor() {
		super()
		this.state = {
			value: false,
		}
	}
	handleClick = e => {
		this.setState({ value: true })
		console.log(this.value)
	}
	render() {
		return (
			<section className="column">
				<header className="login-header">
					<h1>
						Ya tienes cuenta? <strong>Inicia sesión</strong>
					</h1>
				</header>
				{!this.state.value ? (
					<CardContainer handleClick={this.handleClick}></CardContainer>
				) : (
					<RegisterForm></RegisterForm>
				)}
			</section>
		)
	}
}

export default LoginSection
