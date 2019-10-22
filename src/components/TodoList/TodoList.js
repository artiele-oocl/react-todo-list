import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: this.props.todoList,
          };
    }
    renderTodoList = () => {
        let out = [];
        for (let index = 0; index < this.state.todoList.length; index++) {
            out.push(
            <li key={index}>
                {<TodoItem todo={this.state.todoList[index]}/>}
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
