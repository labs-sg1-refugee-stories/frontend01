import React from 'react';

const MessageCard = ({ message }) => {
    const { name, country, storytext, title } = message;
  
    const longMessage =  storytext.length > 140;
  
    return (
        <div className="message-card">
            { (name || country) ?
                <div className="message-card-header">
                  {name ? <span className="name">{name}</span> : null }
                  {title ? <span className="name"> {title}</span> : null }
                  {country ? <span className="name"> {country}</span> : null }
                  {storytext ? <span className="name"> {storytext}</span> : null }
                </div>
                : null
            }
    
            <div className="message-card-main">
              {longMessage ? `${ storytext.slice(0, 140)}...` :  storytext}
            </div>
        </div>
      );
    };
        


export default MessageCard;