import { Component } from "react";

class Addtodo extends Component {
  state = {
    defaultValue: "",
    value: this.props.addToDoValue, //""
  };

  myTodoFunction = (event) => {
    this.setState({ value: event.target.value });
  };

  mySubmitFunction = (event) => {
    event.preventDefault();
    this.props.myAddToDo(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.mySubmitFunction}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputtext"
              placeholder="ToDo"
              onChange={this.myTodoFunction}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add TODO
          </button>
        </form>
      </div>
    );
  }
}

export default Addtodo;
