// Chat.jsx
import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";
import MessageList from "./MessageList";
import BannerText from "./BannerText";
import SuggestionCards from "./SuggestionCards";
import messageHandler from "../handlers/messageHandler";

const Chat = ({ currentProject }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (newMessage) => {
    // Pass the current project to the message handler
    messageHandler.handleSendMessage(
      newMessage,
      setMessages,
      messages,
      currentProject
    );
  };

  useEffect(() => {
    // Add any logic here that needs to run when messages change
    console.log("Messages updated:", messages);
  }, [messages, currentProject]);

  console.log("Current Project in Chat:", currentProject);

  return (
    <div className="flex flex-col h-[90vh]">
      <div className="flex-grow p-4 bg-transparent">
        <div style={{ width: "80%", margin: "0 auto", padding: "0 10%" }}>
          {messages.length > 0 ? (
            <MessageList messages={messages} />
          ) : (
            <React.Fragment>
              <BannerText text="No messages yet. Start the conversation!" />
              <SuggestionCards />
            </React.Fragment>
          )}
        </div>
      </div>
      <div className="p-4">
        <InputBox onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
