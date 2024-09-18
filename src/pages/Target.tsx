import { useEffect, useState } from "react";
import useApiData from "../hooks/useApiData";
import TargetCard from "./TargetCard";
import TargetEditModal from "../components/TargetEditModal";

const Target = () => {
  const { deleteTarget, reloadData, targets, putTarget } = useApiData();
  const [targetEditModal, setTargetEditModal] = useState(false);

  useEffect(() => {
    reloadData();
  }, []);

  const handleDeleteTarget = async (id: number) => {
    await deleteTarget(id);
    await reloadData();
  };

  const handleEditTarget = async (targetId: number) => {
    await putTarget(targetId, {
      title: "outro teste de novo",
      isComplete: false,
      description: "so teste",
      todo: []
    });
    setTargetEditModal(true);
    await reloadData();
  };

  return (
    <>
      {targets.length === 0 ? (
        <p className="flex justify-center mt-8 text-xl">
          Carregando Targets...
        </p>
      ) : (
        <section className="flex flex-col items-center justify-center gap-8 mt-8">
          {targets.map((target) => (
            <TargetCard
              key={target.id}
              target={target}
              onDeleteTarget={handleDeleteTarget}
              onEdit={handleEditTarget}
            />
          ))}
          {targetEditModal && (
            <TargetEditModal onCloseModal={setTargetEditModal} />
          )}
        </section>
      )}
    </>
  );
};

export default Target;
