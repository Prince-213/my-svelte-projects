import type { PageLoad } from './$types';

export const load = (async (loadEvent) => {
    const { fetch, depends } = loadEvent
    
    depends("stocks:actively-trading")

    const response = await fetch('http://localhost:4000/stocks')

    const stocks = response.json()

    return {
        stocks
    };
}) satisfies PageLoad;