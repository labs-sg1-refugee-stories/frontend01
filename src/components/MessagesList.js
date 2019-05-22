import React from 'react';
import MessageCard from './MessageCard';
import { Link } from 'react-router-dom';

const MessagesList = ({ messages }) => {
  const renderMessages = messages.map(message => 
    <Link to={`/messages/${message.id}`} key={message.id}>
      <MessageCard message={message} />
    </Link>
  );
  
  return (
    <div className="message-list">
      {renderMessages}
    </div>
  );
};

export default MessagesList;