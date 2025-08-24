import { useState } from 'react'

import Todo from './components/ToDo'
import TodoForm from './components/TodoForm'
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
            <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
      <TodoForm/>
    </div>
  )
}

export default App
