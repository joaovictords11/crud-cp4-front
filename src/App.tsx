import { BrowserRouter, Route, Routes } from "react-router-dom";
import Targets from "./pages/Targets";
import ToDo from "./pages/ToDo";
import NavBar from "./components/NavBar";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Targets/>}/>
        <Route path="/todos" element={<ToDo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
