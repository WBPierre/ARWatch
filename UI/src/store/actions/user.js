import { CONNECTION_SUCCESS } from '../constants';

const  connectionSuccess = (token) => {
  return {
    type: CONNECTION_SUCCESS,
    token,
  }
}

export const isConnected = (token) => {
  return(dispatch) => {
    dispatch(connectionSuccess(token));
  }
}
