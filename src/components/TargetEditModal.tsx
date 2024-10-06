import { IoMdCloseCircle } from "react-icons/io";
import { TargetProps } from "../hooks/useApiData";
import useFormData from "../hooks/useFormData";
import { toast } from "react-toastify";

type TargetEditModalProps = {
  onCloseModal: () => void;
  target: Omit<TargetProps, "todo" | "isComplete">;
};

const inputStyle = "p-2 rounded-md outline-none";

const TargetEditModal = ({ onCloseModal, target }: TargetEditModalProps) => {
  const { register, handleSubmit, handleEditTarget } = useFormData();

  const onSubmit = async (
    data: Omit<TargetProps, "id" | "todo">
  ) => {
    const updatedTarget = { ...data, id: target.id };
    await handleEditTarget(updatedTarget);
    onCloseModal();
    toast.info("Target editado!");
  };

  return (
    <section className="flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-gray-300 p-4 gap-4 rounded-md"
      >
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-medium">Editar Target</h1>
          <button
            type="button"
            className="hover:opacity-65 duration-300"
            onClick={onCloseModal}
          >
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <label>Título</label>
          <input
            {...register("title")}
            defaultValue={target?.title || ""}
            placeholder="Digite o título"
            className={inputStyle}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Descrição</label>
          <input
            {...register("description")}
            defaultValue={target?.description || ""}
            placeholder="Digite a descrição"
            className={inputStyle}
            required
          />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" {...register("isComplete")}/>
          <label>Marcar como completo</label>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white duration-300 rounded-md p-3 mt-3 font-medium hover:opacity-75"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default TargetEditModal;
