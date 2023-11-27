import { json } from '@sveltejs/kit';


export const GET = async () => {
    console.log('current time invoked');
    return json(new Date().toLocaleTimeString());
};

export const prerender = true;