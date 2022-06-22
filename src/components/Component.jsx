import React from "react";

class Component extends React.Component {

	constructor(props) {
		super(props)
		const items = []   //массив для рендера

		this.state = {
			log: { numContent: 0, id: 0 },
			items: items,
			button: "disabled",   //изначально неактивна кнопка

		}
	}


	handleClickPlus = () => {
		const newState = {
			log: {
				numContent: ++this.state.log.numContent,		// отображаемый контент
				id: ++this.state.log.id								// id для последующего удаления элемента
			}
		}
		this.state.items.push(this.state.log)					// собираем в массив, чтоб позже отрендерить
		this.setState(newState)										// записываем массив в state
		if (this.state.log.numContent >= 1) this.setState(() => ({ button: "" })) //кнопка активна при наличие элементов
	}
	handleClickMinus = () => {
		const newState = {
			log: {
				numContent: --this.state.log.numContent,
				id: ++this.state.log.id								// id всегда инкрементируем для уникальности
			}
		}
		this.state.items.push(this.state.log)
		this.setState(newState)
		if (this.state.log.numContent === 0) this.setState({ button: "disabled" }) //кнопка неактивна при отсутствие элементов
	}

	renderItem = ({ numContent, id }) => { //деструктурируем обьект: numContent - для отображения контента, id - для удаления элемента в removeItem()
		return <button onClick={this.removeItem(id)} className="list-group-item list-group-item-action" key={id}>{numContent}</button>
	}

	removeItem = (id) => (e) => {
		e.preventDefault();
		const newItems = this.state.items.filter((item) => item.id !== id); //собираем новый массив без текущего элемента
		this.setState({ items: newItems });
	};

	render() {
		return (
			<>
				<div>
					<div className="btn-group font-monospace" role="group">
						<button type="button" onClick={this.handleClickPlus} className="btn btn-outline-success">+</button>
						<button type="button" onClick={this.handleClickMinus} className={`btn btn-outline-danger ${this.state.button}`}>-</button>
					</div>
				</div>
				<div className="list-group">
					{this.state.items.reverse().map((index) => this.renderItem(index))}
				</div>
			</>
		)
	}
}
export default Component