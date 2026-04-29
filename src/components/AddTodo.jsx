import React, { useState } from "react";


const AddTodo = () => {

    const [name, setName] = useState("");

    const handlechange = (e) => {
        setName(e.target.value);
        console.log(e);
        
    }


    return (
        <>
            <form>
                <input type="text" name="" id="" onChange={handlechange} value={name} />
                <button>Add</button>
            </form>
            <p>{name}</p>
        </>
    );
}


export default AddTodo;