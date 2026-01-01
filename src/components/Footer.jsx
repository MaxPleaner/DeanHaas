import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Dean Haas</h3>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <div className="footer-label">Services</div>
              <div className="footer-items">
                <div>Nursery</div>
                <div>Landscaping</div>
                <div>Orchids</div>
                <div>Tropical Fruit Trees</div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-label">Contact</div>
              <div className="footer-items">
                <div>(555) 123-4567</div>
                <div>info@deanhaaslandscaping.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dean Haas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
