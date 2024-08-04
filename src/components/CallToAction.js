import React from 'react'
import styles from '../styles/components_styles/call_to_action.module.scss'
import restaurantFoodImg from '../assets/icons/restauranfood.jpg'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/booking')
  }
  return (
    <article className={styles.article_call_to_action}>
      <section className={styles.section_call_to_action}>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          className={styles.reserve_a_table}
          onClick={() => {
            handleClick()
          }}
          role="reserve a Table"
        >
          Reserve a Table
        </button>
      </section>
      <figure className={styles.rest_food_figure}>
        <img
          className={styles.rest_food_img}
          src={restaurantFoodImg}
          alt="Restaurant food"
        />
      </figure>
    </article>
  )
}

export default CallToAction
