import React from 'react';

const MessageCard = ({ message }) => {
    const { name, country, storytext, title } = message;
  
    const longMessage =  storytext.length > 140;
  
    return (
        <div className="message-card">
            { (name || country) ?
                <div className="message-card-header">
                  {name ? <span className="name">{name}</span> : null }
                  <div>
                  {country ? <span className="name"> {country}</span> : null }
                  </div>
                </div>
                : null
            }
    
            <div className="message-card-main">
                  {title ? <span className="name"> {title}</span> : null }
            </div>
            <div>
                  {storytext ? <div className="name"> {storytext}</div> : null }
                </div>
              {longMessage ? `${ storytext.slice(0, 140)}...` :  storytext}
            </div>
        
      );
    };
        


export default MessageCard;