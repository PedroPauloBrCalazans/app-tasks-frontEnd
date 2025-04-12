import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar Node.JS",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Trabalhar, migrar rotas",
      description: "Migrar rotas da tela principal",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Levar o Marley para passear",
      description: "Ir ate o condominio 5",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        {/* <AddTask /> */}
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
