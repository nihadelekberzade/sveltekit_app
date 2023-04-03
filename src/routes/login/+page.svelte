<script>
	import Login from '$lib/modal/Login.svelte'
	import { Modal } from 'flowbite-svelte'
	let open = false
</script>

<div>
	<button
		class="btn-blue"
		on:click={() => {
			open = !open
		}}
	>
		Login
	</button>
	<Modal bind:open>
		<Login />
	</Modal>
</div>
