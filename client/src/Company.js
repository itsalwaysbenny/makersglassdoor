import React from 'react';
import style from './Company.css'
function Company (props) {
  return(
  <div>
    <div className={style.Img}>
      <img src= {props.img}/>
    </div>
    <div className={style.Company}>
      <h3>Company Name: {props.name}</h3>
      <h4>Company Size: {props.size}</h4>
    </div>
  </div>
  );
}

export default Company
