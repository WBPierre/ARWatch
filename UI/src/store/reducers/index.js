
import { combineReducers } from 'redux';
import products from './productsReducer';
import user from './user';

const rootReducer = combineReducers({
  products,
  user
})

export default rootReducer
