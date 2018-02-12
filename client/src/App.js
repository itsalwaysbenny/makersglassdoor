import React, { Component } from 'react';
import Company from './Company';
import style from './App.css';

class App extends Component {
  render() {

    return (
      <div className={style.App}>
        <Company name='Makers Academy' size='200' />
      </div>
    );
  }
}

export default App;
