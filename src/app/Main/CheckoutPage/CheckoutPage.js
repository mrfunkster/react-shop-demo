import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showErrorMessage, postData } from '../../../store/actions'

import './CheckoutPage.css'
import Loader from '../../../Components/Loader/Loader'
import CheckoutPageCart from './CheckoutPageCart'

class CheckoutPage extends Component {

    state = {
        name: "",
        adress: "",
        agree: false,
        isOrderSave: false
    }

    componentDidMount() {
        this.setState({
            name: "",
            adress: "",
            agree: false,
            isOrderSave: false
        })
    }

    errorMessages = {
        name: "You must to enter your Name in a field below!",
        email: "You must to enter your E-Mail Adress in a field below!",
        privacyAgree: "You must agree to the terms of use to continue!",
        emptyFields: "You must fill all fields bellow to continue!"
    }

    errorChecker = () => {
        if (!this.state.name.length && !this.state.adress.length) {
            this.props.showErrorMessage(this.errorMessages.emptyFields)
        } else if (!this.state.name.length) {
            this.props.showErrorMessage(this.errorMessages.name)
        } else if (!this.state.adress.length) {
            this.props.showErrorMessage(this.errorMessages.email)
        } else if (!this.state.agree){
            this.props.showErrorMessage(this.errorMessages.privacyAgree)
        } else {
            return true
        }
    }

    inputHandler = (e) => {
        e.persist()
        if (e.target.type === "checkbox") {
            this.setState(prevState => ({
                ...prevState,
                ...{
                    [e.target.name]: e.target.checked
                }   
            }))
        } else {
            this.setState(prevState => ({
                ...prevState,
                ...{
                    [e.target.name]: e.target.value
                }   
            }))
        }
    }

    sendForm = (e) => {
        e.preventDefault();
        if (this.errorChecker()) {
            let sData = this.state
            sData.isOrderSave = true
            sData.productsInCart = this.props.productsInCart
            this.props.postData(sData)
            this.setState({
                name: "",
                adress: "",
                agree: false,
                isOrderSave: true
            })
        }
    }


    renderForm = () => {
        return (
            <div className="checkout-page">
                <CheckoutPageCart 
                    productsInCart = {this.props.productsInCart}
                />
                <form onSubmit={this.sendForm}>
                    <div className="row checkout-page">
                        <div className="col-lg-3">
                            <label>Name:</label>
                        </div>
                        <div className="col-lg-3">
                            <input 
                                type="text"
                                placeholder="Enter your name"
                                value={this.state.name}
                                onChange={this.inputHandler}
                                name="name"
                            />
                        </div>
                    </div>
                    <div className="row checkout-page">
                        <div className="col-lg-3">
                            <label>E-Mail:</label>
                        </div>
                        <div className="col-lg-3">
                            <input 
                                type="text"
                                placeholder="Enter your e-mail"
                                value={this.state.adress}
                                onChange={this.inputHandler}
                                name="adress"
                            />
                        </div>
                    </div>
                    <div className="col checkbox-row">
                        <input 
                            type="checkbox"
                            value={this.state.agree}
                            onChange={this.inputHandler}
                            name="agree"
                        />
                        <label>Are you agree with Private Privacy?</label>
                    </div>
                    <button className="go-home-button">{this.state.isOrderSave ? "Proceeded" : "Proceed"}</button>
                </form>
                <Link to="/" className="go-home-button">Go Home</Link>
            </div>
        )
    }

    renderMessageForm = (message) => {
        return (
            <div className="checkout-page">
                <h2 className="page-tittle">{message}</h2>
                <Link to="/" className="go-home-button">Go Home</Link>
            </div>
        )
    }

    render() {
        const {
            loading,
            productsInCart,
            isAddedProduct = Object.keys(productsInCart).length === 0
        } = this.props
        return (
            <div>
                <h1 className="page-tittle">Checkout Page</h1>
                {
                    loading ? <Loader /> 
                    : this.state.isOrderSave ? this.renderMessageForm("THANKS FOR PURCHASING!") 
                    : isAddedProduct ? this.renderMessageForm("YOU DON`T SELECT A PRODUCT FOR PURCHASE YET!")
                    : this.renderForm()
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.app.loading,
    productsInCart: state.productsInCart
})

const mapDispatchToProps = {
    showErrorMessage,
    postData
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutPage)