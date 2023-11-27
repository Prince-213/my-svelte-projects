<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
    import type { PageData } from './$types';

    
    export let data: PageData;

    const { stocks } = data

    function refresh () {
        invalidate('http://localhost:4000/stocks');
        invalidateAll()
    }
</script>

<div class=" pt-10">
    <br>
    <h1 class=" font-semibold text-xl">Actively Trading Stocks</h1>

    {#each stocks as stock }
        <h2>{stock.symbol} - ${stock.price}</h2>
    {/each}
    
    <button class=" p-4 bg-emerald-600 rounded-lg"  on:click={refresh}>
        <p>Refresh</p>
    </button>
</div>

