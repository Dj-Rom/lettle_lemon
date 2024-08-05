import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" role="button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" role="button">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" role="button">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" role="button">
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/order_online" role="button">
            Order online
          </Link>
        </li>
        <li>
          <Link to="/login" role="button">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
