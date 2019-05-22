import React from 'react';

const Message = (props) => {
  const { name, title, country, storytext } = props.message;

  return (
    <div className="single-message-page">
        <div className="message-card message-card-fullpage">
            { 
                <div className="message-card-header">
                {name ? <span className="name">{name}</span> : null }
                {title ? <span className="name"> {title}</span> : null }
                {country ? <span className="name"> {country}</span> : null }
              </div>
                
            }

            <div className="message-card-main">
                {storytext ? <span className="name"> {storytext}</span> : null }
            </div>

            {/* <button onClick={props.clicked.bind(this, props.message.id)} className="delete-message-button">
                Delete
            </button> */}
        </div>
    </div>
  );
};

export default Message;