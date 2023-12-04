// SuggestionCards.jsx
import React from "react";
import SuggestionCard from "./SuggestionCard";

const SuggestionCards = ({ onSuggestionClick }) => {
  // Set suggestions using a constant
  const suggestions = [
    "When in my next deadline?",
    "What are the most urgent bugs right now?",
    "Who on my team can help me with backend?",
  ];

  return (
    <div className="mt-4">
      <div className="flex space-x-2">
        {suggestions.map((suggestion, index) => (
          <SuggestionCard
            key={index}
            suggestion={suggestion}
            onClick={onSuggestionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestionCards;
