import React from 'react'

const {
	Provider: HerosServiceProvider,
	Consumer: HerosServiceConsumer
} = React.createContext()

export {
	HerosServiceProvider,
	HerosServiceConsumer
}