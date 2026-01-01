import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-image">
        <img src="/placeholder.webp" alt="Nursery Collection" className="hero-img" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Landscaping & Gardening</h1>
        <p className="hero-subtitle">
          Specializing in tropical plants, orchids, and fruit trees
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Get in Touch
        </button>
      </div>
    </section>
  )
}

export default Hero
