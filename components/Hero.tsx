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
          background-image: url('/images/herobg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding-top: 140px;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
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
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .hero-subtitle {
          display: block;
          font-size: 1.8rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 0.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.95);
          margin: 2rem 0 3rem;
          line-height: 1.8;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
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

