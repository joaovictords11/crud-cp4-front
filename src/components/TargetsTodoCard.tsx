import { FaCheckSquare } from "react-icons/fa";
import { TodoProps } from "../hooks/useApiData";

type TodoCardProps = {
  todo: TodoProps;
};

const TargetsTodoCard = ({ todo }: TodoCardProps) => {
  return (
    <div
      className={`bg-gray-200 flex justify-between py-4 px-6 w-80 shadow-md rounded-md ${
        todo.isComplete ? "bg-green-500" : ""
      }`}
    >
      <h3 className={`text-xl ${todo.isComplete ? "text-white" : ""}`}>{todo.title}</h3>
      <button>
        <FaCheckSquare
          className={`hover:opacity-70 ${
            todo.isComplete ? "text-white" : "text-green-600"
          }`}
          size={20}
        />
      </button>
    </div>
  );
};

export default TargetsTodoCard;
