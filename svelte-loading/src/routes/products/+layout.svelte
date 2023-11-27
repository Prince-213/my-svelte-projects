<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const { username } = data
</script>

<div>
	<h1>Feautured Products for {username}</h1>
	<div class=" flex items-center space-x-5">
		{#each data.data as product}
			
				<div class=" w-fit h-fit bg-yellow-400 rounded-lg p-5 mb-5">
					<h1>{product.title}</h1>
					<h2>${product.price}</h2>
					<h2>{product.description}</h2>
				</div>
			
		{/each}
	</div>
	<br />
	<slot />
</div>
