import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fetchedData : [],
      selectedTab: null
     };
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <div className="title has-text-centered">
              <h1>Peoples of GOT</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;