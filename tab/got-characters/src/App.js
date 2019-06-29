import React, { Component } from "react";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import HouseView from "./components/HouseView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedTab: 0
    };
  }
  handleClick = tab => {
    this.setState({ selectedTab: tab });
  };
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json"
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }
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
        </div>
      </>
    );
  }
}

export default App;
