<script>
	export let user = {
		loggedIn: false
	}

	let show = false

	const toggle = () => {
		console.log('toggle')
		show = !show
	}
</script>

<div>
	{#if show}
		<button on:click={toggle}> Shown</button>
	{:else}
		<button on:click={toggle}> Not Shown</button>
	{/if}
</div>
