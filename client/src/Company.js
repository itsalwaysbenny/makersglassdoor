import React from 'react';

function Company (props) {
  return(
    <div>
      <div>
        <img src="http://assets.makersacademy.com/images/logo/ma-wordmark-red.png"/>
        <h3>{props.name}</h3>
        <h4>{props.size}</h4>
      </div>
    </div>
  );
}

export default Company
