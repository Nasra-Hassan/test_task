import React, { useState } from 'react';
import './App.css'
import Todolist from './components/TodoList';
import Button from './components/AddTodo';
import AddTodo from './components/AddTodo';


function App() {


  const [todos, setTodos] = useState([
    { id: 1, name: "Go grocery shopping" },
    { id: 2, name: "Go to movies" },
    { id: 3, name: "Clean up" },
    { id: 4, name: "Go for a check up" },
    { id: 5, name: "Take the dog to the vet" }
  ])

  const deleteTodo = (id) => {
    let newTodos = todos.filter(todo => todo.id != id)
    console.log("newTodos", newTodos);
    setTodos(newTodos)
  }


  return (
    <>
      <h1>Todo Application</h1>
      <AddTodo />

      <hr />

      {todos.length > 0 ?  <Todolist todos={ todos } onDeleteTodo={deleteTodo} /> : <p>No Todos for you today</p> }
    </>
  );
}

export default App
