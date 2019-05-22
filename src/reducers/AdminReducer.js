import {
    LOGIN_SUCCESS,
    // LOGIN_ABSOLUTE_FAILURE,
    LOGIN_START,
    FETCH_POSTMESSAGE_START,
    FETCH_POSTMESSAGE_SUCCESS,
    // FETCH_POSTMESSAGE_FAILURE
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingData: false,
    postMessage: [],
    isLoggingIn: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          isLoggingIn: true,
          error: ''
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false
        };
      case FETCH_POSTMESSAGE_START:
        return {
          ...state,
          fetchingData: true,
          error: false
        };
      case FETCH_POSTMESSAGE_SUCCESS:
        return {
          ...state,
          fetchingData: false,
          error: '',
          messagePost: action.payload
    
        };
      default:
        return state;
    }
  };

  export default reducer;