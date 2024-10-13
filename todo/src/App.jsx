import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks: []
  });

  function handleAddTask(task) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks.filter((task) => task.id !== taskId)]
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData) {
    const projectId = Math.random();
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }

  function handleCancel() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleSelectProject(projectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      }
    })
  }

  function handleDelete() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)]
      }
    })
  }



  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = <SelectedProject tasks={projectState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={selectedProject} onDelete={handleDelete}></SelectedProject>;

  if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projectState.projects} onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
