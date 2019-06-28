import React, { Component } from "react";

class Button extends Component {
  render() {
    let { label, type, size, clickHandler, shape } = this.props;
    let classes = [label, type, size, shape].join(" ");
    return (
      <button className={classes} onClick={clickHandler}>
        {label || "Button"}
      </button>
    );
  }
}

export default Button;
