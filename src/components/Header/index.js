import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Header = () => {
	return (
		<header className="header">
			<Link to="/" className="header__logo" >
				Drink vodka, Play Dotka
			</Link>
		</header>
	)
}

export default Header