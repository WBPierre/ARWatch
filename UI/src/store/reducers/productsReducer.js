import { INSERT_PRODUCT_SUCCESS, INSERT_PRODUCT_FAILURE, REMOVE_PRODUCT_SUCCESS } from '../constants'

const initialState = {
  products: [],
}

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case INSERT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.item]
      }
    case INSERT_PRODUCT_FAILURE:
      return {
        ...state,
      }
    case REMOVE_PRODUCT_SUCCESS:

    default:
      return state
  }
}
