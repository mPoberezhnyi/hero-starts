import React, { useState, useEffect } from 'react'
import SearchPanel from '../components/SearchPanel'
import TeamList from '../components/TeamList'
import { TEAM_LISTS } from "../constants";
import WithHerosService from '../components/WithHerosService'

const HomePage = ({herosService: { getHeros } }) => {

	//{herosService: { getHeros } }
	const [heros, setHeros] = useState([])
	const [teams, setTeams] = useState([])
	const [searchReqest, setSearchReqest] = useState('')

	useEffect(() => {
		createTeams()
	}, [])

	// console.log('tes.....', props.herosService.getHeros())

	const createTeams = async () => {
		try {
			const herosList = await getHeros()
			setHeros(herosList)
			updateList(herosList)
		} catch (e) {
			setTeams([])
		}
	}

	// const search = heros => {
	// 	if (search.length === 0) {
	// 		return heros;
	// 	}
	//
	// 	return heros.filter((item) => {
	// 		return item.name.toLowerCase().indexOf(searchReqest.toLowerCase()) > -1;
	// 	});
	// }

	const search = herosList => {
		console.log(!searchReqest.length)
		// if (searchReqest.length === 0) {
		// 	return herosList
		// }

		return herosList.map(item => {

			const inSearch = item.name.toLowerCase().indexOf(searchReqest.toLowerCase()) > -1;

			if (!inSearch || !searchReqest.length) {
				return {
					...item,
					inSearch: false
				}
			}
			else {
				return {
					...item,
					inSearch: true
				}
			}
		})
	}

	const updateList = (list) => {
		const newList = search(list)
		const teamsList = sortForTeams(newList)
		setTeams(teamsList)
	}

	const sortForTeams = players => TEAM_LISTS.map(
		({ shortName }) => players.filter(item => {
				if(shortName === item.primary_attr) {
					return {
						...item
					}
				}
			}
		)
	)

	// const sortForTeams = players => players.reduce((acc = [], item) => {
	// 	const n = TEAM_LISTS.findIndex(item.primary_attr)
	// 	console.log(n)
	// 	const result = acc[n].push({
	// 		...item,
	// 		inSearch: true
	// 	})
	// 	console.log(result)
	// 	return result
	// })

	const enterSearchRequest = (request) => {
		console.log(request, request.length)
		setSearchReqest(request)
		updateList(heros)
	}

	const teamList = () => {

		// const teams = await createTeams()
		//
		// return teams.map(
		// 	(item, index) =>
		// 		<TeamList key={index}
		// 				  teamName={TEAM_LISTS[index].fullName}
		// 				  herosList={item} />
		// )

		return <div>dfcgvhbjnmkljnhbgvf</div>
	}


	return (
		<div>
			<SearchPanel enterSearchRequest={enterSearchRequest} />
			<div className="teams-list">
				{
					teams.map(
						(item, index) =>
							<TeamList key={index}
									  teamName={TEAM_LISTS[index].fullName}
									  herosList={item} />
					)
				}
				{/*{teamList}*/}
			</div>
		</div>
	)
}

export default WithHerosService()(HomePage)
// export default HomePage