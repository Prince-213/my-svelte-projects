import type { PageLoad } from './$types';

export const load = (async () => {
    const response = await fetch('http://localhost:5173/api/postcodes') 
    const postCodes = await response.json();
    const addressList = postCodes.map((address: any) => {
        return `${address.city}, ${address.country} `
    })

    return {
        addressList
    };
}) satisfies PageLoad;