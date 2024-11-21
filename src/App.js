import './App.css';
import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {
 
  const [todos,setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ])
  
  return (
    <div>
        <h1>ToDoList</h1>
      <div className='root'>
        <div>
          <TodoForm onAdd={(text) => {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                isCompleted: false
              }
            ])
          }}/>
          <TodoList 
            todos={todos} 
            onChange={(newTodo) => {
              setTodos(todos.map((todo) => {
                if(todo.id === newTodo.id){
                  return newTodo;
                }
                return todo;
              }));
            }}
            onDelete={(todo) => {
              setTodos(todos.filter((t) => t.id !== todo.id))
            }}
          />
          <TodoFooter todos={todos} onClearCompleted={() => {
            setTodos(todos.filter((todo) => !todo.isCompleted));
          }}/> 
        </div>
      </div>
    </div>
  )
}

export default App;
