import Targets from "./pages/Targets";
import PageTitle from "./components/Title";
import "./index.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <PageTitle />
      <Targets/>
      <ToastContainer position="top-right" pauseOnHover autoClose={3000} />
    </>
  );
}

export default App;
