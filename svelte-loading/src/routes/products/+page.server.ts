

export const load = (async (serverLoadEvent) => {
    console.log("Loaded server data")
    const { fetch, parent } = serverLoadEvent
    const parentData = await parent()
    const notifications = "End of Season sale!"
    
    const title = "List of available products";
    const response = await fetch('http://localhost:4000/products')
    const products = response.json()

    return {
        title,
        products,
        notifications
    };
}) ;