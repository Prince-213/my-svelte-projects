<script lang="ts">
	import Product from './../Product.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    
</script>



<div class=" w-fit h-fit bg-yellow-400 rounded-lg p-5 mb-5">
    <h1>{data.productDetail.title}</h1>
    <h2>${data.productDetail.price}</h2>
    <h2>{data.productDetail.description}</h2>
</div>



