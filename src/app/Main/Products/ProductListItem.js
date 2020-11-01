import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './ProductListItem.css'
import Quantity from '../../../Components/Quantity/Quantity'
import Loader from '../../../Components/Loader/Loader'

class ProductListItem extends Component {

    state = {
        productCount: 1,
        pText: "Green",
        addedProduct: false,
        pStyle: {
            backgroundColor: 'green',
            padding: '15px',
            textAlign: 'center',
            cursor: 'pointer',
            transitionDuration: '.3s',
            userSelect: 'none',
            marginBottom: '15px'
        }
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1
        }))
    }
    
    cartPrice = () => {
        let totalCartPrice = this.state.productCount * this.props.price;
        console.log(totalCartPrice)
    }

    changeColor = () => {
        let color1 = 'Green';
        let color2 = 'Orange';        
        if (this.state.pText === color1) {
            this.setState((prevState) => ({
                pStyle: {
                    ...prevState.pStyle,
                    backgroundColor: color2
                },
                pText: color2,
            }))
        } else {
            this.setState((prevState) => ({
                pText: color1,
                pStyle: {
                    ...prevState.pStyle,
                    backgroundColor: color1
                },
            }))
        }
    }

    changeButtonInfo = () => {
        this.setState(prevState => ({
            ...prevState,
            addedProduct: true
        }))
        setTimeout(()=>{
            this.setState(prevState => ({
                ...prevState,
                addedProduct: false
            }))
        }, 500)
    }

    render() {
        const {
            name,
            description,
            type,
            capacity,
            price,
            image,
            quantity,
            productId,
            addProductToCart,
            isLiked = false,
            addLike,
            removeLike
        } = this.props
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt={name + " image"}/>
                    <div className={isLiked ? "wish-button pressed" : "wish-button"}
                        onClick={()=> isLiked ? removeLike(productId) : addLike(productId)}
                    ></div>
                </div>

                <h2 className="product-title">{name}</h2>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} GB</div>
                <div className="product-price">$ {price}</div>
                <p style={this.state.pStyle}
                    onClick={this.changeColor}
                >Color: {this.state.pText}</p>
                <Quantity 
                    productCount={this.state.productCount}
                    quantity={quantity}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minCount = {1}
                />
                <button 
                    className="btn-add-to-cart"
                    onClick={() => {
                        addProductToCart(productId, this.state.productCount)
                        this.changeButtonInfo()
                    }}
                    disabled={this.state.addedProduct}
                >{this.state.addedProduct ? (<Loader />) : "Add to cart"}</button>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    name:        PropTypes.string.isRequired,
    description: PropTypes.string,
    type:        PropTypes.string.isRequired,
    capacity:    PropTypes.number.isRequired,
    price:       PropTypes.number.isRequired,
    image:       PropTypes.string,
    quantity:    PropTypes.number.isRequired
}
ProductListItem.defaultProps = {
    description: "No Description...",
    image: "/images/products/no-image.png"
}

const mapStateToProps = (state, props) => ({
    isLiked: state.productLikeState[props.productId]
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (productId) => dispatch({
        type: "LIKE",
        id: productId
    }),
    removeLike: (productId) => dispatch({
        type: "DISLIKE",
        id: productId
    }),
    addProductToCart: (productId, productCount) => dispatch({
        type: "ADD_PRODUCT_TO_CART",
        id: productId,
        count: productCount
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProductListItem)