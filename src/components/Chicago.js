import React from 'react'
import styles from '../styles/chicago.module.scss'
const Chicago = () => {
  return (
    <section className={styles.our_story}>
      <div className={styles.our_story_contant}>
        <h1>Our story</h1>
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <span>
          Little Lemon began with a simple yet passionate idea: to bring a slice
          of warmth and a dash of zest to the heart of Chicago. What started as
          a dream in a small kitchen quickly grew into a beloved spot for locals
          and visitors alike.
        </span>
        <span>
          Our journey began when a group of friends, united by their love for
          fresh ingredients and vibrant flavors, decided to turn their culinary
          dreams into reality. They envisioned a place where every meal would be
          a celebration of flavor, community, and joy.
        </span>
        <p>
          In the bustling streets of Chicago, Little Lemon opened its doors with
          a menu inspired by the essence of good food and great company. We took
          pride in using locally sourced ingredients, crafting dishes that are
          as wholesome as they are delicious. From our tangy lemon-infused
          dishes to our warm, welcoming atmosphere, every detail was designed to
          make you feel right at home.
        </p>
        <p>
          As we continue to grow and evolve, our mission remains unchanged: to
          create memorable dining experiences that bring a smile to your face
          and a burst of flavor to your palate. At Little Lemon, every meal is a
          celebration of the vibrant spirit of Chicago and the joy of sharing
          good food with good friends.
        </p>
        <p>
          Welcome to Little Lemon. Here’s to great food, great company, and the
          little moments that make life truly special.
        </p>
      </div>
      <figure className={styles.our_story_photos}>
        <img
          role="photo Mario and Adrian"
          className={styles.our_story_photos_1}
        />
        <img
          role="photo Mario and Adrian"
          className={styles.our_story_photos_2}
        />
      </figure>
    </section>
  )
}

export default Chicago
