import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <label> {this.props.label}</label>
        <div className="input-style">
          <input>{this.props.children}</input>
        </div>
      </div>
    );
  }
}
export default Input;
