import React from 'react'
import WithHerosService from '../components/WithHerosService'

const HeroPage = ({match, herosService: { getHeros } }) => {

	const { herosName } = match.params;

	const createTeams = async () => {
		try {
			const herosList = await getHeros()
			console.log(herosList)
		} catch (e) {
			console.log('error: ', e)
		}
	}

	createTeams()

	return (
		<div>
			{herosName}
		</div>
	)
}

export default WithHerosService()(HeroPage)