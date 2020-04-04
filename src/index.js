import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import HerosService from './service'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import {HerosServiceProvider} from "./components/StoreServiceContext";

const herosService = new HerosService()

ReactDOM.render(
	<ErrorBoundry>
		<HerosServiceProvider value={herosService}>
			<Router>
				<App />
			</Router>
		</HerosServiceProvider>
	</ErrorBoundry>,
  document.getElementById('root')
);
