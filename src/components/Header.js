import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='container bg-primary'>
         <Link className='bg-warning' to="movies">Movies</Link>
        <h1>Director:</h1>
    </div>
  )
}
