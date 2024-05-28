import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <Link className="navbar-brand" href="#">Book Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
        </Link>
        <Link className="nav-item">
          <Link className="nav-link active" to ="/books"> Books</Link>
        </Link>
        <Link className="nav-item">
          <Link className="nav-link active" to ="/addBooks">Add Books</Link>
        </Link>
        </ul>
        
          
        
     
    </div>
  </div>
</nav>
      
    </div>
  )
}
