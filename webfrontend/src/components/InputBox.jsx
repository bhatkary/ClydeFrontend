import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const InputBox = ({ onSendMessage }) => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Set the initial height of the textarea based on its content
    inputRef.current.style.height = "auto";
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  }, []);

  const handleInputHeight = () => {
    inputRef.current.style.height = "auto";
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    setIsButtonDisabled(!inputRef.current.value.trim()); // Disable the button if there is no input
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const newMessage = event.target.message.value;
    onSendMessage(newMessage);
    event.target.reset();
    handleInputHeight(); // Reset the height after submitting a message
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!isButtonDisabled) {
        buttonRef.current.click(); // Simulate a click on the button if it's not disabled
      }
    }
  };

  return (
    <form
      onSubmit={handleMessageSubmit}
      className="p-2 mx-auto max-w-2xl flex border border-gray-300 rounded-lg"
      style={{ background: "transparent" }}
    >
      <textarea
        ref={inputRef}
        name="message"
        placeholder="Message Clyde..."
        className="resize-none border-none focus:outline-none p-1 w-full text-white bg-transparent rounded-l-md text-base" // Adjusted border-radius
        style={{
          background: "transparent",
          overflowY: "auto",
          maxHeight: "100px",
          minHeight: "1rem",
          // Custom scrollbar styles using Tailwind classes
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f1f1f1",
        }}
        onInput={handleInputHeight}
        onKeyDown={handleEnterKeyPress}
        rows={1}
      />
      <button
        ref={buttonRef}
        disabled={isButtonDisabled}
        style={{
          width: "2rem",
          height: "2rem",
        }}
        className={`p-1 rounded-l rounded-r ml-1 flex-shrink-0 relative transition duration-300 ${
          isButtonDisabled
            ? "bg-stone-400 text-white"
            : "bg-white text-black hover:bg-gray-800 hover:text-white border border-gray-700"
        }`}
      >
        <FontAwesomeIcon
          icon={faPlay}
          style={{ color: "#000" }}
          className="text-base"
        />
      </button>
    </form>
  );
};

export default InputBox;
