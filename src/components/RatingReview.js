import React from 'react'

const RatingReview = ({ className, rating }) => {
  const totalStars = 5

  // Function to render stars
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= totalStars; i++) {
      let starStyle = {}
      if (i <= Math.floor(rating)) {
        starStyle = { color: 'gold' }
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        starStyle = {
          background: `linear-gradient(to right, gold ${
            (rating % 1) * 100
          }%, gray ${(rating % 1) * 100}%)`,
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        }
      } else {
        starStyle = { color: 'gray' }
      }

      stars.push(
        <span
          key={i}
          style={{
            display: 'inline-block',
            fontSize: '25px',
            marginRight: '2px',
            position: 'relative',
            ...starStyle,
          }}
        >
          ★
        </span>
      )
    }
    return stars
  }

  return <div className={className}>{renderStars()}</div>
}

export default RatingReview
