import React, { Component } from 'react';
import SmartForm from './components/SmartForm';

class App extends Component {
  change(data) {
    console.log(data)
  }
  render() {
    return (
      <div className="App">
        <SmartForm onChange={this.change}/>
      </div>
    );
  }
}

export default App;
