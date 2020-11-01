import React from 'react'

import CartProductList from '../../../Components/Cart/CartProductList'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CheckoutPageCart = ({
    productsInCart
}) => {
    return (
        <div className="checkout-page-cart">
            <p>Order list:</p>
            <CartProductList 
                productsInCart = {productsInCart}
                CartItem = {CartProductListItemExtended}
            />
            <CartTotal 
                productsInCart = {productsInCart}
            />
        </div>
    )
}

export default CheckoutPageCart