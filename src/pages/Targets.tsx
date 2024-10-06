import { useEffect, useState } from "react";
import useApiData, { TargetProps, TodoProps } from "../hooks/useApiData";
import TargetCard from "../components/TargetCard";
import TargetEditModal from "../components/TargetEditModal";
import useFormData from "../hooks/useFormData";
import { toast } from "react-toastify";
import AddTargetForm from "../components/AddTargetForm";

const Target = () => {
  const {
    deleteTarget,
    reloadData,
    targets,
    putTodo,
    deleteTodo,
    postTodo,
    putTarget,
  } = useApiData();
  const { setTargetEditModal, targetEditModal, targetToEdit, setTargetToEdit } =
    useFormData();

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    reloadData();
  }, []);

  const handleDeleteTarget = async (id: number) => {
    await deleteTarget(id);
    await reloadData();
    toast.error("Target excluído!");
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    await reloadData();
    toast.error("Todo excluído!");
  };

  const handleCloseModal = async () => {
    setTargetEditModal(false);
    setTargetToEdit(null);
    await reloadData();
  };

  const handleSetTargetToUpdate = (target: TargetProps) => {
    setTargetToEdit(target);
    setTargetEditModal(true);
  };

  const handleReload = async () => {
    await reloadData();
  };

  const handleTodoStatus = async (todo: TodoProps) => {
    await putTodo(todo.id!, { ...todo, isComplete: !todo.isComplete });
    if(todo.isComplete !== true){
      toast.success("Marcado como concluído!")
    }else{
      toast.info("Concluído removido!")
    }
    await reloadData();
  };

  const handleAddTodo = async (
    e: React.FormEvent<HTMLFormElement>,
    targetId: number
  ) => {
    e.preventDefault();
    await postTodo({ title: todoTitle, targetId: targetId });
    setTodoTitle("");
    toast.success("ToDo adicionado!");
    setShowAddTodoForm(false);
    await reloadData();
  };

  const toggleTargetStatus = async (target: TargetProps) => {
    await putTarget(target.id!, {...target, isComplete: !target.isComplete});
    if(target.isComplete !== true){
      toast.success("Marcado como concluído!")
    }else{
      toast.info("Concluído removido!")
    }
    await reloadData()
  };

  return (
    <>
      <AddTargetForm onReload={handleReload} />
      {targets === undefined ? (
        <p className="flex justify-center my-8 text-xl">
          Carregando Targets...
        </p>
      ) : targets.length === 0 ? (
        <p className="flex justify-center my-8 text-xl">
          Não há targets no momento
        </p>
      ) : (
        <section className="flex flex-col items-center justify-center gap-8 my-8">
          {targets.map((target) => (
            <TargetCard
              key={target.id}
              target={target}
              onDeleteTarget={handleDeleteTarget}
              onEdit={handleSetTargetToUpdate}
              handleTodoStatus={handleTodoStatus}
              handleDeleteTodo={handleDeleteTodo}
              showAddTodoForm={showAddTodoForm}
              setShowAddTodoForm={setShowAddTodoForm}
              handleAddTodo={handleAddTodo}
              todoTitle={todoTitle}
              setTodoTitle={setTodoTitle}
              toggleTargetStatus={toggleTargetStatus}
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
