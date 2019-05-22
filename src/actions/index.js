import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ABSOLUTE_FAILURE = 'LOGIN_ABSOLUTE_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  console.log(creds);
  return axios
    .post('https://refugee-stories-api.herokuapp.com/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};

export const FETCH_POSTMESSAGE_START= 'FETCH_POSTMESSAGE_START';
export const FETCH_POSTMESSAGE_SUCCESS= 'FETCH_POSTMESSAGE_SUCCESS';
export const FETCH_POSTMESSAGE_FAILURE = 'FETCH_POSTMESSAGE_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_POSTMESSAGE_START });
  axiosWithAuth()
    .get('/api/data')
    .then(res => {
      dispatch({ type: FETCH_POSTMESSAGE_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_POSTMESSAGE_FAILURE });
    });
};
