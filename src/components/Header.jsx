import React from "react"

export default function Header({ value, clase, backOne }) {
	const changelabel = (val) => {
		const labels = {
			1: "Personal Info.",
			2: "Localización",
			3: "Verificación por tarjeta",
		}
		return labels[val]
	}
	return (
		<header className={"login-header " + clase}>
			{value === 0 && (
				<h1>
					Ya tienes cuenta? <strong>Inicia sesión</strong>
				</h1>
			)}
			{value > 0 && (
				<React.Fragment>
					<div>
						<h1 onClick={backOne} className="back">
							<span>&lt;</span> Volver
						</h1>
					</div>
					<div>
						<h1>
							PASO 0{value}/03 <br />{" "}
							<label style={{ color: "blue" }}>{changelabel(value)}</label>
						</h1>
					</div>
				</React.Fragment>
			)}
		</header>
	)
}
