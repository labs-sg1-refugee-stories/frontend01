export default (state = {
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    messages: [],
    messagesPending: []

  }, action) => {
      switch (action.type) {
  
        case 'LOADING_MESSAGES':
          return {
            ...state,
            isFetching: true
          }

          case 'LOADING_MESSAGES_PENDING':
          return {
            ...state,
            isFetching: true
          }
          
        case 'FETCH_MESSAGES':
          return {
            ...state,
            messages: action.payload,
            isFetching: false
          }

          case 'FETCH_MESSAGES_PENDING':
          return {
            ...state,
            messagesPending: action.payload,
            isFetching: false
          }
  
        case 'ADDING_MESSAGE':
          return {
            ...state,
            isPosting: true
          }  

          case 'APROVE_MESSAGE':
          return {
            ...state,
            isPosting: true
          }  

          case 'APROVE_MESSAGE_SUCCESS':
          return {
            ...state,
            messagesPending : state.messagesPending.filter( (message) => {
                return message.id !== action.payload
            }),
            isPosting: true
          }

  
        case 'ADD_MESSAGE_SUCCESS':
          return {
            ...state,
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
            ...state,
            messages, 
            isDeleting: false
          };

          case 'DELETE_MESSAGE_SUCCES_PENDING':
          const messagesPending = state.messagesPending.filter(message => message.id !== parseInt(action.deletedMessageId, 10));
          return { 
            ...state,
            messagesPending, 
            isDeleting: false
          };
  
        default:
          return state;
      }
    };
    