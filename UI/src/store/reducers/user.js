import { CONNECTION_SUCCESS } from '../constants';

const initialState = {
  user: '',
}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case CONNECTION_SUCCESS:
      return {
        ...state,
        user: action.token
      }
    default:
      return state
  }
}
