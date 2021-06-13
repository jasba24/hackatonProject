import React from "react"
import Modal from "./Modal"

class Localization extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			register: false,
			open: false,
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		const inputs = document.querySelectorAll(".input")

		if (this.props.value === 2) {
			if (
				inputs[0].value !== "" &&
				inputs[1].value !== "" &&
				inputs[2].value !== ""
			) {
				this.props.handleChange()
			} else {
				this.setState({ register: !this.state.register })
			}
		} else {
			if (inputs[0].value !== "" && inputs[1].value !== "") {
				this.setState({ open: true })
			} else {
				this.setState({ register: !this.state.register })
			}
		}
	}
	closeModalSuccess = () => {
		const modal = document.querySelector(".modal")
		modal.classList.remove("is-active")
		this.props.handleChange()
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
						type="number"
						placeholder={
							this.props.value === 2
								? "+57 3204304000"
								: "Ingrese su numero de tarjeta"
						}
						required
					/>
					<label>{this.props.form2}*</label>
					<input
						className="input box is-medium"
						type="text"
						required
						placeholder={
							this.props.value === 2
								? "Ingrese la direccion completa"
								: "Ingrese su codigo"
						}
					/>
					{this.props.form3 && (
						<React.Fragment>
							<label>{this.props.form3}*</label>
							<select className="input" name="Pais" id="">
								<option>Colombia</option>
								<option>Mexico</option>
								<option>Chile</option>
								<option>Argentina</option>
								<option>España</option>
							</select>
						</React.Fragment>
					)}
					<button
						onClick={this.handleSubmit}
						className="button is-success is-fullwidth"
					>
						Guardar y continuar
					</button>
					<label className="button localization-text is-white box is-fullwidth">
						Tu información es segura
					</label>
				</form>
				{this.state.register && (
					<Modal
						close={this.close}
						className="modal"
						description="Asegurate de completar todos los campos"
						title="!Ups algo ha salido mal¡"
					></Modal>
				)}
				{this.state.open && (
					<Modal
						close={this.closeModalSuccess}
						className="modal"
						description="Tu cuenta se ha creado correctamente"
						title="!Todo guay¡"
					></Modal>
				)}
			</div>
		)
	}
}

export default Localization
