import React from "react"

class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="modal-footer">{this.props.children}</div>
		)
	}
}
export default Footer