import { useEffect } from "react";
import useApiData from "../hooks/useApiData";

const ToDo = () => {
  const { deleteTodo, reloadData } = useApiData();

  useEffect(() => {
    reloadData();
  }, []);

  const excluirTodo = async (id: number) => {
    await deleteTodo(id);
    await reloadData();
  };

  return <button onClick={() => excluirTodo(1)}>Excluir todo</button>;
};

export default ToDo;
