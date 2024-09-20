import { useEffect } from "react";
import useApiData, { TargetProps } from "../hooks/useApiData";
import TargetCard from "./TargetCard";
import TargetEditModal from "../components/TargetEditModal";
import useFormData from "../hooks/useFormData";

const Target = () => {
  const { deleteTarget, reloadData, targets, setTargets } = useApiData();
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
  };

  const handleCloseModal = () => {
    setTargetEditModal(false)
    setTargetToEdit(null)
  }

  const handleSetTargetToUpdate = (target: TargetProps) => {
    setTargetToEdit(target);
    setTargetEditModal(true);
  };

  const updateTarget = (updatedTarget: TargetProps) => {
    setTargets((prevTargets) =>
      prevTargets.map((target) =>
        target.id === updatedTarget.id ? updatedTarget : target
      )
    );
  };

  return (
    <>
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
              onUpdateTarget={updateTarget}
            />
          )}
        </section>
      )}
    </>
  );
};

export default Target;
