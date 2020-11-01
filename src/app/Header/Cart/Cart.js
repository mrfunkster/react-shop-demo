import React from 'react'
import { Link } from 'react-router-dom'
import { keys } from 'lodash'
import { connect } from 'react-redux'

import './cart.css'
import cartLogo from './bin_blue.png'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'


const Cart = ({
    productsInCart,
    totalCount = keys(productsInCart).reduce((total, productId) => (
        total + productsInCart[productId]
    ), 0)
}) => {
    return (
        <div className="text-center header-cart">
            <Link to="/cart" className="cart-btn">
                <img src={cartLogo} alt="cart-logo"/>
                <div className="cart-count">{totalCount}</div>
                <div className="header-cart-list">
                <div className="card-arrow"></div>
                <CartProductList 
                    productsInCart = {productsInCart}
                />
                <CartTotal 
                    productsInCart = {productsInCart}
                />
            </div>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart
})

export default connect(
    mapStateToProps
)(Cart)