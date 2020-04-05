import React from 'react'

const CharacteristicsHero = ({hero}) => {

	const characteristicsHero = Object.keys(hero).map(item => {
		return (
			<tr key={hero.id}>
				<td>{item}</td>
				<td>{hero[item]}</td>
			</tr>
		)
	})

	return (
		<table>
			<thead>
			<tr>
				<td>key</td>
				<td>value</td>
			</tr>
			</thead>
			<tbody>{characteristicsHero}</tbody>
		</table>
	)
}

export default CharacteristicsHero