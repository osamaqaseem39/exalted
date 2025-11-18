'use client'

export default function AboutUs() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">EXALTED Coding & Packing Solutions</p>
        
        {/* Combined About Us Card */}
        <div className="about-combined-card-wrapper">
          <div className="about-combined-card card">
            {/* Who We Are Content */}
            <div className="about-text-content">
              <p>
                Exalted Coding & Packing Solutions is prominent player in the Arena of Industrial Coding, 
                Marking and Packing Machines. Labeling Machines, Induction Sealers, Small Character Inkjet 
                Printers, Hi-Resolution Inkjet Printers and Carton Coders based on TIJ and Piezo Inkjet, 
                Contact Coders, Pouch Packing Machines, On Line Check Weighers and Industrial Metal Detectors 
                are our main areas of specialty.
              </p>
              <p>
                Our Association with World Renowned and most Successful brands like <strong>Markem Imaje – France</strong>, 
                <strong> Altech – Italy</strong>, <strong>Alpha-Pack China</strong>, <strong>MapleJet – Canada</strong>, 
                <strong> Anser – Taiwan</strong>, & <strong>NOW SYSTEMS – Korea</strong>, show our capabilities and Confidence.
              </p>
              <p>
                A Good Knowledge of Barcode Systems, related hardware and our in-house software development capability, 
                enables us to offer the Solutions related to Pharma Serialization & Track and Trace, Assets, Production, 
                Fleet & Warehouse management Systems.
              </p>
              <p>
                ECPS has built a reputation of being a company which supports its customers. We have made technical 
                support of our installed customer base, the primary method of earning customer satisfaction. This support 
                commitment is manifest in our sales engineering, installation assistance, training capabilities, repair 
                services, inventory stocking levels and managerial decisions.
              </p>
            </div>
            
            {/* Mission Vision Goals */}
            <div className="mvg-grid">
              <div className="mvg-card">
                <div className="mvg-icon">🎯</div>
                <h3 className="mvg-title">Mission</h3>
                <p className="mvg-content">
                  To deliver exceptional coding and packing solutions that empower businesses to achieve 
                  operational excellence. We are committed to providing innovative, reliable, and cost-effective 
                  services that exceed our clients&apos; expectations while maintaining the highest standards of quality.
                </p>
              </div>
              
              <div className="mvg-card">
                <div className="mvg-icon">👁️</div>
                <h3 className="mvg-title">Vision</h3>
                <p className="mvg-content">
                  To become the global leader in coding and packing solutions, recognized for our innovation, 
                  reliability, and unwavering commitment to customer success. We envision a future where every 
                  business has access to world-class solutions that drive growth and efficiency.
                </p>
              </div>
              
              <div className="mvg-card">
                <div className="mvg-icon">🚀</div>
                <h3 className="mvg-title">Goals</h3>
                <p className="mvg-content">
                  Our goals include continuously innovating and adopting cutting-edge technologies, maintaining 
                  100% customer satisfaction rate, expanding our service offerings to new markets, building 
                  long-term partnerships with our clients, and fostering a culture of excellence and continuous 
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          background: #f8f8f8;
        }
        
        .about-combined-card-wrapper {
          width: 100%;
        }
        
        .about-combined-card {
          width: 100%;
          padding: 3rem;
          border: 2px solid rgba(235, 28, 36, 0.1);
        }
        
        .about-text-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-black);
          text-align: justify;
          margin-bottom: 3rem;
        }
        
        .about-text-content p {
          margin-bottom: 1.5rem;
        }
        
        .about-text-content p:last-child {
          margin-bottom: 0;
        }
        
        .about-text-content p strong {
          color: var(--primary-red);
          font-weight: 600;
        }
        
        .mvg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(235, 28, 36, 0.1);
        }
        
        .mvg-card {
          padding: 1.5rem 1.5rem;
          text-align: center;
          background: rgba(235, 28, 36, 0.03);
          border: 1px solid rgba(235, 28, 36, 0.1);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .mvg-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .mvg-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-red);
          margin-bottom: 1rem;
        }
        
        .mvg-content {
          color: var(--text-black);
          line-height: 1.7;
          text-align: justify;
          font-size: 0.95rem;
        }
        
        .mvg-list {
          text-align: left;
          list-style: none;
          padding: 0;
        }
        
        .mvg-list li {
          color: var(--text-black);
          line-height: 1.8;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .mvg-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-red);
          font-weight: 700;
        }
        
        @media (max-width: 968px) {
          .about-combined-card {
            padding: 2rem;
          }
          
          .mvg-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-combined-card {
            padding: 1.5rem;
          }
          
          .about-text-content {
            margin-bottom: 2rem;
          }
          
          .mvg-grid {
            padding-top: 1.5rem;
            gap: 1.5rem;
          }
          
          .mvg-card {
            padding: 1.25rem 1rem;
          }
          
          .mvg-icon {
            font-size: 2.5rem;
            margin-bottom: 0.75rem;
          }
          
          .mvg-title {
            font-size: 1.3rem;
            margin-bottom: 0.75rem;
          }
          
          .mvg-content {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

