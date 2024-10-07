import { MdLibraryAdd } from "react-icons/md";
import useApiData, { TargetProps } from "../hooks/useApiData";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AddTargetFormProps = {
  onReload: () => void;
};

const AddTargetForm = ({ onReload }: AddTargetFormProps) => {
  const { postTarget } = useApiData();

  const { register, handleSubmit, reset } = useForm<TargetProps>();

  const onPostTarget = async (
    data: Omit<TargetProps, "isComplete" | "id" | "todo">
  ) => {
    await postTarget(data);
    onReload();
    reset();
    toast.success("Target adicionado!");
  };

  return (
    <form
      onSubmit={handleSubmit(onPostTarget)}
      className="flex justify-center max-small:flex-col max-small:gap-5 items-center gap-2 my-8"
    >
      <input
        {...register("title")}
        placeholder="Adicionar target..."
        className="p-2 rounded-l-md outline-none shadow max-small:rounded max-small:w-[210px]"
        required
      />
      <input
        {...register("description")}
        placeholder="Descrição"
        className="p-2 outline-none shadow max-small:rounded max-small:w-[210px]"
        required
      />
      <button
        type="submit"
        className="bg-green-500 p-1 flex justify-center max-small:mb-4 rounded-r-md max-small:w-[210px] max-small:rounded shadow hover:opacity-70 duration-300"
      >
        <MdLibraryAdd className="text-white" size={30} />
      </button>
    </form>
  );
};

export default AddTargetForm;
