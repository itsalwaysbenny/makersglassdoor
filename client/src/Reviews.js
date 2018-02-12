import React from 'react'

function Reviews (props) {
  return (
    <div>
      <h3>{props.text}</h3>
      <h4>{props.author}</h4>
      <h5>{props.date}</h5>
    </div>
  )
}

export default Reviews
