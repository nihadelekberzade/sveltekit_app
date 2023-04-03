<script lang="ts">
	import PocketBase from 'pocketbase'

	const submit = async (event: Event) => {
		const formEl = event.target as HTMLFormElement
		const data = new FormData(formEl)
		const username = data.get('username')
		const email = data.get('email')
		const password = data.get('password')
		const passwordConfirm = data.get('passwordConfirm')
		const userData = {
			username,
			email,
			password,
			passwordConfirm
		}
		const pb = new PocketBase('http://127.0.0.1:8090')
		console.log('userdata', userData)
		const record = await pb.collection('users').create(userData)
		console.log('record', record)
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div>
	<h1>Register page</h1>
	<form
		on:submit|preventDefault={submit}
		method="POST"
	>
		<label>
			Username
			<input
				name="username"
				type="text"
			/>
		</label>
		<label>
			Email
			<input
				name="email"
				type="email"
			/>
		</label>
		<label>
			Password
			<input
				name="password"
				type="password"
			/>
		</label>
		<label>
			Confirm Password
			<input
				name="passwordConfirm"
				type="password"
			/>
		</label>
		<button>Register</button>
	</form>
</div>
