import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      title: 'Nursery',
      description: 'Premium selection of tropical plants, fruit trees, and orchids with expert consultation.',
      image: 'nursery'
    },
    {
      title: 'Landscaping',
      description: 'Complete landscape design and installation services for residential and commercial properties.',
      image: 'landscaping'
    },
    {
      title: 'Orchids',
      description: 'Specialized knowledge in orchid care, selection, and cultivation for enthusiasts and collectors.',
      image: 'orchids'
    },
    {
      title: 'Tropical Fruit Trees',
      description: 'Expert care for tropical fruit trees including mango, avocado, citrus, and exotic varieties.',
      image: 'tropical'
    },
    {
      title: 'Gardening',
      description: 'Professional gardening and maintenance services to keep your plants healthy year-round.',
      image: 'gardening'
    },
    {
      title: 'Contractor Work',
      description: 'Full-service contractor work including irrigation, lighting, and hardscaping installations.',
      image: 'contractor'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={`${import.meta.env.BASE_URL}placeholder.webp`} alt={service.title} className="service-img" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
