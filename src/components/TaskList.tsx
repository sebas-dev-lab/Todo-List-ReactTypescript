import React from "react";
import { Task } from "../interfaces/Task.interface";
import TaskCards from "./TaskCards";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}
const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <>
      {tasks.map((tk) => (
        <div className="col-md-4 p-2" key={tk.id}>
          <TaskCards task={tk} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
};

export default TaskList;
