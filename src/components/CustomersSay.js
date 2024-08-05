import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'

import styles from '../styles/components_styles/customers_say.module.scss'
import RatingReview from './RatingReview'
const CustomersSay = () => {
  const ratings = [
    {
      title: 4,
      img: require('../assets/Avatar/Image-60.png'),
      name: 'Emily',
      reviewText: '  Great food and cozy atmosphere. Minor service hiccups.',
    },
    {
      title: 3.5,
      img: require('../assets/Avatar/Image-61.png'),
      name: 'Michael',
      reviewText: '  Decent experience; good food but slow service.',
    },
    {
      title: 4.6,
      img: require('../assets/Avatar/Image-62.png'),
      name: 'Sophia',
      reviewText:
        '  Outstanding in every way—excellent food, service, and ambiance.',
    },
    {
      title: 4.5,
      img: require('../assets/Avatar/Image-63.png'),
      name: 'David',
      reviewText:
        '  Fantastic food and friendly staff. Slight wait, but worth it.',
    },
  ]
  const ratingsList = ratings.map((e) => {
    return (
      <li className={styles.rating_li} key={Math.random()}>
        <img src={e.img} alt={`photo ${e.name}`} />
        <h2>{e.name}</h2>
        <RatingReview className={styles.stars_rating} rating={e.title} />

        <p>
          <ImQuotesLeft /> {e.reviewText}
        </p>
      </li>
    )
  })
  return (
    <section className={styles.customer_say}>
      <h1>Our Guests' Feedback:</h1>
      <ul className={styles.customer_say_ul}>{ratingsList}</ul>
    </section>
  )
}

export default CustomersSay
