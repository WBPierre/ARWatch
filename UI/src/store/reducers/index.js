
import { combineReducers } from 'redux';
import products from './productsReducer';
import isConnected from './user';

const rootReducer = combineReducers({
  products,
  isConnected
})

export default rootReducer
