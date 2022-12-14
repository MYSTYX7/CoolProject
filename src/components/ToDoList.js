import { Component } from "react";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <p>{this.props.tododata}</p>
      </div>
    );
  }
}

export default ToDoList;
