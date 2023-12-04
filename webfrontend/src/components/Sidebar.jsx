// Sidebar.jsx
import React from "react";
import Project from "./Project";

const Sidebar = ({ projects, onProjectClick, selectedProject }) => {
  return (
    <div className="bg-zinc-900 text-white w-1/4 h-screen p-4 overflow-y-auto">
      <p className="text-stone-400 mb-4">Projects</p>

      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          imageSrc={project.imageSrc}
          selected={project.id === selectedProject}
          onSelect={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
