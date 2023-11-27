import type { LayoutLoad } from './$types';

export const load = (async (loadEvent) => {
    
    const { fetch, parent } = loadEvent

    const parentData = await parent()

    const { username } = parentData

    const response = await fetch('http://localhost:4000/featured-products')
    const title = "Featured Products"

    const data = response.json()

    return {
        username,
        title,
        data
    };
}) satisfies LayoutLoad;