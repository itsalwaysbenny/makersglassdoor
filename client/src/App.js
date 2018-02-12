import React, { Component } from 'react';
import Company from './Company';
import Reviews from './Reviews';
import Homepage from './Homepage';
import style from './App.css'


class App extends Component {
  render() {

    return (
    <div>
      // <div>
      //   <Company img="http://assets.makersacademy.com/images/logo/ma-wordmark-red.png" name='Makers Academy' size='200' />
      // </div>
      // <div className={style.App}>
      // <h2> Reviews </h2>
      //   <Reviews text= "This is a review. Well it's more like the text of a review, the Review Text if you will. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada ornare feugiat. Vivamus sit amet metus et nunc tempor tristique vel nec massa. Morbi vulputate mauris vitae lacus fermentum dictum. Cras commodo gravida arcu quis sollicitudin. Quisque cursus ex quis neque lobortis congue sed id lacus. Nulla consectetur consequat eros id fringilla. In ut justo porttitor, euismod lacus a, mollis urna. Maecenas a dui eget enim consectetur sodales id at ligula. Mauris molestie tempus lacus, vel vehicula sapien. Praesent eu mauris vel ex convallis rutrum. Maecenas in euismod turpis. Proin eu ante pulvinar, cursus ex in, tristique justo. Nam interdum." author = "Bertie" date = '31/12/1992' />
      // </div>
      <div><Homepage /></div>
    </div>

    );
  }
}

export default App;
