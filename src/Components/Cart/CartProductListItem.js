import React from 'react'

const CartProductListItem = ({
    product,
    productCount,
    index
}) => {
    return (
        <div style={{paddingBottom: "5px"}}>
            {index + 1}. {product.name} : {productCount}
        </div>
    )
}

export default CartProductListItem