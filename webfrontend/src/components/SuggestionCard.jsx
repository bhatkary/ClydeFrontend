// SuggestionCard.jsx
import React from "react";

const SuggestionCard = ({ suggestion, onClick }) => {
  return (
    <div
      className="bg-zinc-900 text-gray-300 px-3 py-2 rounded-md cursor-pointer w-32 h-32"
      onClick={() => onClick(suggestion)}
    >
      {suggestion}
    </div>
  );
};

export default SuggestionCard;
