import React from 'react'
import style from './Reviews.css'

function Reviews (props) {
  return (
    <div className={style.Reviews}>
      <h2> Reviews </h2>
      <h3>{props.text}</h3>
      <h4>Written By: {props.author}</h4>
      <h4>on {props.date}</h4>
    </div>
  )
}

export default Reviews
