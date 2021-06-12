import React from "react"
import "../assets/css/register.css"
import check from "../assets/img/circle check full.png"
import google from "../assets/img/flat-color-icons_google.png"
import Modal from "./Modal"

function RegisterContainer({ handleSubmit, handleChange, form }) {
	return (
		<div className="register-container">
			<h1 className="form-title">Registra tu cuenta individual</h1>
			<form autoComplete="on">
				<label>Nombre completo*</label>
				<input className="input box is-medium" type="text" required />
				<label>Email address*</label>
				<input
					className="input box is-medium"
					type="mail"
					pattern=".+@gmail\.com"
					required
				/>
				<label>Contraseña*</label>
				<input className="input box is-medium" type="password" required />
				<label>
					<img src={check} alt="" />
					Acepto los terminos y condiciones
				</label>
				<button
					onClick={handleSubmit}
					className="button is-success is-fullwidth"
				>
					Registrar Cuenta
				</button>
				<button
					onClick={handleSubmit}
					className="button is-white box is-fullwidth"
				>
					<img src={google} alt="" />
					Regístrate con Google
				</button>
			</form>
			<Modal></Modal>
		</div>
	)
}

export default RegisterContainer
