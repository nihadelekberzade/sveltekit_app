import { writable } from 'svelte/store'

export const userStore = writable({
	id: '0',
	authToken: 'jwt'
} as IUserStore)

export interface IUserStore {
	id: string
	authToken: string
}

export const setAuthToken = (token: string) => {
	console.log('token', token)
	userStore.update((value) => {
		return {
			...value,
			authToken: token
		}
	})
}
