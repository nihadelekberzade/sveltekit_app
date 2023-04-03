import axios from 'axios'
import middleBaseUrl from './utils/constants/middleBaseUrl'
import { authInterceptor } from './interceptors/auth.interceptor'

export const axiosInstance = axios.create({
	baseURL: middleBaseUrl,
	params: {
		consumer: 'website'
	}
})

axiosInstance.interceptors.request.use(authInterceptor)
