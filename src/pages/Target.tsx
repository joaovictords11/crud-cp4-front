import { useEffect } from "react";
import useApiData from "../hooks/useApiData";

const Target = () => {
  const { deleteTarget, reloadData } = useApiData();

  useEffect(() => {
    reloadData();
  }, []);

  const excluirTarget = async (id: number) => {
    await deleteTarget(id);
    await reloadData();
  };

  return <button onClick={() => excluirTarget(1)}>Excluir target</button>;
};

export default Target;
