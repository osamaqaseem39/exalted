'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link href="/" className="footer-logo-link">
              <Image 
                src="/images/logo.png" 
                alt="EXALTED Logo" 
                width={150} 
                height={50}
                className="footer-logo-image"
              />
            </Link>
            <p className="footer-description">
              Professional coding and packing solutions for your business needs. 
              Excellence in every package, precision in every code.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#products">Products</Link></li>
              <li><Link href="#why-choose-us">Why Choose Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="#products">Coding Systems</Link></li>
              <li><Link href="#products">Packing Solutions</Link></li>
              <li><Link href="#products">Quality Control</Link></li>
              <li><Link href="#products">Consulting</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li><strong>Call Us</strong></li>
              <li><a href="tel:04235222517">042-35222517</a></li>
              <li><a href="tel:+923028426797">+923028426797</a></li>
              <li><a href="mailto:info@exalted.com.pk">info@exalted.com.pk</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EXALTED. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(--text-black);
          color: white;
          padding: 4rem 0 2rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-logo-link {
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .footer-logo-image {
          height: auto;
          width: auto;
          max-height: 50px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        
        .footer-description {
          color: var(--subheading-gray);
          line-height: 1.7;
        }
        
        .footer-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: var(--subheading-gray) !important;
          text-decoration: none !important;
          transition: color 0.3s ease;
          font-weight: 400;
        }
        
        .footer-links a:hover {
          color: var(--primary-red) !important;
        }
        
        .footer-links a:visited {
          color: var(--subheading-gray) !important;
        }
        
        .footer-contact {
          list-style: none;
          padding: 0;
          color: var(--subheading-gray);
          line-height: 1.8;
        }
        
        .footer-contact li strong {
          color: white;
          font-weight: 600;
        }
        
        .footer-contact a {
          color: var(--subheading-gray) !important;
          text-decoration: none !important;
          transition: color 0.3s ease;
          font-weight: 400;
        }
        
        .footer-contact a:hover {
          color: var(--primary-red) !important;
        }
        
        .footer-contact a:visited {
          color: var(--subheading-gray) !important;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--subheading-gray);
        }
        
        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  )
}

