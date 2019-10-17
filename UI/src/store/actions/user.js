import { CONNECTION_SUCCESS } from '../constants';

const  connectionSuccess = (token) => {
  console.log(token);
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
