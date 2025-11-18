'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Operations?</h2>
          <p className="cta-description">
            Let's discuss how our coding and packing solutions can help your business achieve 
            greater efficiency and success. Get in touch with us today!
          </p>
          <div className="cta-buttons">
            <Link href="#contact" className="btn">Contact Us Now</Link>
            <Link href="#products" className="btn btn-outline">View Our Products</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, var(--primary-red) 0%, #c4161d 100%);
          color: white;
          padding: 100px 0;
        }
        
        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-section .btn {
          background: white;
          color: var(--primary-red);
        }
        
        .cta-section .btn:hover {
          background: #f0f0f0;
        }
        
        .cta-section .btn-outline {
          background: transparent;
          border: 2px solid white;
          color: white;
        }
        
        .cta-section .btn-outline:hover {
          background: white;
          color: var(--primary-red);
        }
        
        @media (max-width: 768px) {
          .cta-title {
            font-size: 2.2rem;
          }
          
          .cta-description {
            font-size: 1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  )
}

