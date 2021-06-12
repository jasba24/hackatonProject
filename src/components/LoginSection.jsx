import React from "react"
import "../assets/css/login.css"
import CardContainer from "./CardContainer"
import RegisterContainer from "./RegisterContainer"
import Header from "./Header"
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
	handleSubmit = e => {
		e.preventDefault()
	}
	handleChange = e => {
		e.preventDefault()
	}
	render() {
		return (
			<section className="column">
				<Header
					clase={this.toogleClass()}
					value={this.state.value}
					backOne={this.backOne}
				></Header>
				{this.state.value === 0 ? (
					<CardContainer handleClick={this.handleClick}></CardContainer>
				) : (
					<RegisterContainer
						handleSubmit={this.handleSubmit}
					></RegisterContainer>
				)}
			</section>
		)
	}
}

export default LoginSection
