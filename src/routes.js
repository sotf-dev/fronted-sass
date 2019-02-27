import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import App from './components/app/App'
import BookLayout from './components/book/BookLayout';
import Children from './children';
import StudentLayout from './components/students/StudentLayout';
import BookLoanLayout from './components/booksloan/BookLoanLayout';
import AuthorsLayout from './components/authors/AuthorsLayout';

const SassRoutes = () =>
	<HashRouter
			getUserConfirmation={getConfirmation}>
		<Children>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route exact path="/books" component={BookLayout}/>
				<Route exact path="/students" component={StudentLayout}/>
				<Route exact path="/booksloan" component={BookLoanLayout}/>
				<Route exact path="/authors" component={AuthorsLayout}/>
			</Switch>
		</Children>
	</HashRouter>;

export default SassRoutes

const getConfirmation = (message, callback) => {
	const allowTransition = window.confirm(message)
	callback(allowTransition)
}