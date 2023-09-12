import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

const HeaderCompnent = () => {
  return (
    <div className="headSection">
       <Link to="/home" className="link"> Home</Link>
          <Link  to="/companies" className="link">Companies</Link>
          <Link to="/showAllPersons" className="link">Show All Persons</Link>
          <Link to="/profile" className="link">Profile</Link>
    </div>
  )
}

export default HeaderCompnent
