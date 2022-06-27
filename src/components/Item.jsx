import React from "react";

class Item extends React.Component {
	constructor(props) {
		super(props)
		const { content, id } = this.props

		this.state = {
			task: content,
			idToRemove: id
		}
	}


	renderItem = ({ content, id }) => {
		if (content.trim()) {
			return <div>
				<div className="row">
					<div className="col-auto">
						<button type="button" onClick={() => this.props.updateData(id)} className="btn btn-primary btn-sm"> - </button>
					</div>
					<div className="col">{content.trim()}</div>
				</div>
				<hr />
			</div>
		} else {
			return null
		}
	}

	render() {
		return (
			this.renderItem(this.props)
		)
	}
}

export default Item;