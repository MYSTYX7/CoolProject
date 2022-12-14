import { Component } from "react";
import ToDos from "./components/AddToDo";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDo App in ReactJS</h1>
        <ToDos />
      </div>
    );
  }
}

export default App;
