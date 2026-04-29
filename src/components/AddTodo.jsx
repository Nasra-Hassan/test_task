import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
    const [name, setName] = useState("");

const handlechange = (e) => {
    setName(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") return;

    onAddTodo(name);
    setName("");
};

return (
    <>
        <form className="text-center border{[1px]}" onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handlechange}
                value={name}
                placeholder="Enter a task"
            />
            <button className="bg-gray-500" type="submit">Add</button>
        </form>
    </>
);
}

export default AddTodo;

