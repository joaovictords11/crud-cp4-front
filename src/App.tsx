import { BrowserRouter, Route, Routes } from "react-router-dom";
import Targets from "./pages/Targets";
import ToDo from "./pages/ToDo";
import NavBar from "./components/NavBar";
import "./index.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Targets />} />
        <Route path="/todos" element={<ToDo />} />
      </Routes>
      <ToastContainer position="top-right" pauseOnHover autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
