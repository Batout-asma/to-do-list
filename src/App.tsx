import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { Task } from "./types/types";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>("");

  const addTask = () => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number) => {
    const newText = prompt("Edit Task:");
    if (newText) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        onClear={function (): void {
          setTasks([]);
        }}
      />
      <main className="flex-grow flex flex-col items-center w-full p-5">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-5 text-white animate-glow">
          Welcome to Batout's To Do List
        </h1>
        <div className="w-full max-w-lg bg-gray-200 p-5 rounded-lg shadow-md shadow-green-700 mt-10 border-2 border-green-500 ">
          <div className="flex gap-2">
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Enter task..."
              className="flex-1 p-2 border rounded bg-white border-gray-400"
            />
            <button
              onClick={addTask}
              className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition"
            >
              Add
            </button>
          </div>

          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />

          {tasks.length === 0 && (
            <p className="text-gray-500 text-center mt-4">
              No tasks created yet
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
