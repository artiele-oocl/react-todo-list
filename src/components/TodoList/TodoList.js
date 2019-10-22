import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: this.props.todoList,
          };
    }
    toggleCheck = (todo) => {
        console.log(this.state.todo)
        return this.setState({
            status: !(this.state.todo.status)
        });
    }
    renderTodoList = () => {
        let out = [];
        for (let index = 0; index < this.state.todoList.length; index++) {
            let curr = this.state.todoList[index];
            out.push(
            <li key={index}>
                {<TodoItem todo={curr} toggleCheck={this.toggleCheck(curr)}/>}
            </li>);
        }
        return out;
    }
    render() {
        return (
            <div className="Todo">
               {this.renderTodoList()}
            </div>
        );
    }
}

export default TodoList;
