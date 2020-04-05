import React from 'react'

const CharacteristicsHero = ({hero}) => {

	const characteristicsHero = hero && Object.keys(hero).map((item, index) => {
		return (
			<tr key={index}>
				<td>{item}</td>
				<td>{hero[item]}</td>
			</tr>
		)
	})

	return (
		<table>
			<thead>
			<tr>
				<td><h3>key</h3>key</td>
				<td><h3>value</h3></td>
			</tr>
			</thead>
			<tbody>{characteristicsHero}</tbody>
		</table>
	)
}

export default CharacteristicsHero