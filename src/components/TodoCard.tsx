import { IoCheckboxOutline } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";
import { TodoProps } from "../hooks/useApiData";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

type TodoCardProps = {
  todo: TodoProps;
  onSetTodoStatus: (todo: TodoProps) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (todo: TodoProps) => void;
};

const TodoCard = ({
  todo,
  onSetTodoStatus,
  onDeleteTodo,
  onEditTodo,
}: TodoCardProps) => {
  return (
    <div
      className={`flex justify-between py-2 items-center px-10 w-targetCard rounded-md`}
    >
      <div className="flex items-center gap-2">
        <button>
          {todo.isComplete ? (
            <IoCheckbox
              className={`hover:opacity-70 text-green-500`}
              size={20}
              onClick={() => onSetTodoStatus(todo)}
            />
          ) : (
            <IoCheckboxOutline
              className={`hover:opacity-70`}
              size={20}
              onClick={() => onSetTodoStatus(todo)}
            />
          )}
        </button>
        <h3 className={`text-xl ${todo.isComplete ? "line-through" : ""}`}>
          {todo.title}
        </h3>
      </div>
      <div className="flex items-center gap-4 ">
        <button className="hover:opacity-70" onClick={() => onEditTodo(todo)}>
          <FaRegEdit size={17} />
        </button>
        <button
          className="hover:opacity-70"
          onClick={() => onDeleteTodo(todo.id!)}
        >
          <FaRegTrashAlt size={17} />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
