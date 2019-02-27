import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import Navbar from '../ui/Navbar';
import BookAvailable from '../book/BookAvailable';
import BookLoan from '../book/BookLoan';
import {
	sassbooks,
	sassBooksLoan,
} from '../../api/server/ServerApi';
import Header from '../ui/header/Header';
import {server_api, version_api} from '../../config/config';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			search: [],
		};
	}

	componentDidMount() {
		this.props.sassbooks();
		this.props.booksLoan();

		const search_box = document.getElementById('sass-box-search');
		search_box.addEventListener('keyup', () => {
			if (search_box.textContent !== '') {
				axios.get(
						`${server_api}/${version_api}/searchbook/${search_box.textContent}`)
						.then((response) => {
							this.setState({search: response.data});
						});
			} else {
				this.setState({search: []});
			}
		});
	}

	render() {
		return (
				<div className={'sass-app'}>
					<Navbar/>

					<div className="container-fluid content-search">
						<Header/>
						{/* Modal Search */}
						<div className="modal fade sass-search" tabIndex="-1" role="dialog">
							<div className="modal-dialog modal-xl">
								<div className="modal-content">
									<div className="container">
										<div className="modal-header" contentEditable="true"
												 data-placeholder='Que libro desea buscar...'
												 role="textbox"
												 id={'sass-box-search'}/>

										<div className="modal-body">
											<div className="row">
												{
													this.state.search.map((books, index) => {
														return (
																<div className="card mr-1 ml-1 mb-4 shadow-sm"
																		 key={index} style={{width: '22rem'}}>
																	<div className="card-body">
																		<h5 className="card-title font-weight-bold proxima-nova">
																			<i className="fas fa-book-open text-info"/> {books.titulo}
																		</h5>

																		<h6 className="card-subtitle mb-2 text-muted">
																			Editorial: {books.editorial}
																		</h6>
																		<p className="card-text text-muted">
																			Area: {books.area}
																		</p>
																	</div>
																</div>
														);
													})
												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid" style={{ marginTop: '5rem'}}>
						<div className="container books mt-5 mb-5">
							<div className="row">
								<BookAvailable sassbook={this.props.books}/>
								<BookLoan sassbooksloan={this.props.booksloan}/>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

const mapStateProps = (state) => {
	return state;
};

const matchDispatchProps = (dispatch) => {
	return bindActionCreators({
		sassbooks: sassbooks,
		booksLoan: sassBooksLoan,
	}, dispatch);
};

export default connect(mapStateProps, matchDispatchProps)(App);
