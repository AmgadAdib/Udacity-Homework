import React from 'react';

class TodoItem extends React.Component {


  render() {
    const { id, text, completed } = this.props.todo;
    return (
      <li>
        <small>{id}</small>
        <header>
          <h1>{text}</h1>
        </header>
        <div>{completed.toString()}</div>
        <input type="checkbox" checked={completed}/>
      </li>
    );
  }
}
export default TodoItem;
