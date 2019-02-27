import React, {Component} from 'react';

export default class BookLoanContent extends Component {

	render() {
		return (
				<div className="col-md-12">
					{/* Bookes*/}
					<div className="row">
						{
							this.props.sassbookloan.map((booksloan, index) => {
								return (
										<div className="card mr-1 ml-1 mb-4 shadow-sm" key={index}  style={{ width: "23rem" }}>
											<div className="card-body">
												<h5 className="card-title font-weight-bold proxima-nova">
													<i className="fas fa-book text-warning"/> {booksloan.book}
												</h5>

												<h6 className="card-subtitle text-muted">
													Prestado a: <span className="font-weight-bold">{booksloan.name}</span>
												</h6>

												<p className="card-text text-muted">
													Fecha de prestamo: {booksloan.date_prestamo}
												</p>

												<p className="card-text text-muted">
													Devuelto: {booksloan.devuelto}
												</p>
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

