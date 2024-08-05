import React from 'react'
import styles from '../styles/components_styles/specials.module.scss'
import byce_logo from '../assets/icons/buce.svg'
import greekSalad from '../assets/icons/greek salad.jpg'
import bruchetta from '../assets/icons/bruscet.png'
import lemonDessert from '../assets/icons/lemon dessert.jpg'
const data = [
  {
    id: 1,
    image: greekSalad,
    title: 'Greek salad',
    price: '$12.99',
    text: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    image: bruchetta,
    title: 'Bruchetta',
    price: '$5.99',
    text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: 3,
    image: lemonDessert,
    title: 'Lemon Dessert',
    price: '$5.00',
    text: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
]

const Specials = () => {
  return (
    <section className={styles.specials}>
      <div className={styles.group_tittle_and_btn}>
        <h1>This Week's Specials!</h1>
        <button className={styles.menu_button}>Online Menu</button>
      </div>

      <ul className={styles.list_cards}>
        {data.map((card) => (
          <li key={card.id} className={styles.card}>
            <figure>
              <img
                className={styles.img_card}
                src={card.image}
                alt={card.title}
              />
            </figure>
            <header className={styles.header_card}>
              <h3>{card.title}</h3>
              <span>{card.price}</span>
            </header>
            <main>
              <p>{card.text}</p>
            </main>
            <footer className={styles.footer_specials}>
              <a
                className={styles.order_button}
                role="button to order a delivery"
              >
                Order a Delivery
                <img
                  src={byce_logo}
                  alt="Delivery logo"
                  className={styles.delivery_logo}
                />
              </a>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Specials
