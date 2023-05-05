import React from 'react'
import { Link } from 'react-router-dom'
export default function MovieCard(props) {
  return (
    <Link to={`${props.id}`}>
    <div>
      <p>{props.title}</p>
    </div>
    </Link>
  )
}
