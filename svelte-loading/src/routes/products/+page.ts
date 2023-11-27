import type { PageLoad } from './$types';

export const load = (async (LoadEvent) => {
    console.log("Loaded server data")
    const { fetch, parent } = LoadEvent
    const parentData = await parent()

    const notifications = "End of Season sale!"

    const { username } = parentData    
    const title = `List of available products for ${username} `;
    const response = await fetch('http://localhost:4000/products')
    const products = response.json()

    return {
        title,
        products,
        notifications
    };
}) satisfies PageLoad ;

export const ssr = true;
export const csr = true;
const prerender = true;