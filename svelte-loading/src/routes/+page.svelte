<script>

	import { goto, preloadData } from "$app/navigation";

</script>

<a href="/products" data-sveltekit-preload-data="hover">Products</a>

<button 
on:focus={async () => {
    await preloadData('/products')
}}
on:mouseover={async () => {
    await preloadData('/products')
}} on:click={() => {
    goto('/products')
}}>
    Go to products
</button>