import React, { Component } from "react";

class Option extends Component {
  render() {
    return (
      <div>
        <label> {this.props.label}</label>
        <div className="select-style">
          <select>{this.props.children}</select>
        </div>
      </div>
    );
  }
}
export default Option;
