const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors'); 

const app = express();
const PORT = 3001;
const FILE_PATH = path.join(__dirname, 'tarefas.json');

app.use(express.json());
app.use(cors()); 

const readTodos = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeTodos = async (todos) => {
  await fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2));
};

app.get('/tarefas', async (req, res) => {
  const todos = await readTodos();
  res.json(todos);
});

app.post('/tarefas', async (req, res) => {
  const newTodo = req.body;
  const todos = await readTodos();
  newTodo.id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  todos.push(newTodo);
  await writeTodos(todos);
  res.status(201).json(newTodo);
});

app.put('/tarefas/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const todos = await readTodos();
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    await writeTodos(todos);
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

app.delete('/tarefas/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const todos = await readTodos();
  const newTodos = todos.filter((t) => t.id !== id);
  await writeTodos(newTodos);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});