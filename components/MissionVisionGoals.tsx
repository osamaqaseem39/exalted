'use client'

export default function MissionVisionGoals() {
  return (
    <section id="mission-vision" className="section mvg-section">
      <div className="container">
        <h2 className="section-title">Our Foundation</h2>
        <p className="section-subtitle">The principles that guide everything we do</p>
        
        <div className="mvg-grid">
          <div className="mvg-card card">
            <div className="mvg-icon">🎯</div>
            <h3 className="mvg-title">Mission</h3>
            <p className="mvg-content">
              To deliver exceptional coding and packing solutions that empower businesses to achieve 
              operational excellence. We are committed to providing innovative, reliable, and cost-effective 
              services that exceed our clients' expectations while maintaining the highest standards of quality.
            </p>
          </div>
          
          <div className="mvg-card card">
            <div className="mvg-icon">👁️</div>
            <h3 className="mvg-title">Vision</h3>
            <p className="mvg-content">
              To become the global leader in coding and packing solutions, recognized for our innovation, 
              reliability, and unwavering commitment to customer success. We envision a future where every 
              business has access to world-class solutions that drive growth and efficiency.
            </p>
          </div>
          
          <div className="mvg-card card">
            <div className="mvg-icon">🚀</div>
            <h3 className="mvg-title">Goals</h3>
            <ul className="mvg-list">
              <li>Continuously innovate and adopt cutting-edge technologies</li>
              <li>Maintain 100% customer satisfaction rate</li>
              <li>Expand our service offerings to new markets</li>
              <li>Build long-term partnerships with our clients</li>
              <li>Foster a culture of excellence and continuous improvement</li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .mvg-section {
          background: #f8f8f8;
        }
        
        .mvg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        
        .mvg-card {
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .mvg-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }
        
        .mvg-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--primary-red);
          margin-bottom: 1.5rem;
        }
        
        .mvg-content {
          color: var(--text-black);
          line-height: 1.8;
          text-align: left;
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
          .mvg-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

