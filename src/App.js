import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import SubscribeModal from './components/SubscribeModal'

class App extends Component {
  constructor() {
    super()
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);

    this.state = {
      open: false
    }

  }

  handleClickOpen() { this.setState({open: true});}

  handleClose() { this.setState({open: false});}

  render() {
    return (
      <div className="App">
        <SubscribeModal open={true}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
