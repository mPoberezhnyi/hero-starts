import React from 'react'
import './style.scss'

const SearchPanel = ({ enterSearchRequest, onClickSearch }) => {

	const onChangeSearch = (e) => {
		enterSearchRequest(e.target.value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		onClickSearch()
	}

	return (
		<form className="search-panel"
			  onSubmit={onSubmitHandler}>
			<input className="search-panel__input"
				   type="text"
				   onChange={onChangeSearch} />
			<button className="search-panel__button"
					type="submit" >
				Search
			</button>
		</form>
	)
}

export default SearchPanel