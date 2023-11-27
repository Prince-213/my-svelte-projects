import type { LayoutLoad } from './$types';

export const load = (async () => {
    const username = "John Doe";
    
    return {
        username
    };
}) satisfies LayoutLoad;