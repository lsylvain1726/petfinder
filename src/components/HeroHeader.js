import React from "react"

const HeroHeader = (props) => {
  return (
      <div className="hero-header">
        <div className="hero-img">
          <img src="http://localhost:3000/assets/images/hero4.jpg" alt="Hero Image" />
        </div>
        <div className="hero-caption">
          <h2>Find Your New Friend Today!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
  )
}

export default HeroHeader