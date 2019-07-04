import React from "react";
import TodoListItem from "./TodoListItem";
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: "All"
    };
    this.changeToAll = this.changeToAll.bind(this);
    this.changeToActive = this.changeToActive.bind(this);
    this.changeToCompleted = this.changeToCompleted.bind(this);
  }

  changeToAll() {
    this.setState({ visibility: "All" });
  }
  changeToActive() {
    this.setState({ visibility: "Active" });
  }
  changeToCompleted() {
    console.log("hit completed");
    this.setState({ visibility: "Completed" });
  }

  getTodoItems = () => {
    let todoItems;
    if (this.state.visibility === "All") {
      todoItems = this.props.items.filter((todoItem, index) => {
        return todoItem;
      });
    } else if (this.state.visibility === "Active") {
      todoItems = this.props.items.filter((todoItem, index) => {
        return todoItem.enabled !== true;
      });
    } else if (this.state.visibility === "Completed") {
      todoItems = this.props.items.filter((todoItem, index) => {
        return todoItem.enabled !== false;
      });
    }
    return todoItems;
  };

  render() {
    const todoItems = this.getTodoItems();

    console.log(this.state.visibility);
    return (
      <div>
        <ul className="display_tasks">
          {todoItems.map(item => (
            <TodoListItem
              key={item.id}
              item={item}
              onDelete={this.props.onDelete}
              onUpdate={this.props.onUpdate}
              onToggle={this.props.onToggle}
            />
          ))}
        </ul>
        <div className="lowerdiv">
          <div>{this.props.items.length + " "}items left </div>
          <div className="r_ldiv">
            <div>
              <a href="#/active" onClick={this.changeToAll} className="lias">
                All
              </a>
            </div>
            <div>
              <a href="#/active" onClick={this.changeToActive} className="lias">
                Active
              </a>
            </div>
            <div>
              <a
                href="#/completed"
                onClick={this.changeToCompleted}
                className="lias"
              >
                Completed
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
