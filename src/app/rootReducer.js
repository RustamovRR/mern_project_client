import { combineReducers } from 'redux'
import { productReducer, saveProductsReducer, deletedProductsReducer } from './reducer'

const rootReducer = combineReducers({
    product: productReducer,
    savedData: saveProductsReducer,
    deletedData: deletedProductsReducer
})

export default rootReducer