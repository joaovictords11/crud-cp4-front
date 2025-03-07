import { useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaPen,
  FaRegCheckCircle,
  FaRegCircle,
  FaRegTrashAlt,
} from "react-icons/fa";
import { TargetProps, TodoProps } from "../hooks/useApiData";
import AddTodoBtn from "./AddTodoBtn";
import AddTodoForm from "./AddTodoForm";
import TodoCard from "./TodoCard";

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
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  toggleTargetStatus: (target: TargetProps) => Promise<void>;
  onEditTodo: (todo: TodoProps) => void;
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
  toggleTargetStatus,
  onEditTodo,
}: TargetCardProps) => {
  const [showToDos, setShowToDos] = useState(false);

  return (
    <section
      className={`flex flex-col py-6 gap-6 items-center max-small:w-11/12 w-targetCard bg-gray-200 rounded-lg shadow-md hover:scale-105 duration-300 ${target.isComplete && "border border-green-500"
        }`}
    >
      <div className="flex items-center gap-6 max-small:flex-col max-small:gap-4 justify-between bg-gray-200 w-full px-10 text-center">
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
          <h3 className="text-2xl break-all text-start">{target.title}</h3>
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
        <div className="flex flex-col gap-4 w-full">
          <p className="px-10 flex text-lg font-medium mb-5">
            Descrição: <span className="font-normal ml-2">{target.description}</span>
          </p>
          {target.todo.length > 0 ? (
            <div className="flex flex-col items-center">
              {target.todo.map((todo: TodoProps) => (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  onSetTodoStatus={handleTodoStatus}
                  onDeleteTodo={handleDeleteTodo}
                  onEditTodo={onEditTodo}
                />
              ))}

              <AddTodoBtn
                formAddState={showAddTodoForm}
                onAddTodo={setShowAddTodoForm}
              />
              {showAddTodoForm && (
                <AddTodoForm
                  setTodoTitle={setTodoTitle}
                  onSubmit={handleAddTodo}
                  targetId={target.id!}
                />
              )}
            </div>
          ) : (
            <div className="bg-gray-200 flex flex-col items-center gap-3 justify-center w-full">
              <p className="text-lg">Não há todos no momento...</p>
              <AddTodoBtn
                formAddState={showAddTodoForm}
                onAddTodo={setShowAddTodoForm}
              />
              {showAddTodoForm && (
                <AddTodoForm
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
