// SuggestionCards.jsx
import React from "react";

const SuggestionCards = () => {
  const suggestions = ["Hello", "How are you?", "Tell me a joke"];

  return (
    <div className="mt-4">
      <p className="text-gray-500 mb-2">Suggestions:</p>
      <div className="flex space-x-2">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-md cursor-pointer"
            // Add an onClick handler to handle the suggestion click
            onClick={() => console.log(`Clicked on suggestion: ${suggestion}`)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionCards;
