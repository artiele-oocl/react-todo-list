import React from 'react';
import TodoList from '../TodoList/TodoList';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            inputValue: ''
        };
    }
    handleInputchange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    addTodo = (e) => {
        e.preventDefault();
        this.state.todoList.push({
            content: this.state.inputValue,
            status: 0
        });
        this.setState({inputValue: ''});
    }
    render() {
        return (
            <div className="Todo">
                <input type="text" onChange={this.handleInputchange}></input>
                <button type="submit" onClick={this.addTodo}>Add</button>
                <TodoList todoList={this.state.todoList}/>
            </div>
        );
    }
}

export default Todo;
