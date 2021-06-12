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
		console.log(this.value)
	}
	backOne = () => {
		this.setState({ value: this.state.value - 1 })
	}
	toogleClass = () => {
		return this.state.value === 0 ? "" : "register-header"
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
					<RegisterContainer></RegisterContainer>
				)}
			</section>
		)
	}
}

export default LoginSection
