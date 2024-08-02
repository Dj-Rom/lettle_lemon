import React from 'react'
import { ReactComponent as Logo } from './../assets/icons/Logo.svg' // Import SVG as a React component
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <Logo className="header-logo" /> {/* Use the SVG component */}
      <Nav />
    </header>
  )
}

export default Header
