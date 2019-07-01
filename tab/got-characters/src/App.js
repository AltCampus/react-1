import React, { Component } from "react";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import HouseView from "./components/HouseView";
import DisplayCards from "./components/DIsplayCards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedTab: 0
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json"
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  handleClick = tab => {
    this.setState({ selectedTab: tab });
  };

  render() {
    return (
      <>
        <div className="container">
          <Header />
          <HouseView
            housenames={this.state.data.houses}
            handleClick={this.handleClick}
            activeTab={this.state.selectedTab}
          />
          <div className="columns is-multiline">
            {this.state.data.houses &&
              this.state.data.houses[this.state.selectedTab].people.map(character => (
                <DisplayCards {...character} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
