import React from 'react';
import Company from './Company'

class CompanyControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {isDisplayed: true};
  }

  render () {
    const isDisplayed = this.state.isDisplayed
    return (
isDisplayed && <Company img='http://assets.makersacademy.com/images/logo/ma-wordmark-red.png' name='Makers Academy' size='200' description='Makers Academy is a fully immersive, full-time computer programming bootcamp, designed to turn people with no knowledge of web development into job-ready junior developers in just 12 weeks' stack='Ruby, Javascript, Rails, TDD, HTML, git'/>
    )
  }
}

export default CompanyControl
