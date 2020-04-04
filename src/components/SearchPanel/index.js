import React from 'react'
import './style.scss'

const SearchPanel = ({ enterSearchRequest }) => {

	const onChangeSearch = (e) => {
		enterSearchRequest(e.target.value)
	}

	return (
		<div className="search-panel">
			<input className="search-panel__input"
				   type="text"
				   onChange={onChangeSearch} />
			<button className="search-panel__button"
					type="button">
				Search
			</button>
		</div>
	)
}

export default SearchPanel