import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import "./App.css";

const App = () => (
  <div className="todo-wrapper">
    <div className="title">
      React Todo List
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App