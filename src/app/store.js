import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';

const getMiddleware = () => applyMiddleware(thunk)

export const store = createStore(rootReducer, composeWithDevTools(getMiddleware()));