
import axios from "axios";



export function fetchMessages() {
  return dispatch => {
    dispatch({ type: "LOADING_MESSAGES" });
    axios
      .get("https://refugee-stories-api.herokuapp.com/stories")
      .then(responseJSON => {
        console.log("Fetched messages: ", responseJSON.data);
        dispatch({ type: "FETCH_MESSAGES", payload: responseJSON.data });
      });
  };
}

export function fetchMessagesPending() {
  return dispatch => {
    dispatch({ type: "LOADING_MESSAGES_PENDING" });
    axios
      .get("https://refugee-stories-api.herokuapp.com/admin/stories")
      .then(responseJSON => {
        console.log("Fetched messages: ", responseJSON.data);
        dispatch({ type: "FETCH_MESSAGES_PENDING", payload: responseJSON.data });
      });
  };
}

export function addMessage(message) {
  console.log("Message to be added: ", message);
  const newMessage = {
    content: message.content,
    sender_attributes: {
      name: message.sender_name
    },
    recipient_attributes: {
      name: message.recipient_name
    }
  };
  console.log("Formatted message: ", newMessage);

  return dispatch => {
    const token = localStorage.getItem('token');

    dispatch({ type: "ADDING_MESSAGE" });
    axios
      .post("https://refugee-stories-api.herokuapp.com/admin/stories", message ,{headers: { authorization : token}  })
      .then(response => {
        dispatch({ type: "ADD_MESSAGE_SUCCESS", payload: message });
      });
  };
}

export function approvalPending(messageId) {

  return dispatch => {
    dispatch({ type: "APROVE_MESSAGE" });
    axios
      .post(`https://refugee-stories-api.herokuapp.com/admin/stories/approve/${messageId}`)
      .then(response => {
        dispatch({ type: "APROVE_MESSAGE_SUCCESS", payload: messageId });
      });
  };
}

export function deleteMessage(messageId) {
  return dispatch => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch({ type: "DELETING_MESSAGE" });
      axios
        .delete(
          `https://refugee-stories-api.herokuapp.com/admin/stories/reject/${messageId}`
        )
        .then(response => {
            dispatch({
              type: "DELETE_MESSAGE_SUCCES",
              deletedMessageId: messageId
            });
          
        });
    }
  };
}

export function deleteMessagePending(messageId) {
  return dispatch => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch({ type: "DELETING_MESSAGE" });
      axios
        .delete(
          `https://refugee-stories-api.herokuapp.com/admin/stories/reject/${messageId}`
        )
        .then(response => {
            dispatch({
              type: "DELETE_MESSAGE_SUCCES_PENDING",
              deletedMessageId: messageId
            });
          
        });
    }
  };
}
