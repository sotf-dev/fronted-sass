import React, {Component} from 'react';

export default class PageTitle extends Component {

	render() {
		return (
				<h1 className="display-4 font-weight-bold text-white text-center w-100 proxima-nova">
					{this.props.pagetitle}
				</h1>
		);
	}
}

