import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../Data/tasks";

export const TaskContent = createContext();

export const TaskContentProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskTitle, task) => {
    //[...tasks, []] is for add news task in my array
    setTasks([
      ...tasks,
      {
        ID: tasks.length,
        title: taskTitle,
        description: task,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((e) => e.ID !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContent.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContent.Provider>
  );
};
