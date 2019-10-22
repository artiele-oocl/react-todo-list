import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo
          };
    }
    render() {
        return (
            <React.Fragment className="TodoItem">
                <input type="checkbox"/>
                <span>{this.state.todo.content}</span>
            </React.Fragment>
        );
    }
}

export default TodoItem;
