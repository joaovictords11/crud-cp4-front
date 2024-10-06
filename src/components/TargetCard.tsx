import { useState } from "react";
import {
  FaRegTrashAlt,
  FaArrowDown,
  FaArrowUp,
  FaPen,
  FaRegCheckCircle,
  FaRegCircle,
} from "react-icons/fa";
import { TargetProps, TodoProps } from "../hooks/useApiData";
import TodoCard from "./TodoCard";
import AddTodoBtn from "./AddTodoBtn";
import AddTodoForm from "./AddTodoForm";

type TargetCardProps = {
  target: TargetProps;
  onDeleteTarget: (id: number) => void;
  onEdit: (target: TargetProps) => void;
  handleTodoStatus: (todo: TodoProps) => void;
  handleDeleteTodo: (id: number) => void;
  showAddTodoForm: boolean;
  setShowAddTodoForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTodo: (
    e: React.FormEvent<HTMLFormElement>,
    targetId: number
  ) => Promise<void>;
  todoTitle: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  toggleTargetStatus: (target: TargetProps) => Promise<void>;
};

const TargetCard = ({
  target,
  onDeleteTarget,
  onEdit,
  handleTodoStatus,
  handleDeleteTodo,
  setShowAddTodoForm,
  showAddTodoForm,
  handleAddTodo,
  setTodoTitle,
  todoTitle,
  toggleTargetStatus,
}: TargetCardProps) => {
  const [showToDos, setShowToDos] = useState(false);

  return (
    <section
      className={`flex flex-col py-6 gap-6 items-center w-targetCard bg-gray-200 rounded-lg shadow-md ${
        target.isComplete && "border border-green-500"
      }`}
    >
      <div className="flex items-center justify-between bg-gray-200 w-[528px] px-10 text-center">
        <div className="flex items-center gap-4">
          <button
            className="hover:opacity-70"
            onClick={() => toggleTargetStatus(target)}
          >
            {target.isComplete ? (
              <FaRegCheckCircle size={21} className="text-green-500" />
            ) : (
              <FaRegCircle size={20} />
            )}
          </button>
          <h3 className="text-2xl">{target.title}</h3>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowToDos(!showToDos)}
            className="bg-gray-500 hover:bg-slate-600 px-3 py-2 rounded-md"
          >
            {!showToDos ? (
              <FaArrowDown className="text-white" />
            ) : (
              <FaArrowUp className="text-white" />
            )}
          </button>
          
          <button
            onClick={() => onEdit(target)}
            className="bg-gray-300 hover:bg-slate-400 px-3 py-2 rounded-md"
          >
            <FaPen />
          </button>
          {target.id && (
            <button
              onClick={() => onDeleteTarget(target.id!)}
              className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md"
            >
              <FaRegTrashAlt className="text-white" />
            </button>
          )}
        </div>
      </div>
      {showToDos && (
        <div className="flex flex-col gap-4">
          {target.todo.length > 0 ? (
            <div className="flex flex-col items-center">
              {target.todo.map((todo: TodoProps) => (
                <TodoCard
                  key={todo.id!}
                  todo={todo}
                  onSetTodoStatus={handleTodoStatus}
                  onDeleteTodo={handleDeleteTodo}
                />
              ))}
              <AddTodoBtn
                formAddState={showAddTodoForm}
                onAddTodo={setShowAddTodoForm}
              />
              {showAddTodoForm && (
                <AddTodoForm
                  todoTitle={todoTitle}
                  setTodoTitle={setTodoTitle}
                  onSubmit={handleAddTodo}
                  targetId={target.id!}
                />
              )}
            </div>
          ) : (
            <div className="bg-gray-200 flex flex-col items-center gap-3 justify-center w-targetCard">
              <p className="text-lg">Não há todos no momento...</p>
              <AddTodoBtn
                formAddState={showAddTodoForm}
                onAddTodo={setShowAddTodoForm}
              />
              {showAddTodoForm && (
                <AddTodoForm
                  todoTitle={todoTitle}
                  setTodoTitle={setTodoTitle}
                  onSubmit={handleAddTodo}
                  targetId={target.id!}
                />
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default TargetCard;
