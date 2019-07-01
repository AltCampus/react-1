import React, { Component } from "react";
import DisplayCards from './DIsplayCards';

class CharacterView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="columns is-multiline">
          {this.state.data.houses &&
            this.state.data.houses[this.state.activeTab].people.map(d => (
              <DisplayCards {...d} />
            ))}
        </div>
      </>
    );
  }
}

export default CharacterView;
