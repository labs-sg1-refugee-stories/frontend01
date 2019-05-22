export default (state = {
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    messages: []
  }, action) => {
      switch (action.type) {
  
        case 'LOADING_MESSAGES':
          return {
            ...state,
            isFetching: true
          }
          
        case 'FETCH_MESSAGES':
          return {
            messages: action.payload,
            isFetching: false
          }
  
        case 'ADDING_MESSAGE':
          return {
            ...state,
            isPosting: true
          }  
  
        case 'ADD_MESSAGE_SUCCESS':
          return {
            messages: state.messages.concat(action.payload), 
            isPosting: false
          }
  
        case 'DELETING_MESSAGE':
          return {
            ...state,
            isDeleting: true
          } 
        
        case 'DELETE_MESSAGE_SUCCES':
          const messages = state.messages.filter(message => message.id !== parseInt(action.deletedMessageId, 10));
          return { 
            messages, 
            isDeleting: false
          };
  
        default:
          return state;
      }
    };
    