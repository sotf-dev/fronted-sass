import React, {Component} from 'react';

export default class BookLoan extends Component {

	render() {
		return (
				<div className="col-md-4 text-center">
					<div className="col-12">
						<h1 className="display-4 font-weight-bold book-disponible proxima-nova">
							Libros prestados
						</h1>
					</div>
					{

						this.props.sassbooksloan.map((booksloan, index) => {
							return (
									<div className="card mr-1 ml-1 mb-4 shadow-sm" key={index}>
										<div className="card-body">
											<h5 className="card-title font-weight-bold proxima-nova">
												<i className="fas fa-book text-warning"/> {booksloan.book}
											</h5>

											<h6 className="card-subtitle text-muted">
												Prestado a: <span className="font-weight-bold">{booksloan.name}</span>
											</h6>

											<p className="card-text text-muted">
												Fecha prestado: {booksloan.date_prestamo}
											</p>

											<p className="card-text text-muted">
												Devuelto: {booksloan.devuelto}
											</p>
										</div>
									</div>
							);
						})
					}

					<a href='/#/booksloan' className={'view-more'}>Ver mas</a>

				</div>
		);
	}
}

