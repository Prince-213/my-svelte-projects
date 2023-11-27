import type { LayoutLoad } from './$types';



export const load = (async (loadEvent) => {
    const { fetch } = loadEvent
    const mostActiveStockResponse = await fetch('http://localhost:4000/most-active-stock')

    const topGamingStockResponse = await fetch('http://localhost:4000/top-gaming-stock')

    const topLosingStockResponse = await fetch('http://localhost:4000/top-losing-stock')

    //const mostActiveStock = await mostActiveStockResponse.json()

    //const topGamingStock = await topGamingStockResponse.json()

    //const topLosingStock = await topLosingStockResponse.json()

    return {
        mostActiveStock: mostActiveStockResponse.json(),
        topGamingStock: topGamingStockResponse.json(),
        topLosingStock: topLosingStockResponse.json(),
    };
}) satisfies LayoutLoad;