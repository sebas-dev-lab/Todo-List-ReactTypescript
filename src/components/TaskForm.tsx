import React, { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task.interface";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Props {
  addNewTask: (task: Task) => void;
}

const initialState = {
  title: "",
  description: "",
};

const TaskForm = ({ addNewTask }: Props) => {
  const [task, setTask] = useState(initialState);

  const handleChange = ({ target: { name, value } }: HandleInputChange) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="write title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
