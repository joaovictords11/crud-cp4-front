import { MdAdd } from "react-icons/md";

type AddTodoBtnProps = {
  onAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
  formAddState: boolean
};

const AddTodoBtn = ({ onAddTodo, formAddState }: AddTodoBtnProps) => {
  return (
    <>
      <button
        className="flex justify-center w-[240px] text-lg my-2 items-center gap-2 hover:opacity-70 px-10"
        onClick={() => onAddTodo(!formAddState)}
      >
        <MdAdd size={25} />
        Adicionar Todo
      </button>
    </>
  );
};

export default AddTodoBtn;
