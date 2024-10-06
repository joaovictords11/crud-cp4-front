import { IoMdCloseCircle } from "react-icons/io";
import { TodoProps } from "../hooks/useApiData";
import useEditTodo from "../hooks/useEditTodo";
import { toast } from "react-toastify";

type TodoEditModalProps = {
  todo: TodoProps;
  onCloseModal: () => Promise<void>;
};

const TodoEditModal = ({ todo, onCloseModal }: TodoEditModalProps) => {
  const { register, handleSubmit, handleEditTodo } = useEditTodo();

  const onSubmit = async (data: TodoProps) => {
    const updatedTodo: TodoProps = {
      ...data,
      id: todo.id,
      description: todo.description,
      targetId: todo.targetId,
    };
    await handleEditTodo(updatedTodo);
    toast.info("ToDo editado!");
    onCloseModal();
  };

  return (
    <section className="flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen">
      <form
        className="flex flex-col bg-gray-300 p-4 gap-4 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-medium">Editar ToDo</h1>
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
            defaultValue={todo?.title || ""}
            placeholder="Digite o título"
            className="p-2 rounded-md outline-none"
            minLength={3}
            required
          />
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            {...register("isComplete")}
            defaultChecked={todo?.isComplete || false}
            className="cursor-pointer"
          />
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

export default TodoEditModal;
