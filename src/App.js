import React, { Component } from 'react';

import './App.css';

import SubscribeModal from './components/SubscribeModal'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SubscribeModal/>
        </header>
      </div>
    );
  }
}

export default App;
