import React from 'react'
import './style.scss'

const CharacteristicsHero = ({hero}) => {

	const characteristicsHero = hero && Object.keys(hero).map((item, index) => {
		return (
			<div className="characteristics-hero__row"
				 key={index}>
				<div className="characteristics-hero__cell">{item}</div>
				<div className="characteristics-hero__cell">{hero[item]}</div>
			</div>
		)
	})

	return (
		<div className="characteristics-hero">
			<div className="characteristics-hero__row">
				<div className="characteristics-hero__cell">
					<h3>key</h3>
				</div>
				<div className="characteristics-hero__cell">
					<h3>value</h3>
				</div>
			</div>
			<div>
				{characteristicsHero}
			</div>
		</div>
	)
}

export default CharacteristicsHero