import { combineReducers } from 'redux'
import { productReducer, saveProducts } from './reducer'

const rootReducer = combineReducers({
    product: productReducer,
    savedData: saveProducts
})

export default rootReducer