import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/placeholder.webp" alt="About Dean Haas" className="about-img" />
        </div>
        <div className="about-content">
          <h2 className="section-title">About</h2>
          <div className="about-text">
            <p>
              With years of experience in landscaping, gardening, and horticulture, 
              Dean Haas brings a passion for tropical plants and expert knowledge to 
              every project. Specializing in orchids and tropical fruit trees, Dean 
              combines traditional gardening wisdom with modern techniques to create 
              stunning outdoor spaces.
            </p>
            <p>
              Whether you're looking to establish a beautiful landscape, add tropical 
              fruit trees to your property, or care for delicate orchids, Dean provides 
              personalized service and expert guidance. From nursery selection to 
              complete contractor installations, every project is handled with care 
              and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
