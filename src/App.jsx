import React, { useState } from 'react';
import './App.css';
import Todolist from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Go grocery shopping" },
    { id: 2, name: "Go to movies" },
    { id: 3, name: "Clean up" },
    { id: 4, name: "Go for a check up" },
    { id: 5, name: "Take the dog to the vet" }
  ]);

  const deleteTodo = (id) => {
    let newTodos = todos.filter(todo => todo.id !== id);
    console.log("newTodos", newTodos);
    setTodos(newTodos);
  };

  const addTodo = (taskName) => {
    const newTask = {
      id: Date.now(), //Used to Create Differnt Id's using the curent Date
      name: taskName
    };

// 2. Spread the existing todos and append the new task
setTodos([...todos, newTask]);
  };

  return (
    <>
      <h1 className='text-bold text-center'>To Do List: </h1>
      <AddTodo onAddTodo={addTodo} />

  <hr />

  {todos.length > 0 ? (
    <Todolist todos={todos} onDeleteTodo={deleteTodo} />
  ) : (
    <p>No Todos for you today</p>
  )}
</>
  );
}

export default App;

