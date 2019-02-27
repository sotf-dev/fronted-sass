import React, {Component} from 'react';

export default class Header extends Component {

	render() {
		return (
				<div className="container is-search">
					<div className={'row row-header'}>
						<div className="col-md-8">
							<h1 className="display-4 font-weight-bold mb-5 text-white">
								Tu biblioteca virtual en cualquier lugar donde estes.
							</h1>
							<div className="btn-sass" data-toggle="modal" data-target=".sass-search">
								<i className="fas fa-search"/> Buscar un libro
							</div>
						</div>

						<div className="col-md-4">
							<img src={'/assets/img/bg/drupal.svg'} className={'sass-image-header'}/>
						</div>
					</div>
				</div>
		);
	}
}

