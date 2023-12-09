import { useState, useContext } from "react";
import { TaskContent } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState("");
  const { createTask } = useContext(TaskContent);

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask(title, tasks);
    setTitle("");
    setTasks("");
    document.getElementById("o").reset();
  };

  return (
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handlerSubmit}
          id="o"
          className="bg-slate-800 p-10 mb-4"
        >
          <h1 className="text-white text-3xl mb-4">Write your Task</h1>
          <input
            placeholder="Write a new Title"
            onBlur={(e) => {
              setTitle(e.target.value);
            }}
            autoFocus
            className="bg-slate-300 p-3 w-full mb-2"
            ></input>
          <input
            placeholder="Write a new Task"
            onBlur={(e) => {
              setTasks(e.target.value);
            }}
            className="bg-slate-300 p-3 w-full mb-2"
          ></input>
          <button className="bg-red-500 border-orange-200 rounded-md p-3 text-slate-300 hover:bg-red-400">OK</button>
        </form>
      </div>
  );
}

export default TaskForm;
