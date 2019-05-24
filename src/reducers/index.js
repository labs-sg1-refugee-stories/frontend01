import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';


import { reducer as formReducer } from 'redux-form';

import AdminReducer from './AdminReducer';

const rootReducer = combineReducers({
  login : AdminReducer,
  messages: messagesReducer,
  form : formReducer
  
});
  
  export default rootReducer;

