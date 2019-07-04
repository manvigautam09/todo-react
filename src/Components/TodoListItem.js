import React from "react";
export default class TodoListItem extends React.Component {
  // changeValue() {
  //   const a = this.props.item.delb;
  //   console.log("manvi");
  //   this.setState({ delb: !a });
  // }
  render() {
    console.log(this.props.item);
    return (
      <li className="displayed_fields" key={this.props.item.id}>
        <div className="leftdiv">
          <input
            type="checkbox"
            className="checkboxStyling"
            onChange={e => {
              this.props.onToggle(this.props.item, e);
            }}
            checked={this.props.item.enabled ? true : false}
          />
          <input
            type="text"
            value={this.props.item.text}
            className="tasks_lists"
            onChange={e => {
              this.props.onUpdate(this.props.item, e);
            }}
            style={
              this.props.item.enabled
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          />
        </div>
        <div>
          <button
            onClick={this.props.onDelete.bind(null, this.props.item.id)}
            className="del_button"
            // style={
            //   this.props.item.delb
            //     ? { display: "visible" }
            //     : { display: "none" }
            // }
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>
      </li>
    );
  }
}
