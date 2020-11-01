import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { keys } from 'lodash'

import './CartPage.css'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    removeAllProductsFromCart,
    changeProductQuantity
}) => {
    return (
        <div className="cart-page">
            <div className="cart-page-title">Cart page</div>
            <CartProductList 
                productsInCart = {productsInCart}
                CartItem = {CartProductListItemExtended}
                removeProductFromCart = {removeProductFromCart}
                changeProductQuantity = {changeProductQuantity}
            />
            <CartTotal 
                productsInCart = {productsInCart}
            />
            <button className="go-home-button" onClick={() => removeAllProductsFromCart()}>Remove All</button>
            <Link to="/" className="go-home-button">Go Home</Link>
            {
                keys(productsInCart).length ? 
                    <Link to="/checkout" className="go-home-button">Chekout Page</Link>
                : <></>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart
})

const mapDispatchToProps = (dispatch) => ({
    removeAllProductsFromCart: () => dispatch({
        type: "REMOVE_ALL_PRODUCTS_FROM_CART"
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage)