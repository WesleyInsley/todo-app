import React from 'react';

const TodoItem = ({text, todo, todos, setTodos}) => {

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...todo, completed: !item.completed
                }
            }
            return item
        }))
    }

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id != todo.id))
    }

    return(
        <div>
            <li className={`todo-item ${todo.completed ? "todo-item-completed" : ""}`}>
                {text} 
            <button onClick={completeHandler}><i className="fa-solid fa-check"></i></button>
            <button onClick={deleteHandler}><i className="fa-solid fa-trash"></i></button>
            </li>
        </div>
    )
}

export default TodoItem;