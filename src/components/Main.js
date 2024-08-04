import React from 'react'
import { Router, Route, Link, Routes } from 'react-router-dom'
import styles from './../styles/components_styles/main.module.scss'
import HomePage from './pages/HomePage'
import Chicago from './Chicago'
import BookingPage from './pages/BookingPage'
import LoginPage from './pages/LoginPage'
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  )
}

export default Main
