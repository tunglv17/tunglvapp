import React, { useState } from 'react';
import './App.css';
import TodoList from './component/Todo';
import { TypeTodo } from './component/typeTodo';
function App() {
 
   const [todos, setTodos] = useState<TypeTodo[]>([
    { title: "Upload 1099-R to TurboTa",content:"Vietnam" ,complete: true },
    { title: "Submit 2019 tax return",content:"Thailan", complete: false },
    { title: "Print parking passes",content:"Vietnam", complete: false },
    { title: "Look at new plugins edEX Order",content:"Vietnam", complete: true },
    { title: "Respond to catering company",content:"Vietnam", complete: true },
    { title: "Reschedule morning coffee" ,content:"Vietnam", complete: false },
    { title: "Hand sanitizer" ,content:"Vietnam", complete: true },
    { title: "Hand sanitizerhir",content:"Vietnam", complete: true },
   ]);
   const onHandleAdd = (todo: any) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  return (
    <div className="app">
      <TodoList todoList = {todos}
            setTodos = {setTodos}
           onAdd = {onHandleAdd}
           />
    </div>
  );
}

export default App;
