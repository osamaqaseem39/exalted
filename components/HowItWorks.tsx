'use client'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We start by understanding your specific needs, challenges, and goals through a detailed consultation.',
      image: '/images/consultation.jpg',
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized solution tailored to your requirements and business processes.',
      image: '/images/solution.jpg',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your operations, ensuring a smooth transition.',
      image: '/images/implementation.jpg',
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures everything works perfectly before going live.',
      image: '/images/quality.jpg',
    },
    {
      number: '05',
      title: 'Training & Support',
      description: 'We provide comprehensive training and ongoing support to ensure your team is fully equipped.',
      image: '/images/traning.jpg',
    },
    {
      number: '06',
      title: 'Ongoing Optimization',
      description: 'We continuously monitor and optimize the solution to ensure peak performance.',
      image: '/images/optimazation.jpg',
    },
  ]

  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Our streamlined process from consultation to implementation</p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="flip-card-wrapper">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front card">
                    <div className="step-number">{step.number}</div>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back card">
                    <div className="step-number-back">{step.number}</div>
                    <h3 className="step-title-back">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .how-it-works-section {
          background: var(--bg-white);
        }
        
        .steps-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
        }
        
        .flip-card-wrapper {
          perspective: 1000px;
          height: 280px;
        }
        
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card-wrapper:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 3px solid rgba(235, 28, 36, 0.6);
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
          padding: 2rem;
        }
        
        .step-number {
          width: 70px;
          height: 70px;
          background: var(--primary-red);
          color: white;
          font-size: 1.3rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        
        .step-number-back {
          width: 60px;
          height: 60px;
          background: var(--primary-red);
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        
        .step-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-black);
          padding: 0 1.5rem;
        }
        
        .step-title-back {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-red);
          margin-bottom: 1.5rem;
        }
        
        .step-description {
          color: var(--text-black);
          line-height: 1.8;
          text-align: justify;
          font-size: 0.95rem;
        }
        
        @media (max-width: 968px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
          
          .flip-card-wrapper {
            height: 260px;
          }
          
          .flip-card-back {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

