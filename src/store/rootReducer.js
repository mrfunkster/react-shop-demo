import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productLikeReducer from './productLikeReducer'
import fetchedDataReducer from './fetchedDataReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
    productLikeState: productLikeReducer,
    productsInCart: cartReducer,
    fetchedDataState: fetchedDataReducer,
    app: appReducer
})

export default rootReducer