import thunk from 'redux-thunk'
import { applyMiddleware ,createStore,combineReducers } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import CartReducers from './Redux/CartReducer'
import ProductReducer from './Redux/ProductReducers'
const root= combineReducers({
 CartReducers,
ProductReducer
})

const middleware = [thunk];

const store = createStore(root,composeWithDevTools(applyMiddleware(...middleware)))

export default store