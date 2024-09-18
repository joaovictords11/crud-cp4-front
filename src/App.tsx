import { BrowserRouter, Route, Routes } from "react-router-dom";
import Target from "./pages/Target";
import ToDo from "./pages/ToDo";
import NavBar from "./components/NavBar";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Target/>}/>
        <Route path="/todos" element={<ToDo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div>
  <h1>Get - Todos:</h1>
  {todos.map((tarefa) => {
    return (
      <div key={tarefa.id}>
        <h3>{tarefa.title}</h3>
        <p>{tarefa.description}</p>
        {tarefa.id !== undefined && (
          <button onClick={() => excluirTodo(tarefa.id!)}>Excluir</button>
        )}
      </div>
    );
  })}
  <h1>Get - Targets:</h1>
  {targets.map((target) => {
    return (
      <div key={target.id}>
        <h3>{target.title}</h3>
        <p>{target.description}</p>
        {target.id !== undefined && (
          <button onClick={() => excluirTarget(target.id!)}>Excluir Target</button>
        )}
        {target.todo.map((tarefinha) => {
          return (
            <div key={tarefinha.id}>
              <p>todo: {tarefinha.title}</p>
            </div>
          );
        })}
      </div>
    );
  })}
</div> */
}
