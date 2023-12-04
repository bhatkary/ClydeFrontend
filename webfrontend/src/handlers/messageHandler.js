// handlers/messageHandler.js
import getUserPicture from "../integration/getUserPicture";
import getResponse from "../integration/getResponse";
import Logo from "../assets/clydSymbol.png";

const AdminName = "Clyd";
const UserName = "You";

const messageHandler = {
  handleSendMessage: async (newMessage, setMessages, messages, project) => {
    // Use the getUserPicture function to set the user's picture
    const userPicture = getUserPicture(UserName);

    // Add the user's message to the messages
    const userMessage = {
      sender: UserName,
      text: newMessage,
      photo: userPicture,
    };

    // Add the user's message to the messages, and a waiting message
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const chatbotWaitingMessage = {
      sender: AdminName,
      photo: Logo,
      loading: true,
    };

    setMessages((prevMessages) => [...prevMessages, chatbotWaitingMessage]);

    try {
      // Perform an async operation to get the response
      const responseText = await getResponse(newMessage);

      // Use the getUserPicture function to set the chatbot's picture
      const chatbotMessage = {
        sender: AdminName,
        text: responseText,
        photo: Logo,
      };

      // Update the state with the chatbot's response
      setMessages((prevMessages) => {
        // Find the index of the waiting message
        const waitingMessageIndex = prevMessages.findIndex(
          (message) => message.loading === true
        );

        if (waitingMessageIndex !== -1) {
          // Replace the waiting message with the chatbot's response
          const updatedMessages = [...prevMessages];
          updatedMessages[waitingMessageIndex] = chatbotMessage;
          return updatedMessages;
        }

        // If waiting message is not found, just add the chatbot's response
        return [...prevMessages, chatbotMessage];
      });
    } catch (error) {
      console.error("Error fetching response:", error);
      // Handle error if needed
    }
  },
};

export default messageHandler;
