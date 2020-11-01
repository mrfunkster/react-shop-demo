import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProductsList from './Products/ProductsList'
import CartPage from './CartPage/CartPage'
import ShippingPage from './ShippingPage/ShippingPage'
import PaymentPage from './PaymentPage/PaymentPage'
import CheckoutPage from './CheckoutPage/CheckoutPage'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import Filter from './Filter/Filter'

const Main = ({
    errorMessageStatus
}) => {
    return (
        <main className="main">
            <ErrorMessage />
            <div className={!errorMessageStatus ? "container show-message" : "container show-message active"}>
                <div className="row equal-height">
                    <div className="col-lg-3">
                        <Filter />
                    </div>
                    <div className="col-lg-9">
                        <Route path="/" exact render={()=>(
                            <ProductsList />
                        )}/>
                        <Route path="/cart" render={()=>(
                            <CartPage />
                        )}/>
                        <Route path="/shipping" component={ShippingPage}/>
                        <Route path="/payment" component={PaymentPage}/>
                        <Route path="/checkout" component={CheckoutPage} />
                    </div>
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => ({
    errorMessageStatus: state.app.showError
})

export default connect(
    mapStateToProps,
    null
)(Main)