'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href="tel:04235222517" className="top-bar-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                <span>042-35222517</span>
              </a>
              <a href="tel:+923028426797" className="top-bar-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="currentColor"/>
                </svg>
                <span>+923028426797</span>
              </a>
              <a href="mailto:info@exalted.com.pk" className="top-bar-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <span>info@exalted.com.pk</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-text">Professional Coding & Packing Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link href="/" className="logo">
              <Image 
                src="/images/logo.png" 
                alt="EXALTED Logo" 
                width={150} 
                height={50}
                className="logo-image"
                priority
              />
            </Link>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
              <li><Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li><Link href="#brands" onClick={() => setIsMobileMenuOpen(false)}>Brands</Link></li>
              <li><Link href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
              <li><Link href="#why-choose-us" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</Link></li>
              <li><Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link></li>
              <li><Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
        }
        
        .top-bar {
          background: var(--primary-red);
          color: white;
          padding: 0.6rem 0;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .top-bar-left {
          display: flex;
          gap: 2rem;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white !important;
          text-decoration: none !important;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .top-bar-item:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        
        .top-bar-item:visited {
          color: white !important;
        }
        
        .top-bar-item svg {
          flex-shrink: 0;
        }
        
        .top-bar-item span {
          text-decoration: none !important;
        }
        
        .top-bar-right {
          display: flex;
          align-items: center;
        }
        
        .top-bar-text {
          font-weight: 500;
          font-size: 0.85rem;
          opacity: 0.95;
        }
        
        .navbar {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .navbar.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 0;
        }
        
        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          height: 50px;
        }
        
        .logo-image {
          height: auto;
          width: auto;
          max-height: 50px;
          object-fit: contain;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-links li a {
          color: var(--text-black) !important;
          text-decoration: none !important;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          letter-spacing: 0.3px;
        }
        
        .nav-links li a:hover {
          color: var(--primary-red) !important;
        }
        
        .nav-links li a:visited {
          color: var(--text-black) !important;
        }
        
        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: var(--primary-red);
          transition: width 0.3s ease;
          clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px));
        }
        
        .nav-links li a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }
        
        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background-color: var(--text-black);
          transition: all 0.3s ease;
        }
        
        @media (max-width: 968px) {
          .top-bar-content {
            justify-content: center;
            text-align: center;
          }
          
          .top-bar-left {
            justify-content: center;
            gap: 1rem;
          }
          
          .top-bar-right {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .top-bar {
            padding: 0.5rem 0;
            font-size: 0.8rem;
          }
          
          .top-bar-left {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }
          
          .top-bar-item {
            font-size: 0.75rem;
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
          
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </header>
  )
}

