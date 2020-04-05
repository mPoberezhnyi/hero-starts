import React, {useEffect, useState} from 'react';
import {HerosServiceProvider} from "../HerosServiceContext";
import Header from '../Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, HeroPage } from '../../Pages'
import HerosService from '../../service'

const herosService = new HerosService()

const App = () => {

	const [heros, setHeros] = useState([])

	useEffect(() => {
		createTeams()
	}, [])

	const createTeams = async () => {
		const herosList = await herosService.getHeros()
		setHeros(herosList)
	}

	return (
		<div className="App">
			<HerosServiceProvider value={heros}>
				<Router>
					<Header />
					<div className="container">
						<Switch>
							<Route path="/" component={ HomePage } exact />
							<Route path="/:herosName" component={ HeroPage } />
						</Switch>
					</div>
				</Router>
			</HerosServiceProvider>
		</div>
	);
}

export default App