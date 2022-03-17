import React, { useState } from "react";
import logo from "./logo.svg";
import { Task } from "./interfaces/Task.interface";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "learn",
      description: "learn",
      completed: false,
    },
  ]);

  const getCurrentTiemestamp = (): number => new Date().getTime();

  const newAddTask = (task: Task) =>
    setTask([
      ...tasks,
      { ...task, id: getCurrentTiemestamp(), completed: false },
    ]);
  const deleteTask = (id: number) => setTask(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={newAddTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
