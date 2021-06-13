import React from "react"

function Modal({ description, title, close }) {
	return (
		<div className="modal is-active">
			<div className="modal-background"></div>
			<div className="modal-card">
				<div className="modal-card-head">
					<h1 className="modal-card-title">{title}</h1>
					<p
						style={{ cursor: "pointer" }}
						className="is-large is-white"
						onClick={close}
					>
						X
					</p>
				</div>
				<div className="modal-card-body">
					<p>{description}</p>
					<button className="button is-medium is-light" onClick={close}>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
