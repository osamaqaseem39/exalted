'use client'

import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with our team today</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#eb1c24"/>
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>123 Business Street<br />Industrial District<br />City, State 12345</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#eb1c24"/>
                </svg>
              </div>
              <div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:04235222517">042-35222517</a><br />
                  <a href="tel:+923028426797">+923028426797</a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#eb1c24"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@exalted.com.pk">info@exalted.com.pk</a>
                </p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          background: #f8f8f8;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .info-item {
          display: flex;
          gap: 1.5rem;
        }
        
        .info-icon {
          width: 50px;
          height: 50px;
          background: rgba(235, 28, 36, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .info-item h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-black);
          margin-bottom: 0.5rem;
        }
        
        .info-item p {
          color: var(--subheading-gray);
          line-height: 1.8;
        }
        
        .info-item p a {
          color: var(--subheading-gray) !important;
          text-decoration: none !important;
          transition: color 0.3s ease;
          font-weight: 500;
        }
        
        .info-item p a:hover {
          color: var(--primary-red) !important;
        }
        
        .info-item p a:visited {
          color: var(--subheading-gray) !important;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
          width: 100%;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid rgba(235, 28, 36, 0.2);
          background: white;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          color: var(--text-black);
          transition: border-color 0.3s ease;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-red);
        }
        
        .form-group textarea {
          resize: vertical;
        }
        
        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  )
}

