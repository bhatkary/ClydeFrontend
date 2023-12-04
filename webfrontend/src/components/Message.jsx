import React from "react";

const Message = ({ message, loading }) => {
  const { sender, text, photo } = message;

  // Add styles for the message container
  const messageContainerStyle = {
    display: "flex",
    alignItems: "flex-start",
    color: "#fff",
    marginBottom: "16px", // Increase the spacing between messages
  };

  // Add styles for the circular photo container
  const photoContainerStyle = {
    borderRadius: "50%",
    width: "30px", // Adjust the size as needed
    height: "30px", // Adjust the size as needed
    marginRight: "8px", // Adjust the spacing as needed
    backgroundColor: "#fff", // Set the background color to white
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Prevent the image from overflowing its container
    flexShrink: 0, // Prevent the container from shrinking
  };

  // Add styles for the circular photo
  const photoStyle = {
    width: "100%", // Make the photo fill the container
    height: "100%", // Make the photo fill the container
    objectFit: "cover", // Maintain aspect ratio and cover the entire container
  };

  return (
    <div style={messageContainerStyle}>
      {photo && (
        <div style={photoContainerStyle}>
          <img src={photo} alt="Sender" style={photoStyle} />
        </div>
      )}
      <div>
        <strong>{sender}</strong>
        {loading ? (
          <div>Loading...</div> // Render loading animation if loading is true
        ) : (
          <div style={{ marginLeft: "8px" }}>{text}</div> // Render message text if loading is false
        )}
      </div>
    </div>
  );
};

export default Message;
