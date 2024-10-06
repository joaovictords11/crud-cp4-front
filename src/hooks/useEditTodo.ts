
import { useForm } from "react-hook-form";
import useApiData, { TodoProps } from "./useApiData";
import { useState } from "react";

const useEditTodo = () => {
  const [todoToEdit, setTodoToEdit] = useState<TodoProps | null>(null);
  const { register, handleSubmit } = useForm<TodoProps>();
  const [showEditTodo, setShowEditTodo] = useState(false);

  const { putTodo } = useApiData();

  const handleEditTodo = async (data: TodoProps) => {
    if (data) {
      await putTodo(data.id!, data);
      setShowEditTodo(false);
      setTodoToEdit(null);
    } else {
      console.log("Ops, erro ao enviar!");
    }
  };

  return {
    todoToEdit,
    setTodoToEdit,
    register,
    handleSubmit,
    showEditTodo,
    setShowEditTodo,
    handleEditTodo,
  };
};

export default useEditTodo;
