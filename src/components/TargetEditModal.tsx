import { IoMdCloseCircle } from "react-icons/io";

type TargetEditModalProps = {
  onCloseModal: (boolean: boolean) => void;
};

const inputStyle = "p-2 rounded-md outline-none";

const TargetEditModal = ({ onCloseModal }: TargetEditModalProps) => {
  return (
    <section className="flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen">
      <form className="flex flex-col bg-gray-300 p-4 gap-4 rounded-md">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-medium">Editar Target</h1>
          <button
            className="hover:opacity-65"
            onClick={() => onCloseModal(false)}
          >
            <IoMdCloseCircle size={20} />
          </button>
        </div>
        <input placeholder="Digite o título" className={inputStyle} />
        <input placeholder="Digite a descrição" className={inputStyle} />
        <button
          type="submit"
          className="bg-slate-50 rounded-md p-3 mt-3 font-medium hover:bg-gray-100"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default TargetEditModal;
