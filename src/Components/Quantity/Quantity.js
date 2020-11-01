import React from 'react'


const Quantity = ({
    onDecrementClick,
    onIncrementClick,
    productCount,
    quantity,
    productId,
    minCount
}) => {
    return (
        <div className="product-quantity">
            <button
                onClick={() => onDecrementClick(productId)}
                disabled={productCount <= minCount}
            >-</button>
            <input type="text" value={productCount} readOnly/>
            <button
                onClick={() => onIncrementClick(productId)}
                disabled={productCount >= quantity}
            >+</button>
        </div>
    )
}

export default Quantity