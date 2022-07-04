import React from "react"

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="modal-header">
				<div className="modal-title">{this.props.children}</div>
				<button type="button" className="btn-close" onClick={this.props.toggle} data-bs-dismiss="modal" aria-label="Close" >
				</button>
			</div>
		)
	}
}
export default Header