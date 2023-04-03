import type { InternalAxiosRequestConfig } from 'axios'
import { get } from 'svelte/store'
import { userStore } from '../store/user'

export const authInterceptor = (requestConfig: InternalAxiosRequestConfig) => {
	const authToken = get(userStore).authToken
	requestConfig.headers.Authorization = `Bearer ${authToken}`
	return requestConfig
}
