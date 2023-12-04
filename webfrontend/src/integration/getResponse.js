// getResponse.js (mock implementation)
const getResponse = async (userMessage) => {
    // Simulate an asynchronous operation, e.g., fetching response from a server
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a chatbot response based on the user's message
        const responses = {
          "hello": "Hi there! How can I help you?",
          "how are you": "I'm just a computer program, but thanks for asking!",
          "default": "I'm sorry, I didn't understand that.",
        };
  
        const responseText = responses[userMessage.toLowerCase()] || responses["default"];
        resolve(responseText);
      }, 1000); // Simulate a 1-second delay for the response
    });
  };
  
  export default getResponse;
  