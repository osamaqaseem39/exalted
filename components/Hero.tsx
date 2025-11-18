'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            EXALTED
            <span className="hero-subtitle">Coding & Packing Solutions</span>
          </h1>
          <p className="hero-description">
            Professional coding and packing solutions tailored to meet your business needs. 
            Excellence in every package, precision in every code.
          </p>
          <div className="hero-buttons">
            <Link href="#products" className="btn">Explore Products</Link>
            <Link href="#contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          padding-top: 140px;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, rgba(235, 28, 36, 0.05) 0%, transparent 100%);
          z-index: 0;
        }
        
        .hero-content {
          text-align: center;
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        
        .hero-title {
          font-size: 4.5rem;
          font-weight: 700;
          color: var(--text-black);
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          display: block;
          font-size: 1.8rem;
          font-weight: 400;
          color: var(--subheading-gray);
          margin-top: 0.5rem;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: var(--subheading-gray);
          margin: 2rem 0 3rem;
          line-height: 1.8;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.3rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  )
}

