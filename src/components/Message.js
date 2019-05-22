import React from 'react';

const Message = (props) => {
  const { sender, recipient, content } = props.message;

  return (
    <div className="single-message-page">
        <div className="message-card message-card-fullpage">
            { (sender || recipient) ?
                <div className="message-card-header">
                {sender ? <span className="sender">From: {sender.name}</span> : null }

                {recipient ? <span className="recipient">To: {recipient.name}</span> : null }
                </div>
                : null
            }

            <div className="message-card-main">
                {content}
            </div>

            <button onClick={props.clicked.bind(this, props.message.id)} className="delete-message-button">
                Delete
            </button>
        </div>
    </div>
  );
};

export default Message;