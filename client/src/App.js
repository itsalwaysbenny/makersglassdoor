import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Company from './Company'

import ApiService from './apiService'

// const service = new ApiService
// console.log(service)
// var something = service.getCompany()
// console.log(something)

class App extends Component {
  constructor() {
    super()
    this.service = new ApiService // Mockup data fetch
    console.log(this.service)
    this.data = this.service.getCompany()
    console.log(this.data)
    this.state = {}
  }

  render() {
    return(
      <Company company={this.state} />
    );
  }
}



export default App