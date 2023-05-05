import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <h1>header</h1>
        <Link to="questions">start exam</Link>
        <Outlet/>
    </div>
  )
}
