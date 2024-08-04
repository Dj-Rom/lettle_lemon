import React from 'react'
import { Link } from 'react-router-dom'
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
} from 'react-icons/sl'
import { BsTwitterX } from 'react-icons/bs'
import Nav from './Nav'
import logo from './../assets/icons/logo_footer.png'
import styles from '../styles/components_styles/footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer_page}>
      <img src={logo} className={styles.footer_page_logo} />
      <section className={styles.footer_nav}>
        <h3>Site Map</h3>
        <Nav />
      </section>
      <section className={styles.footer_contact}>
        <ul className={styles.footer_contact_ul}>
          <h3>Contact</h3>
          <li>
            <Link to="/adress">Adress</Link>
          </li>
          <li>
            <a href="malto:alehkapusta@gmail.com">Email</a>
          </li>
          <li>
            <a href="tel:000000000000000">phone number</a>
          </li>
        </ul>
      </section>
      <section className={styles.footer_social}>
        <ul className={styles.footer_social_ul}>
          <h3>Social media</h3>
          <li>
            <a href="https://www.youtube.com/">
              <SlSocialYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <SlSocialFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <SlSocialInstagram />
            </a>
          </li>
          <li>
            <a href="https://x.com/">
              <BsTwitterX />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
