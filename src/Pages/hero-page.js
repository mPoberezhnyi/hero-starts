import React, {useContext} from 'react'
import CharacteristicsHero from '../components/CharacteristicsHero'
import { HerosContext } from '../components/HerosServiceContext'
import { MAIN_DOMAIN } from "../constants";

const HeroPage = ({match}) => {

	const heros = useContext(HerosContext)

	console.log(heros)

	const { herosName } = match.params;

	const currentHero = heros.find(({ name }) => name === herosName)

	return (
		<div>
			<h2 className="hero-page__title">
				{ currentHero.localized_name }
			</h2>
			<div className="hero-page">
				<div className="hero-page__img-wrap">
					<img className="hero-page__img"
						 src={`${MAIN_DOMAIN}${currentHero.img}`}
						 alt={currentHero.name}
						 title={currentHero.localized_name}/>
				</div>
				<div className="hero-page__characteristics">
					<CharacteristicsHero hero={currentHero} />
				</div>
			</div>

		</div>
	)
}

export default HeroPage