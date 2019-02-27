import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/js/src/index'
import store from './stores/stores'
import SassRoutes from './routes';

render(<Provider store={store}>
	<Router>
		<SassRoutes/>
	</Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
