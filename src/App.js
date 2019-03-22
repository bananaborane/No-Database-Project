import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Reset.css';
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          {/* <img src={logo} className="App-logo" alt="logo" width='200' /> */}
          <Main />
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
