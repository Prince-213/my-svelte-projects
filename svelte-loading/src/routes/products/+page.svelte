<script>
	import Product from './Product.svelte';

	export let data;

	const { title } = data;
</script>

<div class=" p-10 w-full h-screen">
	<h1 class=" text-4xl font-medium">{title}</h1>
    <br />
	{#each data.products as product}
		<a data-sveltekit-preload-code="hover" href={`/products/${product.id}`}>
			<Product product={product} />
		</a>
		
	{/each}
</div>
