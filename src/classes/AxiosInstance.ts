import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import defaultAxiosConfig from '../utils/axiosConfigs/defaultAxios.config'
import { authInterceptor } from '../interceptors/auth.interceptor'

export class AxiosInstanceClass {
	public axios: AxiosInstance

	constructor(config: CreateAxiosDefaults) {
		console.log('config', config)
		if (!config) {
			this.axios = axios.create(defaultAxiosConfig)
		}
		this.axios = axios.create(config)
		this.axios.interceptors.request.use(authInterceptor)
	}
}
