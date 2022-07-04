import React from "react"

class Body extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="modal-body">{this.props.children}</div>
		)
	}
}
export default Body