import { page } from '$app/stores';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load = (async (serverLoadEvent) => {

    const { fetch, params } = serverLoadEvent
    const { productSlug } = params

    const notifications = "End of season sale! 50% off"

    const index = ["1", "2", "3"]

    if ( !index.includes(productSlug)) {
        //throw error(404, {message: "Product not found"})
        throw redirect(307, '/products' )
    }

    const response = await fetch(`http://localhost:4000/products/${productSlug}`)
    const productDetail = await response.json()
    

    return {
        productDetail,
        notifications
    };
}) satisfies PageServerLoad;

const prerender = true;