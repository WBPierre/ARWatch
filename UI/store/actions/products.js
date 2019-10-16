import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';
import axios from 'axios';
import config from '../../src/config';

export function getProducts() {
  return {
    type: FETCHING_DATA
  }
}

export function getProductsSuccess(products) {
  return {
    type: FETCHING_DATA_SUCCESS,
    products,
  }
}

export function getProductsFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchProducts() {
  return(dispatch) => {
    dispatch(getProducts())
    axios({
      method: 'get',
      url: config.api + '/products',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
    }).then(data => {
      console.log(data);
      dispatch(getProductsSuccess(data));
    }).catch((err) => console.log('err', err));
  }
}
