import React, {Component} from 'react';

export default class AuthorsContent extends Component {

	render() {
		return (
				<div className="col-md-12">
					{/* Bookes*/}
					<div className="row">
						{
							this.props.sassauthors.map((authors, index) => {
								return (
										<div className="card mr-1 ml-1 mb-4 shadow-sm" key={index}  style={{ width: "23rem" }}>
											<div className="card-body">
												<h5 className="card-title font-weight-bold proxima-nova">
													<i className="fas fa-user text-primary"/> {authors.name }
												</h5>

												<h6 className="card-subtitle mb-2 text-muted">
													<i className="fas fa-map-marked text-primary"/> Nacionalidad: { authors.country }
												</h6>

												<p className="card-text text-muted">
													<i className="fas fa-sun text-warning"/> Edad: { authors.age }
												</p>

												<p className="card-text text-muted">
													<i className="fas fa-book text-danger"/> Libro: <span className="font-weight-bold" style={{color: '#004870'}}>{ authors.book }</span>
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

