import React from "react";

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<button type="button" className="modal-open-button btn btn-danger">Open</button>
				<div className="modal" style="display: none;" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<div className="modal-title">Modal title</div>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
								</button>
							</div>
							<div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
							<div className="modal-footer">
								<button type="button" className="modal-close-button btn btn-default">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal