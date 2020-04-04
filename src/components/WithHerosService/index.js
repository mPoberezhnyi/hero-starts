import React from 'react'
import { HerosServiceConsumer } from '../StoreServiceContext'

const WithHerosService = () => (Wrapped) => {
	return (props) => {
		return (
			<HerosServiceConsumer>
			{
				(herosService) => {
					return (
						<Wrapped {...props}
								 herosService={herosService} />
					)
				}
			}
			</HerosServiceConsumer>
		)
	}
}

export default WithHerosService