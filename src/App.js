import { React, useState } from 'react';
import './styles/App.css';
//import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <div className="container">
          <h1>Things To Do</h1>
          <TodoList 
            todos={todos}
            setTodos={setTodos}
          />
          <Form 
            inputText={inputText} 
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
          />
      </div>
    </div>
  );
}

export default App;

/* 
TODO
[]Add Selector to filter 'completed' and 'all'
[]Add Dark/Light Mode 
 */