import axios from 'axios'
import { MAIN_API_DOMAIN } from "./constants";

class HerosService {

	getHeros = async () => {
		try {
			const { data } = await axios.get(`${MAIN_API_DOMAIN}/heroStats`)
			return data
		} catch (e) {
			return []
		}
	}
}

export default HerosService