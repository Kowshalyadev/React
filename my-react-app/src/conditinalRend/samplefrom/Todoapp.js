import React, { Component } from "react";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], // Stores the list of todos
      newTodo: "" // Stores the input for a new todo
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  // Handles changes in the input field
  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  // Adds a new todo to the list
  addTodo() {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== "") {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: "" // Clear the input field
      });
    }
  }

  // Deletes a todo from the list
  deleteTodo(index) {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((_, i) => i !== index) // Remove the selected todo
    });
  }

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={this.handleChange}
            placeholder="Enter a new todo"
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
