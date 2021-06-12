import React from "react"

export default function Header({ value, clase, backOne }) {
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
							<span style={{ color: "blue" }}>Personal Info.</span>{" "}
						</h1>
					</div>
				</React.Fragment>
			)}
		</header>
	)
}
