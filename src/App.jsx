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

  const addTodo = (text,category) =>{
    const newTodos = [
    ...todos,
    {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ];
    setTodos(newTodos);
  }

  const removeTodo = (id) =>{
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo=> todo.id !== id ? todo : null)
    setTodos(filteredTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
