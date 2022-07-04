import React from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	static Header = Header
	static Body = Body
	static Footer = Footer

	style = (arg) => {
		if (arg) return { display: "block" }
		return { display: "none" }
	}

	isOpen = (arg) => {
		if (arg) return "fade show"
	}

	render() {

		return (
			<div className={`modal ${this.isOpen(this.props.isOpen)}`} style={this.style(this.props.isOpen)} role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}

}
export default Modal