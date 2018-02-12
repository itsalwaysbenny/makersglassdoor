import React from 'react'

function Reviews (props) {
  return (
    <div>
      <h3>{props.text}</h3>
      <h4>Written By: {props.author}</h4>
      <h4>on {props.date}</h4>
    </div>
  )
}

export default Reviews
