import React from 'react'
import {keys} from 'lodash'
import { getProductsMap } from '../../app/Main/Products/productsData'
import { connect } from 'react-redux'

const CartTotal = ({
    productsInCart,
    fetchedProductsData,
    productsObject = getProductsMap(fetchedProductsData),
    totalSum = keys(productsInCart).reduce((total, productId) => (
        total + (productsObject[productId].price * productsInCart[productId])
    ), 0)
}) => {
    return (
        <div className="cart-total">
            {
                (totalSum > 0) ? (`Total: ${totalSum}$`) : (`Empty!`)
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    fetchedProductsData: state.fetchedDataState
})

export default connect(
    mapStateToProps
)(CartTotal)