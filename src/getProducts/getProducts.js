export const getProducts = async (url) =>{
    const productFetch = await fetch(url)
    const productJson = await productFetch.json()
    return productJson
} 