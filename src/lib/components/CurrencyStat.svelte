<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency.js'

	export let value: number
</script>

<div>
	{formatCurrency(value)}
</div>
