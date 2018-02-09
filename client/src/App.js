import React, { Component } from 'react';
import Company from './Company';
import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Company name='Makers Academy' size='200' />
      </div>
    );
  }
}

export default App;
