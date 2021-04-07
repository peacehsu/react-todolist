import React,{Component} from 'react';

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.state={value:this.props.id};

        this.removeItem=this.removeItem.bind(this);
    }

    removeItem(id){
        this.props.removeTodo(id);
    }

    render(){
        return(
          <div className="todoWrapper">
            <button className="removeTodo" onClick={()=>{this.removeItem(this.state.value)}}>刪除</button>
            {this.props.todo.text}-{this.props.todo.id}
          </div>
        );
    }
}
export default Todoitem;