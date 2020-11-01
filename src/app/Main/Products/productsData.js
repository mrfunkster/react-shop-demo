export const getProductsMap = (array) => {
    return array.reduce((accObj, product)=>({
        ...accObj,
        [product.id]: product
    }), {})
}