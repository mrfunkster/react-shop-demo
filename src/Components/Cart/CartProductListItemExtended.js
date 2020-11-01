import React from 'react'
import { connect } from 'react-redux'

import Quantity from '../Quantity/Quantity'
import './CartProductListItemExtended.css'


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked,
    addLike,
    removeLike
}) => (       
    <div className="cart-product-list-item-description">
        <div className="remove-btn"
            onClick={() => removeProductFromCart(product.id)}
        ></div>
        <div className="row">
            <div className="col-lg-3" style={{position: 'relative'}}>
                <img src={product.image} alt={product.name}/>
                <div className={isLiked ? "wish-button pressed" : "wish-button"}
                    style={{right: 'unset', left: '0', top: 0}}
                    onClick={()=> isLiked ? removeLike(product.id) : addLike(product.id)}
                ></div>
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {product.name} </span> 
                </p>
                <p className="cart-extended-price">
                        Price for one item: <span className="bold">$ {product.price} </span> 
                </p>
                <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {productCount} </span> 
                        
                </p>
                <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                </p>
                <Quantity 
                    productCount = {productCount}
                    onIncrementClick = {() => changeProductQuantity(product.id, productCount + 1)}
                    onDecrementClick = {() => (productCount === 1 ? 
                        removeProductFromCart(product.id)
                        : changeProductQuantity(product.id, productCount -  1))}
                    minCount = {0}
                    quantity = {product.quantity}
                    productId = {product.id}
                />
            </div>
        </div>
    </div>
)

const mapStateToProps = (state, props) => ({
    isLiked: state.productLikeState[props.product.id]
})

const mapDispatchToProps = (dispatch) => ({
    removeProductFromCart: (id) => dispatch({
        type: "REMOVE_PRODUCT_FROM_CART",
        id
    }),
    changeProductQuantity: (id, quantity) => dispatch({
        type: "CHANGE_PRODUCT_QUANTITY",
        id, quantity
    }),
    addLike: (productId) => dispatch({
        type: "LIKE",
        id: productId
    }),
    removeLike: (productId) => dispatch({
        type: "DISLIKE",
        id: productId
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CartProductListItemExtended)

