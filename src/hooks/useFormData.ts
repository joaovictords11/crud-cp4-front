import { useState } from "react";
import useApiData, { TargetProps } from "./useApiData";
import { useForm } from "react-hook-form";

// const initialTarget: TargetProps = {
//   id: 77,  
//   description: "",
//   title: "",
//   isComplete: false,
//   todo: [],
// };

const useFormData = () => {
  const { putTarget} = useApiData();

  const [targetEditModal, setTargetEditModal] = useState<boolean>(false);
  const [targetToEdit, setTargetToEdit] = useState<Omit<TargetProps, "todo" | "isComplete"> | null>(null);

  const { register, handleSubmit} = useForm<Omit<TargetProps, "id">>();

  const handleEditTarget = async (data: Omit<TargetProps, "todo">) => {

    if (data) {
      await putTarget(data.id!, data);
      setTargetEditModal(false);
      setTargetToEdit(null)
    }else{
      console.log("Ops, erro ao enviar!")
    }
  };

  return {
    targetEditModal,
    setTargetEditModal,
    handleEditTarget,
    register,
    handleSubmit,
    targetToEdit,
    setTargetToEdit,
  };
};

export default useFormData;
