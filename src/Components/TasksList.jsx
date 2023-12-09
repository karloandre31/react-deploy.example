import TaskCard from "./TaskCard";
import { TaskContent } from "../context/TaskContext";
import { useContext } from "react";

function TasksList() {
  const {tasks} = useContext(TaskContent);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl mt-6 ">There arent tasks here</h1>;
  }

  return (
    <div >
      <ul className="grid grid-cols-4 gap-2">
        {tasks.map((task) => {
          return <TaskCard title={task.title} task={task.description} key={task.ID} idTask={task.ID}/>
        })}
      </ul>
    </div>
  );
}
export default TasksList;



