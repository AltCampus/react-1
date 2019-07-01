import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header">
            <div className="title has-text-centered">
              <h1 className='is-capitalized'>Peoples of GOT</h1>
            </div>
          </div>
        );
    }
}

export default Header;