'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Immediately show preloader and hide content (website loads in background)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('preloader-active')
    }

    let progressInterval: NodeJS.Timeout
    let timeout: NodeJS.Timeout
    const startTime = Date.now()
    const progressDuration = 500 // Quick 500ms animation

    // Complete preloader quickly
    const handleComplete = () => {
      setProgress(100)
      if (progressInterval) clearInterval(progressInterval)
      
      // Show content immediately before hiding preloader to prevent blank screen
      if (typeof document !== 'undefined') {
        document.body.classList.remove('preloader-active')
      }
      
      // Small delay before hiding preloader to allow content to start showing
      setTimeout(() => {
        setIsLoading(false)
        // Re-enable body scroll
        if (typeof document !== 'undefined') {
          document.body.style.overflow = ''
        }
        // Remove from DOM after fade out
        setTimeout(() => {
          const preloader = document.querySelector('.preloader')
          if (preloader) {
            preloader.remove()
          }
        }, 200)
      }, 50)
    }

    // Animate progress bar from 0% to 100% quickly
    progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progressPercent = Math.min((elapsed / progressDuration) * 100, 100)
      
      setProgress(progressPercent)
      
      if (progressPercent >= 100) {
        clearInterval(progressInterval)
      }
    }, 16) // ~60fps for smooth animation

    // Check if page is already loaded
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        // Page already loaded, complete quickly
        setTimeout(handleComplete, progressDuration)
      } else {
        // Wait for page load or timeout
        window.addEventListener('load', handleComplete, { once: true })
        // Fallback: complete after animation duration
        timeout = setTimeout(handleComplete, progressDuration)
      }
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval)
      if (timeout) clearTimeout(timeout)
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleComplete)
      }
      if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
        document.body.classList.remove('preloader-active')
      }
    }
  }, [])


  if (!isLoading) return null

  return (
    <div 
      className="preloader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#ffffff',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        visibility: 'visible',
      }}
    >
      <div 
        className="preloader-content"
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div 
          className="preloader-logo"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Image 
            src="/images/logo.png" 
            alt="EXALTED Logo" 
            width={200} 
            height={67}
            className="logo-pulse"
            priority
            style={{
              backgroundColor: '#ffffff',
            }}
          />
        </div>
      </div>
      <div 
        className="preloader-progress-container"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'rgba(235, 28, 36, 0.1)',
          overflow: 'hidden',
        }}
      >
        <div 
          className="preloader-progress-bar" 
          style={{ 
            width: `${Math.max(progress, 1)}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #eb1c24 0%, #c4161d 100%)',
            transition: 'width 0.1s linear',
            position: 'relative',
            minWidth: '1px',
          }}
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
          z-index: 99999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
          will-change: opacity, visibility;
        }

        .preloader.hiding {
          opacity: 0;
          visibility: hidden;
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
          background: linear-gradient(90deg, #eb1c24 0%, #c4161d 100%);
          transition: width 0.1s linear;
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

