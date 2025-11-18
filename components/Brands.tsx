'use client'

import Image from 'next/image'

export default function Brands() {
  const brands = [
    {
      name: 'Markem Imaje',
      country: 'France',
      image: '/images/brand1.png',
    },
    {
      name: 'Altech',
      country: 'Italy',
      image: '/images/brand2.png',
    },
    {
      name: 'Alpha-Pack',
      country: 'China',
      image: '/images/brand3.png',
    },
    {
      name: 'MapleJet',
      country: 'Canada',
      image: '/images/brand4.png',
    },
    {
      name: 'Anser',
      country: 'Taiwan',
      image: '/images/brand5.png',
    },
    {
      name: 'NOW SYSTEMS',
      country: 'Korea',
      image: '/images/brand6.png',
    },
  ]

  return (
    <section id="brands" className="section brands-section">
      <div className="container">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">World-renowned brands we work with</p>
        
        <div className="brands-carousel-wrapper">
          <div className="brands-carousel">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <Image
                  src={brand.image}
                  alt={`${brand.name} Logo`}
                  width={180}
                  height={100}
                  className="brand-image"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`duplicate-${index}`} className="brand-item">
                <Image
                  src={brand.image}
                  alt={`${brand.name} Logo`}
                  width={180}
                  height={100}
                  className="brand-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .brands-section {
          background: var(--bg-white);
        }
        
        .brands-carousel-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 2rem 0;
        }
        
        .brands-carousel {
          display: flex;
          align-items: center;
          gap: 3rem;
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        
        .brands-carousel:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .brand-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 2rem;
          background: white;
          border: 2px solid rgba(235, 28, 36, 0.1);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
          transition: all 0.3s ease;
          height: 150px;
          min-width: fit-content;
        }
        
        .brand-item:hover {
          border-color: var(--primary-red);
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(235, 28, 36, 0.2);
        }
        
        .brand-image {
          height: 100px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .brand-item:hover .brand-image {
          filter: grayscale(0%);
          opacity: 1;
        }
        
        /* Duplicate items for seamless loop */
        .brands-carousel::after {
          content: '';
          display: none;
        }
        
        @media (max-width: 768px) {
          .brands-carousel {
            gap: 2rem;
          }
          
          .brand-item {
            height: 120px;
            padding: 1rem 1.5rem;
          }
          
          .brand-image {
            height: 80px;
          }
        }
      `}</style>
    </section>
  )
}

