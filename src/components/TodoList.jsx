import React from "react"

const Todolist = ({ todos, onDeleteTodo }) => {

const handleClick = (id) => {
    console.log("clicked", id)
    onDeleteTodo(id)
}





return (
    <>
        <ul className="text-center">
            {todos.map(todo => <li key={todo.id} >{todo.name} <button onClick={() => handleClick(todo.id)}>X</button></li>)}
        </ul>
    </>
)
}

export default Todolist;