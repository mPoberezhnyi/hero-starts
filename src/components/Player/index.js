import React from 'react'
import { MAIN_DOMAIN } from "../../constants";
import { Link } from 'react-router-dom'
import './style.scss'

const Player = ({hero: {icon, name, localized_name, inSearch}}) => {

	const classList = inSearch ? 'heros-item in-search' : 'heros-item'

	return (
		<Link to={`/${localized_name.toLowerCase()}`}
			  className={classList}>
			<img className="heros-item__img" src={`${MAIN_DOMAIN}${icon}`}
				 alt={name}
				 title={localized_name} />
		</Link>
	)
}

export default Player