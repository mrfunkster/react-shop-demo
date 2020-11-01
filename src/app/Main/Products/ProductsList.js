import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../../Components/Loader/Loader'

import { fetchData } from '../../../store/actions'

import ProductsListItem from './ProductListItem'

class ProductsList extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const {
            fetchedProductsData,
            loading
        } = this.props

        return (
            <div>
                <h1 className="page-tittle">Products List</h1>
                <div className="row">
                    {
                        (fetchedProductsData.length && !loading) ? 
                            (
                                fetchedProductsData.map(({
                                    name,
                                    description,
                                    type,
                                    capacity,
                                    price,
                                    id,
                                    image,
                                    quantity
                                })=>(
                                    <div className="col-lg-6" key={id}>
                                        <ProductsListItem
                                            name = {name}
                                            description = {description}
                                            type = {type}
                                            capacity = {capacity}
                                            price = {price}
                                            image = {image}
                                            quantity = {quantity}
                                            productId = {id}
                                        />
                                    </div>
                                ))
                            )
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchedProductsData: state.fetchedDataState,
    loading: state.app.loading
})

const mapDispatchToProps = {
    fetchData
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList)