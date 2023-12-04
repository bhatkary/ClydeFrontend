// MessageList.jsx
import React from "react";
import Message from "./Message";

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages && messages.length > 0 ? (
        messages.map((message, index) => (
          <Message key={index} message={message} loading={message.loading} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default MessageList;
