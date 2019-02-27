import React, {Component} from 'react';

export default class BookAvailableContent extends Component {

	render() {
		return (
				<div className="col-md-12">
					{/* Bookes*/}
					<div className="row">
						{
							this.props.sassbook.map((books, index) => {
								return (
										<div className="card mr-1 ml-1 mb-4 shadow-sm" key={index}  style={{ width: "23rem" }}>
											<div className="card-body">
												<h5 className="card-title font-weight-bold proxima-nova">
													<i className="fas fa-book text-primary"/> { books.titulo }
												</h5>

												<h6 className="card-subtitle mb-2 text-muted">
													Editorial: { books.editorial }
												</h6>
												<p className="card-text text-muted">
													Area: { books.area }
												</p>

												<a href="#" className="card-link">Leer verion digital</a>
												<a href="#" className="card-link">Prestar el libro</a>
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

