// Project.jsx
import React from "react";

const Project = ({ name, imageSrc, selected, onSelect }) => {
  const projectStyle = {
    backgroundColor: selected ? "#2d3748" : "", // Darker color for the selected project
  };

  return (
    <div
      className="bg-zinc-900 p-3 mb-2 rounded flex items-center transition duration-300 hover:bg-zinc-800"
      style={projectStyle}
      onClick={onSelect}
    >
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-full h-10 w-10 object-cover mr-2"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default Project;
