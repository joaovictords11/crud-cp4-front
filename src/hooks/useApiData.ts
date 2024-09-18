import { useState } from "react";
import { apiInstance } from "./axiosInstance";

interface TodoProps {
  id?: number;
  title: string;
  description: string;
  isComplete: boolean;
  targetId: number;
}
interface TargetProps {
  id?: number;
  title: string;
  description: string;
  isComplete: boolean;
  todo: Array<TodoProps>;
}

const initialTarget = {
  description: "",
  title: "",
  isComplete: false,
  todo: [],
};

const useApiData = () => {
  const [targets, setTargets] = useState<TargetProps[]>([]);
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [targetId, setTargetId] = useState<number>(0);
  const [targetToPost, setTargetToPost] = useState<TargetProps>(initialTarget);

  // T A R G E T S ------------------------------------------------------------------

  const getTargets = async () => {
    try {
      const response = await apiInstance.get("Targets");
      setTargets(response.data); // Armazena os dados recebidos no estado
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const getTargetById = async (targetId: number) => {
    try {
      const response = await apiInstance.get(`Targets/${targetId}`);
      setTargets(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const postTarget = async (description: TargetProps) => {
    try {
      const response = await apiInstance.post("Targets", { ...description });
      console.log(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const putTarget = async (targetId: number, updates: Omit<TargetProps, "id">) => {
    try {
      const response = await apiInstance.post(`Targets/${targetId}`, {
        id: targetId,
        ...updates
      });
      console.log(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const deleteTarget = async (targetId: number) => {
    try {
      const response = await apiInstance.delete(`Targets/${targetId}`);
      console.log(response.data); // Armazena os dados recebidos no estado
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  // T O - D O S ----------------------------------------------------------------

  const getTodos = async () => {
    try {
      const response = await apiInstance.get("Todo");
      const data = response.data;

      setTodos(data);
    } catch (error) {
      console.log("Erro: ", error);
    }
  };

  const getTodoById = async (todoId: number) => {
    try {
      const response = await apiInstance.get(`Todo/${todoId}`);
      const data = response.data;

      setTodos([data]);
    } catch (error) {
      console.log("Erro: ", error);
    }
  };

  const postTodo = async (description: TodoProps) => {
    try {
      const response = await apiInstance.post("Todo", { ...description });
      console.log(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const putTodo = async (todoId: number, updates: Omit<TodoProps, "id">) => {
    try {
      const response = await apiInstance.put(`Todo/${todoId}`, {
        id: todoId,
        ...updates,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const deleteTodo = async (todoId: number) => {
    try {
      const response = await apiInstance.delete(`Todo/${todoId}`);
      console.log(response.data); // Armazena os dados recebidos no estado
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const reloadData = async () => {
    await getTargets();
    await getTodos();
  };

  return {
    reloadData,
    targets,
    setTargets,
    todos,
    setTodos,
    targetId,
    setTargetId,
    targetToPost,
    setTargetToPost,
    //Targets
    getTargets,
    getTargetById,
    postTarget,
    putTarget,
    deleteTarget,
    //ToDo
    getTodos,
    getTodoById,
    deleteTodo,
    postTodo,
    putTodo,
  };
};

export default useApiData;
