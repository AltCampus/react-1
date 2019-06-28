import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let { label, type, size, clickHandler} = this.props;
         let classes = [label, type, size].join(' ')
        return (
            <button className = {classes} onClick = {clickHandler}>{label || 'button'}</button>
        );
    }
}

export default Button;