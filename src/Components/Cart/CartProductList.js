import React from 'react'
import {keys} from 'lodash'

import { getProductsMap } from '../../app/Main/Products/productsData'
import CartProductListItem from './CartProductListItem'
import { connect } from 'react-redux'

const CartProductList = ({
    productsInCart,
    fetchedProductsData,
    productsObject = getProductsMap(fetchedProductsData),
    CartItem = CartProductListItem,
    removeProductFromCart,
    removeAllProductsFromCart,
    changeProductQuantity
}) => {
    return (
        <div style={{textAlign: "left"}}>
            {
                keys(productsInCart).map((productId, index) => (
                    <CartItem 
                        productCount = {productsInCart[productId]}
                        product = {productsObject[productId]}
                        key = {productId}
                        index = {index}
                        removeProductFromCart = {removeProductFromCart}
                        removeAllProductsFromCart = {removeAllProductsFromCart}
                        changeProductQuantity = {changeProductQuantity}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetchedProductsData: state.fetchedDataState
})

export default connect(
    mapStateToProps
)(CartProductList)