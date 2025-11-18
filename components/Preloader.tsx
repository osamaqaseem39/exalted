'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Wait a bit before hiding the preloader
          setTimeout(() => {
            setIsLoading(false)
          }, 300)
          return 100
        }
        // Increment progress with slight randomness for more natural feel
        const increment = Math.random() * 15 + 5
        return Math.min(prev + increment, 100)
      })
    }, 100)

    // Also check if page is actually loaded
    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <Image 
            src="/images/logo.png" 
            alt="EXALTED Logo" 
            width={200} 
            height={67}
            className="logo-pulse"
            priority
          />
        </div>
      </div>
      <div className="preloader-progress-container">
        <div 
          className="preloader-progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #ffffff;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .preloader-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .preloader-logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .preloader-progress-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(235, 28, 36, 0.1);
          overflow: hidden;
        }

        .preloader-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-red) 0%, #c4161d 100%);
          transition: width 0.3s ease;
          position: relative;
        }

        .preloader-progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}

