import React,{Component} from "react";
import './App.css';
import Todobar from "./components/Todobar";
import Todoitem from "./components/Todoitem";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[],
      nextId: 0
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }
  

  render(){
    return (
      <div className="App">
        <div className="todo-wrapper">
          <div className="title">
            React Todo List
          </div>
          <Todobar todoText="" addTodo={this.addTodo}/>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <Todoitem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      
      </div>
    );
  }
}

export default App;
