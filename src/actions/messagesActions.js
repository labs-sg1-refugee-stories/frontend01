import fetch from "isomorphic-fetch";
import axios from "axios";

export function fetchMessages() {
  return dispatch => {
    dispatch({ type: "LOADING_MESSAGES" });
    return;
    axios
      .get("https://refugee-stories-api.herokuapp.com/stories")
      .then(responseJSON => {
        console.log("Fetched messages: ", responseJSON);
        dispatch({ type: "FETCH_MESSAGES", payload: responseJSON });
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
    dispatch({ type: "ADDING_MESSAGE" });
    axios
      .post("https://refugee-stories-api.herokuapp.com/stories", message)
      .then(response => {
        dispatch({ type: "ADD_MESSAGE_SUCCESS", payload: message });
      });
  };
}

export function deleteMessage(messageId) {
  return dispatch => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch({ type: "DELETING_MESSAGE" });
      axios
        .delete(
          `https://refugee-stories-api.herokuapp.com/stories/${messageId}`
        )
        .then(response => {
          if (response.ok) {
            dispatch({
              type: "DELETE_MESSAGE_SUCCES",
              deletedMessageId: messageId
            });
          }
        });
    }
  };
}
