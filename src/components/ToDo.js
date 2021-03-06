import React from 'react';

class Todo extends React.Component{
  render () {
    return(
      <li className="list-group-item d-flex align-items-center">
          {this.props.task.name}
          <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
      </li>
    )
  }
}

export default Todo
