import React, { Component } from 'react';
import Company from './Company';
import Reviews from './Reviews'


class App extends Component {
  render() {

    return (
    <div>
      <div>
        <Company img="http://assets.makersacademy.com/images/logo/ma-wordmark-red.png" name='Makers Academy' size='200' />
      </div>
      <div>
        <Reviews text= "This is a review" author = "Author" date = 'Date' />
      </div>
    </div>

    );
  }
}

export default App;
