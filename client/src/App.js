import React, { Component } from 'react';
import Company from './Company';


class App extends Component {

    state = {companies: []}

    componentDidMount() {
        fetch('/companies')
            .then(res => res.json())
            .then(companies => this.setState({ companies }));
    }

  render() {

    return (
      <div>

          {this.state.companies.map(company =>
              <Company img="http://assets.makersacademy.com/images/logo/ma-wordmark-red.png"  name={company.name} size='40' />
          )}

      </div>
    );
  }
}

export default App;
