'use client'

export default function StatsBanner() {
  const stats = [
    {
      number: '500+',
      label: 'Projects Completed'
    },
    {
      number: '200+',
      label: 'Happy Clients'
    },
    {
      number: '10+',
      label: 'Years Experience'
    }
  ]

  return (
    <section className="stats-banner">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .stats-banner {
          width: 100%;
          background: var(--primary-red);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          align-items: center;
        }
        
        .stat-card {
          background: white;
          padding: 2.5rem 2rem;
          border: 2px solid rgba(235, 28, 36, 0.3);
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        
        .stat-card:hover {
          border-color: var(--primary-red);
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }
        
        
        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--text-black);
          margin-bottom: 0.5rem;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-black);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 968px) {
          .stats-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          
          .stat-card {
            padding: 2rem 1.5rem;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .stat-label {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .stats-banner {
            padding: 3rem 0;
          }
          
          .stats-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .stat-card {
            padding: 2rem 1.5rem;
          }
          
          .stat-number {
            font-size: 3rem;
          }
          
          .stat-label {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

