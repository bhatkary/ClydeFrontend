// Sidebar.jsx
import React from "react";
import Project from "./Project";

const Sidebar = ({ projects, onProjectClick }) => {
  return (
    <div className="bg-zinc-900 text-white w-1/4 h-screen p-4 overflow-y-auto">
      <p className="text-stone-400 mb-4">Projects</p>

      {projects.map((project) => (
        <div key={project.id} onClick={() => onProjectClick(project)}>
          <Project name={project.name} imageSrc={project.imageSrc} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
