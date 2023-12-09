import { useContext } from "react";
import { TaskContent } from "../context/TaskContext";

function TaskCard({title,task, idTask}) {
  const {deleteTask} = useContext(TaskContent)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <li>
        <h1 className="text-xl font-bold capitalize">{title}</h1>
        <h2 className="text-gray-500 text-sm">{task}</h2>
        <button onClick={() => deleteTask(idTask)} className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400">Delete</button>
      </li>
    </div>
  );
}


export default TaskCard;
