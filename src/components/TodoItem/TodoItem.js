import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            toggleCheck: this.props.toggleCheck
          };
    }
    render() {
        return (
            <React.Fragment>
                <input type="checkbox"/>
                <span>{this.state.todo.content}</span>
                <span>{this.state.todo.status}</span>
            </React.Fragment>
        );
    }
}

export default TodoItem;
