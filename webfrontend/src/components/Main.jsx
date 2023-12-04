// Main.jsx
import React, { useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import getProjects from "../integration/getProjects";

const Main = () => {
  // Get projects data
  const projects = getProjects();

  // Use state to manage the selected project, defaulting to the first project
  const [currentProject, setCurrentProject] = useState(projects[0].id);

  // Update the current project when a project is clicked in the Sidebar
  const handleProjectClick = (project) => {
    setCurrentProject(project.id);
  };

  return (
    <div className="flex flex-1">
      {/* Pass projects, the handleProjectClick function, and the currentProject to the Sidebar */}
      <Sidebar
        projects={projects}
        onProjectClick={handleProjectClick}
        selectedProject={currentProject}
      />
      <div className="flex-grow">
        {/* Pass the current project to the Chat component */}
        <Chat currentProject={currentProject} />
        {/* Add other components as needed */}
      </div>
    </div>
  );
};

export default Main;
