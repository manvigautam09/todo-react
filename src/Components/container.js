import React from "react";

import TodoList from "./TodoList";
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now(),
      enabled: false
      //delb: false
    };

    this.setState(state => ({
      items: [...this.state.items, newItem],
      text: ""
    }));
  }

  onDelete = itemId => {
    const todoItems = this.state.items.slice();
    const updatedTodoItems = todoItems.filter((todoItem, index) => {
      return todoItem.id !== itemId;
    });

    this.setState({ items: updatedTodoItems });
  };

  onUpdate(item, e) {
    let updatedItems;
    console.log(e.target.value);
    updatedItems = [...this.state.items];
    updatedItems.forEach((todoItem, i) => {
      if (todoItem.id === item.id) {
        todoItem.text = e.target.value;
      }
    });

    console.log(this.state.items);
    this.setState({
      items: updatedItems
    });

    console.log(this.state.items);
  }
  onToggle = (item, e) => {
    console.log(item, e, "onToggle Hit");
    let todos;
    todos = [...this.state.items];
    todos.forEach((todoItem, i) => {
      if (todoItem.id === item.id) {
        todoItem.enabled = !todoItem.enabled;
      }
    });
    this.setState({ items: todos });
  };
  render() {
    return (
      <div className="todobox">
        <div className="input_tasks">
          <form onSubmit={this.handleSubmit} className="form_css">
            <input
              className="box"
              type="text"
              placeholder="What to do???"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <TodoList
          items={this.state.items}
          onDelete={this.onDelete}
          onUpdate={this.onUpdate}
          onToggle={this.onToggle}
        />
      </div>
    );
  }
}
