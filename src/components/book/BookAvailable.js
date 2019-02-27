import React, {Component} from 'react';

export default class BookAvailable extends Component {

	render() {
		return (
				<div className="col-md-8" style={{borderRight: '1px solid rgba(232, 232, 232, 0.6)'}}>
					<div className="col-12">
						<h1 className="display-4 font-weight-bold book-disponible proxima-nova">Libros
							disponibles</h1>
					</div>

					{/* Bookes*/}
					<div className="row">
						{
							this.props.sassbook.map((books, index) => {
								return (
										<div className="card mr-1 ml-1 mb-4 shadow-sm" key={index}  style={{ width: "22rem" }}>
											<div className="card-body">
												<h5 className="card-title font-weight-bold proxima-nova">
													<i className="fas fa-book text-warning"/> { books.titulo }
												</h5>

												<h6 className="card-subtitle mb-2 text-muted">
													Editorial: { books.editorial }
												</h6>
												<p className="card-text text-muted">
													Area: { books.area }
												</p>

												{/*<a href="#" className="card-link">Card link</a>
												<a href="#" className="card-link">Another link</a>*/}
											</div>
										</div>
								);
							})
						}
					</div>

				</div>
		);
	}
}

