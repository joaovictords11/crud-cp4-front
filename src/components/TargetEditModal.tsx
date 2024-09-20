import { IoMdCloseCircle } from "react-icons/io";
import { TargetProps } from "../hooks/useApiData";
import useFormData from "../hooks/useFormData";

type TargetEditModalProps = {
  onCloseModal: () => void;
  target: Omit<TargetProps, "todo" | "isComplete">;
  onUpdateTarget: (updatedTarget: TargetProps) => void;
};

const inputStyle = "p-2 rounded-md outline-none";

const TargetEditModal = ({ onCloseModal, target }: TargetEditModalProps) => {
  const { register, handleSubmit, handleEditTarget } = useFormData();

  const onSubmit = async (data: Omit<TargetProps, "id" | "todo" | "isComplete">) => {
    const updatedTarget = { ...data, id: target.id }
    await handleEditTarget(updatedTarget);

    onCloseModal();
  };

  return (
    <section className="flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-gray-300 p-4 gap-4 rounded-md">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-medium">Editar Target</h1>
          <button type="button" className="hover:opacity-65" onClick={onCloseModal}>
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <input
          {...register("title", { required: "Título é obrigatório" })}
          defaultValue={target?.title || ""}
          placeholder="Digite o título"
          className={inputStyle}
        />
        <input
          {...register("description", { required: "Descrição é obrigatória" })}
          defaultValue={target?.description || ""}
          placeholder="Digite a descrição"
          className={inputStyle}
        />
        <button type="submit" className="bg-slate-50 rounded-md p-3 mt-3 font-medium hover:bg-gray-100">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default TargetEditModal;
