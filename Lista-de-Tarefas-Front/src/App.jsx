import { useState, useEffect } from 'react';

import Todo from './components/ToDo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';

const API_URL = 'http://localhost:3001/tarefas'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text, category) => {
    const newTodo = { text, category, isCompleted: false };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });
      const addedTodo = await response.json();
      setTodos([...todos, addedTodo]);
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };

  const completeTodo = async (id) => {
    const todoToUpdate = todos.find(todo => todo.id === id);
    const updatedTodo = { ...todoToUpdate, isCompleted: !todoToUpdate.isCompleted };
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodo),
      });
      const data = await response.json();
      setTodos(todos.map(todo => todo.id === id ? data : todo));
    } catch (error) {
      console.error('Erro ao completar tarefa:', error);
    }
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
       <TodoForm addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
    
    </div>
  );
}

export default App;