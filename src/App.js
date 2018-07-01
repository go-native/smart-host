import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import SmartForm from './containers/SmartForm';

class App extends Component {
  change(data) {
    console.log(data)
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SmartForm />
        </div>
      </Provider>
    );
  }
}

export default App;
