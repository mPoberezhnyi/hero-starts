import React from 'react'
import Player from '../Player'
import './style.scss'

const TeamList = ({teamName, herosList}) => {

	return (
		<div className="teams-item">
			<h2>{teamName}</h2>
			<div className="heros-list">
				{
					herosList.map(
						item => <Player key={item.id}
										hero={item}/>
					)
				}
			</div>

		</div>
	)
}

export default TeamList