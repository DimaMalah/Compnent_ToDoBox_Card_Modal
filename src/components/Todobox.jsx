import React from "react";
import Item from "./Item"

class Todobox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: "",
			tasks: []
		}
	}

	handleChange = (e) => {
		this.setState({ text: `${e.target.value}` })

	}

	handleSubmit = (e) => {
		e.preventDefault()
		const task = { content: this.state.text, id: (new Date()).getTime() }
		this.state.tasks.push(task)
		this.setState({ text: "" })
	}

	onRemove = (id) => {
		const newState = this.state.tasks.filter((item) => { return item.id !== id })
		this.setState({ tasks: newState })
	}

	render() {
		return (
			<>
				<div>
					<div className="mb-3">
						<form onSubmit={this.handleSubmit} className="d-flex">
							<div className="me-3">
								<input type="text" value={this.state.text} required="" onChange={this.handleChange} className="form-control" placeholder="I am going..." />
							</div>
							<button type="submit" className="btn btn-primary">add</button>
						</form>
					</div>
				</div>
				{this.state.tasks.reverse().map((item) => { return <Item key={item.id} content={item.content} id={item.id} updateData={this.onRemove} /> })}
			</>
		)
	}
}

export default Todobox;