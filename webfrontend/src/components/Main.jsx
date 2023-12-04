// Main.jsx
import React, { useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import getProjects from "../integration/getProjects";

const Main = () => {
  // Use state to manage the selected project
  const [currentProject, setCurrentProject] = useState(null);

  // Get projects data
  const projects = getProjects();

  // Update the current project when a project is clicked in the Sidebar
  const handleProjectClick = (project) => {
    setCurrentProject(project);
  };

  return (
    <div className="flex flex-1">
      {/* Pass projects and the handleProjectClick function to the Sidebar */}
      <Sidebar projects={projects} onProjectClick={handleProjectClick} />
      <div className="flex-grow">
        {/* Pass the current project to the Chat component */}
        <Chat currentProject={currentProject} />
        {/* Add other components as needed */}
      </div>
    </div>
  );
};

export default Main;
