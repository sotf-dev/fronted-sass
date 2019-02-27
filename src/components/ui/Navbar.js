import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return (
				<nav className="navbar navbar-expand-lg navbar-dark bg-sass">
					<div className="container">
						<Link to={'/'} className="navbar-brand">
							<i className="fas fa-book-open fa5-lg"/>
						</Link>

						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
							<span className="navbar-toggler-icon"/>
						</button>

						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav mx-auto">

								<li className="nav-item active">
									<Link to={'/'} className="nav-link">Inicio</Link>
								</li>

								<li className="nav-item active">
									<Link to={'/books'} className="nav-link">Libros</Link>
								</li>

								<li className="nav-item active">
									<Link to={'/authors'} className="nav-link">Autores</Link>
								</li>

								<li className="nav-item active">
									<Link to={'/students'} className="nav-link">Estudiantes</Link>
								</li>

								<li className="nav-item active">
									<Link to={'/booksloan'} className="nav-link">Prestamos</Link>
								</li>
							</ul>
						</div>

						<div className="navbar-nav ml-auto">
							<div className={'icon-sass-search'} data-toggle="modal" data-target=".sass-search">
								<i className="fas fa-search fa5-lg text-white"/>
							</div>
						</div>

					</div>
				</nav>
		);
	}
}
