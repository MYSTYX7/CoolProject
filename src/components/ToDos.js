import { Component } from "react";

class Todos extends Component {
  state = {
    addToDoValue: "",
    editTodo: {},
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  };

  render() {
    return <div></div>;
  }
}

export default Todos;
