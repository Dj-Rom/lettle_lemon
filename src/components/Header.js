import React from 'react'
import { ReactComponent as Logo } from './../assets/icons/Logo.svg' // Import SVG as a React component
import Nav from './Nav'
import styles from './../styles/components_styles/header.module.scss'
const Header = () => {
  return (
    <header>
      <Logo className="header-logo" /> {/* Use the SVG component */}
      <Nav />
    </header>
  )
}

export default Header
