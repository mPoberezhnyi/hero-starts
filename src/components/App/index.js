import React, { Component } from 'react';
import Header from '../Header'
import { Switch, Route } from 'react-router-dom'
import { HomePage, HeroPage } from '../../Pages'
import './style.scss';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<Switch>
						<Route path="/" component={ HomePage } exact />
						<Route path="/:herosName" component={ HeroPage } />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;