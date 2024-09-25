import { MdLibraryAdd } from "react-icons/md";
import useApiData, { TargetProps } from "../hooks/useApiData";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AddTodoFormProps = {
  onReload: () => void;
};

const AddTodoForm = ({ onReload }: AddTodoFormProps) => {
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
      className="flex justify-center items-center gap-2 my-8"
    >
      <input
        {...register("title")}
        placeholder="Título"
        className="p-2 rounded-l-md outline-none shadow"
        required
      />
      <input
        {...register("description")}
        placeholder="Descrição"
        className="p-2 outline-none shadow"
        required
      />
      <button
        type="submit"
        className="bg-green-500 p-1 rounded-r-md shadow hover:opacity-70 duration-300"
      >
        <MdLibraryAdd className="text-white" size={30} />
      </button>
    </form>
  );
};

export default AddTodoForm;
