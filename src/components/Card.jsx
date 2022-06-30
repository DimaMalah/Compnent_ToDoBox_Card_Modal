import React from "react";
import CardBody from "./CardBody";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	static Body = CardBody
	static Title = CardTitle
	static Text = CardText

	render() {
		const { children } = this.props
		return (
			<div className="card">{children}</div>
		)
	}
}

export default Card