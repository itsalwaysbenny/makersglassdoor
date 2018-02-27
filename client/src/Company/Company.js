import React from 'react';
import style from './Company.css'


function Company (props) {
  return(
  <div className={style.Company}>

    <div className={style.Img}>
      <img src= {props.img}/>
    </div>

    <div className={style.companyInfo}>
        <h3 className={style.companyName}>{props.name}</h3>
        <h4 className={style.companySize}><span className={style.companySizeHeader}>Tech Team Size</span> <br /> <span className={style.companySizeNumber}>{props.size}</span></h4>
    </div>
      
    <div>
      <p>Description: {props.description}</p>
    </div>

    <div className={style.Stack}>
      <h4>Tech Stack:</h4>
      <h5>{props.stack}</h5>
    </div>
  </div>
  );
}

export default Company
