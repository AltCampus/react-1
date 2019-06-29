import React, { Component } from "react";

class HouseView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <>
        <div className="tabs is-toggle is-centered">
          <ul>
            {this.props.housenames &&
              this.props.housenames.map((house, i) => {
                return (
                  <li className={i === this.props.activeTab ? "is-active" : ""}>
                    <a href='_blank'>
                      <span onClick={() => this.props.handleClick(i)}>
                        {house.name}
                      </span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

export default HouseView;
