<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<h1>Stocks</h1>

<span>Most active stock - {data.mostActiveStock.symbol}</span>
<br>
<span>Top gaming stock - {data.topGamingStock.symbol}</span>
<br>
<span>Top Losing stock - {data.topLosingStock.symbol}</span>

<slot />