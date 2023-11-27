import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const response = await fetch('http://localhost:4000/postcodes')
    const postcodes = await response.json()
    const appPostCodes = postcodes.map(
        (postcode: any) => {
            return {
                code: postcode.code,
                city: postcode.city,
                state: postcode.state,
                country: postcode.country
            }
        }
    )    
    return json(appPostCodes);
};