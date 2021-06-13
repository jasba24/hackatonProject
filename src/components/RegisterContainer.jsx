import React from "react"
import "../assets/css/register.css"
import check from "../assets/img/circle check full.png"
import google from "../assets/img/flat-color-icons_google.png"
import Modal from "./Modal"

class RegisterContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			register: false,
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		const inputs = document.querySelectorAll(".input")
		console.log()

		if (
			inputs[1].value.includes("@gmail.com") &&
			inputs[0].value !== "" &&
			inputs[2].value !== ""
		) {
			this.props.handleChange()
		} else {
			this.setState({ register: !this.state.register })
		}
	}
	close = () => {
		const modal = document.querySelector(".modal")
		modal.classList.remove("is-active")
	}
	render() {
		return (
			<div className="register-container">
				<div className="register-text">
					<h1 className="form-title">{this.props.title}</h1>
					<p className="localization-text">{this.props.description}</p>
				</div>
				<form>
					<label>{this.props.form1}*</label>
					<input
						className="input box is-medium"
						type="text"
						placeholder="Ingrese su nombre"
						required
					/>
					<label>{this.props.form2}*</label>
					<input
						className="input box is-medium"
						type="mail"
						id="email"
						placeholder="Ingrese su correo"
						required
					/>
					<label>{this.props.form3}*</label>
					<input
						className="input box is-medium"
						type="password"
						placeholder="Ingrese su contraseña"
						required
					/>
					<label>
						<img src={check} alt="" />
						Acepto los terminos y condiciones
					</label>
					<button
						onClick={this.handleSubmit}
						className="button is-success is-fullwidth"
					>
						Registrar Cuenta
					</button>
					<button
						onClick={this.handleSubmit}
						className="button is-white box is-fullwidth"
					>
						<img src={google} alt="" />
						Regístrate con Google
					</button>
				</form>
				{this.state.register && (
					<Modal
						close={this.close}
						className="modal"
						description="Asegurate de completar todos los campos"
						title="!Ups algo ha salido mal¡"
					></Modal>
				)}
			</div>
		)
	}
}

export default RegisterContainer
