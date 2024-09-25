import { useState } from "react";
import { FaRegTrashAlt, FaArrowDown, FaArrowUp, FaPen } from "react-icons/fa";
import { TargetProps } from "../hooks/useApiData";
import TodoCard from "./TodoCard";

type TargetCardProps = {
  target: TargetProps;
  onDeleteTarget: (id: number) => void;
  onEdit: (target: TargetProps) => void;
};

const TargetCard = ({ target, onDeleteTarget, onEdit }: TargetCardProps) => {
  const [showToDos, setShowToDos] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-gray-200 w-1/2 py-6 px-10 text-center rounded-lg shadow-md">
        <h3 className="text-2xl">{target.title}</h3>
        <div className="flex gap-3">
          <button
            onClick={() => setShowToDos(!showToDos)}
            className="bg-gray-500 hover:bg-slate-600 px-3 py-2 rounded-lg"
          >
            {!showToDos ? (
              <FaArrowDown className="text-white" />
            ) : (
              <FaArrowUp className="text-white" />
            )}
          </button>
          {target.id && (
            <button
              onClick={() => onDeleteTarget(target.id!)}
              className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg"
            >
              <FaRegTrashAlt className="text-white" />
            </button>
          )}
          <button
            onClick={() => onEdit(target)}
            className="bg-gray-300 hover:bg-slate-400 px-3 py-2 rounded-lg"
          >
            <FaPen />
          </button>
        </div>
      </div>
      {showToDos && (
        <div>
          {target.todo.length > 0 ? (
            target.todo.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))
          ) : (
            <p>Não há ToDos no momento</p>
          )}
        </div>
      )}
    </>
  );
};

export default TargetCard;
