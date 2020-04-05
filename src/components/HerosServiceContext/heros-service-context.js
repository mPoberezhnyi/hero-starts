import React from 'react'

const HerosContext = React.createContext()

const {
	Provider: HerosServiceProvider,
	Consumer: HerosServiceConsumer
} = HerosContext

export {
	HerosServiceProvider,
	HerosServiceConsumer
}

export default HerosContext