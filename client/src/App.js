import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res=>res.json())
    .then(users => this.setState({users}));
    }

  render() {
    return (
      <div className="App">
          <h1> Makers GlassDoor App </h1>
      </div>
    );
  }
}

export default App;
