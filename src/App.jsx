import "./App.css";
import TasksList from "./Components/TasksList";
import TaskForm from "./Components/TaskForm";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
