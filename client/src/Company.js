import React from 'react'
import ReactDOM from 'react-dom'

function Company (props) {
  return(
    <div>
      <div className='company-info'>
        <img />
        <p>{console.log(props)}</p>
        <h3>{props.company.title}</h3>
        <h4>{props.company.size}</h4>
      </div>
      <div>
        <h4>Tech Stack</h4>
      </div>
    </div>
  );
} 



export default Company