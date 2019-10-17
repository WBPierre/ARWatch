import { CONNECTION_SUCCESS } from '../constants';

const initialState = {
  isConnected: '',
}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case CONNECTION_SUCCESS:
      console.log(action);
      return {
        ...state,
        isConnected: action.token
      }
    default:
      return state
  }
}
