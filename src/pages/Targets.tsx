import { useEffect } from "react";
import useApiData, { TargetProps } from "../hooks/useApiData";
import TargetCard from "./TargetCard";
import TargetEditModal from "../components/TargetEditModal";
import useFormData from "../hooks/useFormData";
import AddTodoForm from "../components/AddTodoForm";
import { toast } from "react-toastify";

const Target = () => {
  const { deleteTarget, reloadData, targets } = useApiData();
  const {
    setTargetEditModal,
    targetEditModal,
    targetToEdit,
    setTargetToEdit,
  } = useFormData();

  useEffect(() => {
    reloadData();
  }, []);

  const handleDeleteTarget = async (id: number) => {
    await deleteTarget(id);
    await reloadData();
    toast.error("Target excluído!")
  };

  const handleCloseModal = async() => {
    setTargetEditModal(false)
    setTargetToEdit(null)
    await reloadData()
  }

  const handleSetTargetToUpdate = (target: TargetProps) => {
    setTargetToEdit(target);
    setTargetEditModal(true);
  };

  const handleReload = async () => {
    await reloadData()
  }

  return (
    <>
      <AddTodoForm onReload={handleReload}/>
      {targets === undefined ? (
        <p className="flex justify-center my-8 text-xl">Carregando Targets...</p>
      ) : targets.length === 0 ? (
        <p className="flex justify-center my-8 text-xl">Não há targets no momento</p>
      ) : (
        <section className="flex flex-col items-center justify-center gap-8 my-8">
          {targets.map((target) => (
            <TargetCard
              key={target.id}
              target={target}
              onDeleteTarget={handleDeleteTarget}
              onEdit={handleSetTargetToUpdate}
            />
          ))}
          {targetEditModal && targetToEdit && (
            <TargetEditModal
              target={targetToEdit}
              onCloseModal={handleCloseModal}
            />
          )}
        </section>
      )}
    </>
  );
};

export default Target;
