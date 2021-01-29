import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '',
      previous: []
    };
  }

  render() {
    return (
      <div className="App">
        <input className="result" type="text" value={this.state.current} />
      </div>
    );
  }
}

export default App;
