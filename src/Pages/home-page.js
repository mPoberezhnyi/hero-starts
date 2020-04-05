import React, { useState, useEffect, useContext } from 'react'
import SearchPanel from '../components/SearchPanel'
import TeamList from '../components/TeamList'
import { HerosContext } from '../components/HerosServiceContext'
import { TEAM_LISTS } from "../constants";

const HomePage = () => {

	const heros = useContext(HerosContext)

	const [teams, setTeams] = useState([])
	const [searchReqest, setSearchReqest] = useState('')

	useEffect(() => {
		updateList(heros)
	}, [heros])

	const search = herosList => {
		if (searchReqest.length === 0) {
			return herosList
		}

		return herosList.map(item => {

			// const inSearch = item.name.toLowerCase().indexOf(searchReqest.toLowerCase()) > -1;

			console.log('item: ', item.localized_name.toLowerCase())
			console.log('search: ', searchReqest.toLowerCase())
			console.log('=====================================================')

			const inSearch = item.localized_name.toLowerCase().indexOf(searchReqest.toLowerCase()) === 0;

			if (!inSearch) {
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
		({ shortName }) => players.filter(item => shortName === item.primary_attr)
	)

	const enterSearchRequest = (request) => {
		console.log(request, request.length)
		setSearchReqest(request)
		updateList(heros)
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
			</div>
		</div>
	)
}

export default HomePage