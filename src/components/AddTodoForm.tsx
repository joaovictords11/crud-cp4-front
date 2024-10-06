import { MdAddBox } from "react-icons/md";

type AddTodoFormProps = {
  targetId: number;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    targetId: number
  ) => Promise<void>;
  todoTitle: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
};

const AddTodoForm = ({
  targetId,
  onSubmit,
  setTodoTitle,
  todoTitle,
}: AddTodoFormProps) => {

  return (
    <form
      className="flex items-center mt-2"
      onSubmit={(e) => onSubmit(e, targetId)}
    >
      <input
        type="text"
        value={todoTitle}
        required
        minLength={3}
        onChange={(e) => setTodoTitle(e.target.value)}
        className="outline-none py-1 px-2 rounded-l-md"
        placeholder="Digite o título..."
      />
      <button className="bg-green-500 p-1 rounded-r-md hover:opacity-70">
        <MdAddBox size={25} className="text-white" />
      </button>
    </form>
  );
};

export default AddTodoForm;
