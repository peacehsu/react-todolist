import React from 'react';

class Todobar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: this.props.todoText || ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    addTodo(todoText){
        if(todoText.length >0){
            this.props.addTodo(todoText);
            this.setState({value:''});
        }
    }

    render(){
        return(
        <div className="search-bar">
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>新增</button>
        </div>
        );
    }
}
export default Todobar;