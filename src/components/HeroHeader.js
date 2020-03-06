import React from "react"

const HeroHeader = (props) => {
  return (
      <div className="hero-header">
        <div className="hero-img">
          <img src="http://localhost:3000/assets/images/hero4.jpg" alt="Hero Image" />
        </div>
        <div className="hero-caption">
          <h2>Find Your New Friend Today!</h2>
          <p>Welcome to Fluffy Meets Cuddles. The #1 place to find your next best friend. We have a great selection of both cats and dogs that are certified professional cuddlers and ready to fill your home with joy and warmth.</p>
        </div>
      </div>
  )
}

export default HeroHeader