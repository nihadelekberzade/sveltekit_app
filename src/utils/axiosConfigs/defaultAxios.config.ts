import middleBaseUrl from '../constants/middleBaseUrl'
import { get } from 'svelte/store'
import { userStore } from '../../store/user'

export default {
	baseURL: middleBaseUrl,
	headers: {
		Authorization: 'Bearer ' + get(userStore).authToken
	},
	params: {
		consumer: 'website'
	}
}
