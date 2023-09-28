import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)
        setValue("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input value={value} type="text" className='todo-input' placeholder="Que faire aujourd'hui" onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Ajouter une tâche</button>
        </form>
    )
}