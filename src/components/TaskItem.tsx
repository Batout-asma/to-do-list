import { FaTrash, FaEdit } from "react-icons/fa";
import { Task } from "../types/types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-lg">
      <span
        className={`flex-1  ${
          task.completed ? "line-through text-green-500" : ""
        }`}
      >
        {task.text}
      </span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-2"
      />
      <button onClick={() => onEdit(task.id)} className="text-green-500 px-2">
        <FaEdit size={20} />
      </button>
      <button onClick={() => onDelete(task.id)} className="text-red-500 px-2">
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default TaskItem;
