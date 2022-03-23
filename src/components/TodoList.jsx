import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos}) => {
    return(
        <div>
            <ul>
                {
                    todos.map((todo) => (
                        <TodoItem 
                            text={todo.text}
                            key={todo.id}
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;