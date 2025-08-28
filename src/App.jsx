import { useState, useEffect } from 'react'; // Adicione useEffect aqui

import Todo from './components/ToDo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';

import initialTodos from './/data/tarefas.json'; // Importe o JSON inicial aqui

function App() {
  // Inicialize o estado com um array vazio. Vamos carregar do localStorage depois.
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // useEffect para CARREGAR as tarefas do localStorage quando o app inicia
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos'); // Pega o item 'todos' do localStorage
    if (storedTodos) {
      // Se existir, converte de JSON para array e atualiza o estado
      setTodos(JSON.parse(storedTodos));
    } else {
      // Se não existir (primeira vez), usa o array inicial do tarefas.json
      setTodos(initialTodos);
    }
  }, []); // [] significa que roda só uma vez, no início

  // useEffect para SALVAR as tarefas no localStorage toda vez que 'todos' mudar
  useEffect(() => {
    if (todos.length > 0) { // Só salva se houver tarefas (evita salvar vazio no início)
      localStorage.setItem('todos', JSON.stringify(todos)); // Converte para JSON e salva
    }
  }, [todos]); // Roda toda vez que 'todos' é atualizado

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000), // Gera ID aleatório
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos); // Atualiza estado (e o useEffect salva automaticamente)
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id); // Filtra removendo o ID
    setTodos(newTodos); // Atualiza (salva auto)
  };

  const completeTodo = (id) => {
    const newTodos = todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ); // Corrigi para usar === e retornar um novo objeto
    setTodos(newTodos); // Atualiza (salva auto)
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())) // Corrigi toLocaleLowerCase para toLowerCase (simples)
          .sort((a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;