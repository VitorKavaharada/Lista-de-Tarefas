import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Revisar conteúdo de matemática",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Enviar relatório semanal",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Ligar para a família",
      category: "Pessoal",
      isCompleted: false,
    } 

  ]);

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo)=>(
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className='category'>
                ({todo.category})
              </p>
              <div>
                <button>Completar</button>
                <button>Deletar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
