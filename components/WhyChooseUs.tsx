'use client'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Industry Expertise',
      description: 'Years of experience in coding and packing solutions across various industries.',
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We use the latest technology and equipment to deliver superior results.',
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored solutions designed specifically for your business requirements.',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure consistent, reliable results.',
    },
    {
      title: 'Competitive Pricing',
      description: 'Cost-effective solutions without compromising on quality or service.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your operations never stop.',
    },
  ]

  return (
    <section id="why-choose-us" className="section why-choose-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">What sets us apart from the competition</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#eb1c24"/>
                </svg>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .why-choose-section {
          background: var(--bg-white);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem 2rem;
        }
        
        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .feature-icon {
          width: 50px;
          height: 50px;
          background: rgba(235, 28, 36, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-black);
          margin-bottom: 0.75rem;
        }
        
        .feature-description {
          color: var(--subheading-gray);
          line-height: 1.7;
        }
        
        @media (max-width: 968px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

