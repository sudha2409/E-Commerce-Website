import { createStore } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
import { RootReducer } from './Redux/reducer/RootReducer';

const store =  createStore(RootReducer)

export default store;