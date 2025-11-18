'use client'

import { useState } from 'react'

export default function Products() {
  const [activeTab, setActiveTab] = useState('all')
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({})
  const [imageIndices, setImageIndices] = useState<{ [key: string]: number }>({})

  const toggleCard = (productKey: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [productKey]: !prev[productKey]
    }))
  }

  const nextImage = (productKey: string, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setImageIndices(prev => ({
      ...prev,
      [productKey]: ((prev[productKey] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (productKey: string, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setImageIndices(prev => ({
      ...prev,
      [productKey]: ((prev[productKey] || 0) - 1 + totalImages) % totalImages
    }))
  }
  const productCategories = [
    {
      category: 'Coding & Marking (Primary/Small Character)',
      shortName: 'Coding & Marking',
      icon: '🖨️',
      products: [
        {
          name: 'Markem Imaje 9028 CIJ Printer',
          description: 'Simply efficient CIJ printer with unique M6 ink circuit for fast changeover and reliable performance.',
          images: ['/images/9028/1.jpg', '/images/9028/2.jpg', '/images/9028/3.jpg', '/images/9028/4.jpg'],
          technology: 'Continuous Inkjet (CIJ)',
          printSpecs: 'Up to 4 lines of print, speed up to 4.4 m/s, Character height 1.8 to 8.7 mm, G head (71 dpi)',
          features: 'Unique M6\' ink circuit (change in < 6 mins, by operator), IP55 stainless steel design, Embedded online guidance, USB connection, Designed for light to medium duty lines (8000+ non-stop hours)',
        },
        {
          name: 'Markem Imaje 9410 CIJ Printer',
          description: 'Simply efficient CIJ printer with 7-inch touch screen and advanced ink options for versatile coding needs.',
          images: ['/images/9410/1.jpg', '/images/9410/2.jpg'],
          technology: 'Continuous Inkjet (CIJ)',
          printSpecs: 'Up to 5 lines of print, speed up to 4.6 m/s, Character height 1.5 to 11 mm, G head (71 dpi)',
          features: '7-inch wide touch screen (WYSIWYG), Jet Speed Control, Broad range of inks (ketone-free & MEK-free options), USB/SD ports, Ethernet',
        },
        {
          name: 'MapleJet Pro Digit 18 Printer',
          description: 'Intelligent primary packaging coder with high-resolution printing and advanced message management capabilities.',
          images: ['/images/18p/1.jpg', '/images/18p/2.jpg', '/images/18p/3.jpg'],
          technology: 'High-Resolution Inkjet',
          printSpecs: '180 DPI resolution, Max speed 40 M/Min, Max 8 lines, Height range 1-18 mm',
          features: '8.4˝ Color TFT LCD Touchscreen, Ink Consumption Control System (up to 75% reduction), Prints Logos/Barcodes/External Data, Up to 999 Message Saving, Ethernet, RS232',
        },
        {
          name: 'MapleJet Pro Digit bi color Printer',
          description: 'Revolutionary dual-color printing system that prints two colors simultaneously for enhanced product identification.',
          images: ['/images/bi/1.jpg', '/images/bi/2.jpg', '/images/bi/3.jpg'],
          technology: 'High-Resolution Inkjet',
          printSpecs: '180 DPI resolution, Max speed 40 M/Min, Max 8 lines, Height range 2-18 mm',
          features: 'Prints two colors simultaneously (Red, Black, White, Blue, Yellow ink options), Dual-cartridge based ink system, 8.4" Color TFT Touchscreen, Modular design (can operate two separate print engines from one controller)',
        },
        {
          name: 'MapleJet Pro Digit Light Printer',
          description: 'Compact and efficient coding solution in a light box design, perfect for automatic date and expiry coding.',
          images: ['/images/Line/1.jpg', '/images/Line/2.jpg'],
          technology: 'High-Resolution Inkjet',
          printSpecs: '180 DPI or 90 DPI resolution, Max speed 35 M/Min, Max 4 lines, Height range 2-18 mm',
          features: 'Your Coding Features In A Light Box, Automatic Production & Expiry Date, Expandable up to 6 print heads',
        },
        {
          name: 'Ancer U2 Pro TIJ Printer',
          description: 'Small yet powerful thermal inkjet printer with plug-n-print design and zero maintenance requirements.',
          images: ['/images/tijp/1.jpg', '/images/tijp/2.jpg', '/images/tijp/3.jpg'],
          technology: 'Thermal Inkjet (TIJ)',
          printSpecs: '1/30 size compared with CIJ (small, powerful), 100% solvent compatible, MEK-free',
          features: 'Plug-n-Print with zero maintenance, 3.5" full colour LCD, IR remote keypad, Saves up to 30% of ink with smaller drop size',
        },
      ],
    },
    {
      category: 'Carton Coding (Secondary/Large Character)',
      shortName: 'Carton Coding',
      icon: '📦',
      products: [
        {
          name: 'Markem Imaje 5800 Series',
          description: 'High resolution hot melt inkjet printer for large character carton coding with exceptional print quality.',
          images: ['/images/5800/1.jpg', '/images/5800/2.jpg', '/images/5800/3.jpg'],
          technology: 'High Resolution Hot Melt Inkjet',
          printSpecs: 'Print height: up to 65 mm, Print length: up to 1,000 mm, Full true type font support, Linear and 2D barcodes',
          features: 'Up to two print heads, Color LCD touch screen interface, Printing of real-time clock and auto updating dates/serial numbers',
        },
        {
          name: 'Markem Imaje Print & Apply System',
          description: 'High-speed flexible print and apply system with intelligent applicator for efficient label application.',
          images: ['/images/2200/1.jpg', '/images/2200/2.jpg', '/images/2200/3.jpg'],
          technology: 'Thermal Transfer or Direct Thermal (2200 Series)',
          printSpecs: 'Max Print Speed 300 mm/s, Print Widths 54 mm to 168 mm (Model dependent), Resolution 200/300 dpi, GS1 compliant barcodes',
          features: 'High-Speed, Flexible Print & Apply, Wide range of interchangeable applicators, eTouch-S intelligent applicator (high operational safety), Integrated barcode scanner (ensures 100% readable codes), Recyclability (>95%)',
        },
        {
          name: 'Maplejet PD53 Printer',
          description: 'High-resolution piezo inkjet printer expandable up to 6 print heads for comprehensive carton coding solutions.',
          images: ['/images/pd53/1.jpg', '/images/pd53/2.jpg'],
          technology: 'High-Resolution Piezo Inkjet',
          printSpecs: 'Resolution 180 DPI (up to 53 mm print height) or 360 DPI (up to 26 mm print height), Max Speed 60 M/Min, Height range 1-53 mm',
          features: 'Expandable up to 6 print heads, Comprehensive message components, Suitable for carton coding',
        },
        {
          name: 'Anser U2 Smart',
          description: 'Unbeatable 4-in-1 compact TIJ printer with stand-alone operation and zero maintenance design.',
          images: ['/images/ans1/1.jpg', '/images/ans1/2.jpg', '/images/ans1/3.jpg', '/images/ans1/4.jpg'],
          technology: 'Thermal Inkjet (TIJ)',
          printSpecs: 'Print Resolution 300 dpi, 1-inch print height, Water-based ink (ideal for porous materials like cardboard)',
          features: '4-in-1 compact design (controller, screen, printhead & cartridge integrated), Completely stand-alone (no PC required), Zero-Maintenance, 3.5-inch LCD, Remote keypad',
        },
      ],
    },
    {
      category: 'Inspection Equipment',
      shortName: 'Inspection',
      icon: '🔬',
      products: [
        {
          name: 'Seeker',
          description: 'Advanced metal detector with 5 search systems for underground detection and treasure hunting applications.',
          images: ['/images/Seeker/1.jpg'],
          type: 'Metal Detector',
          targetProduct: 'General underground gold, treasures, voids, and ancient relics',
          features: '5 advanced search systems (Long-Range Sensing, Ionic Field, Magnetic, Void Detection), Search depth up to 40m, 3000m front range, Fully automatic operating system, Multilingual',
        },
        {
          name: 'Quicker',
          description: 'Industrial metal detector with multi-frequency capacity and high sensitivity for food, beverage, and pharma industries.',
          images: ['/images/530/1.jpg', '/images/530/2.jpg', '/images/530/3.jpg', '/images/530/4.jpg'],
          type: 'Metal Detector (Industrial)',
          targetProduct: 'General industrial applications (food, beverage, pharma)',
          features: 'Multi-frequency capacity, 7" Touchscreen with user-friendly interface, Stores up to 1000 Products, High Sensitivity (down to 0.2 mm ferrous/non-ferrous), IP65 or IP66 rated (washdown)',
        },
        {
          name: 'Medic',
          description: 'Pharmaceutical metal detector and auto check weigher processing up to 15,000 tablets per minute.',
          images: ['/images/NMD530/1.jpg', '/images/NMD530/2.jpg', '/images/NMD530/3.jpg', '/images/NMD530/4.jpg'],
          type: 'Metal Detector (Pharmaceutical/Auto Check Weigher)',
          targetProduct: 'Tablets/Capsules',
          features: 'Processes up to 15,000 tablets/minute, IP66, Failsafe reject diverter',
        },
        {
          name: 'Steamer',
          description: 'Specialized metal detector for liquid and pasty products with high temperature capability up to 80°C.',
          images: ['/images/Streamer/1.jpg', '/images/Streamer/2.jpg', '/images/Streamer/3.jpg'],
          type: 'Metal Detector',
          targetProduct: 'Liquid and pasty products (juice, sauces, jam, soup, etc.)',
          features: 'Applicable for high temperature liquid (Up to 80˚C), Metal Separation Using a Ball Valve System (minimizes product loss), Wash-Down Okay, Unrivalled Detection Sensitivity, Full Colour Touch Screen',
        },
        {
          name: 'Alcon',
          description: 'Dual sensor metal detector specifically designed for aluminum-packed products with exceptional detection capabilities.',
          images: ['/images/alcon/1.jpg'],
          type: 'Metal Detector (for Aluminum-Packed Products)',
          targetProduct: 'Products packed in aluminum (pouches, coffee drinks, etc.)',
          features: 'Dual Sensor Type, Detects wires, chips, broken injection needles, Usable with every type of aluminum-packed products (no product effect/hot temperature issues), Configurable passing height, 10 inch COLOR TFT LCD Screen, IP-55',
        },
      ],
    },
    {
      category: 'Labeling & Packing Machines',
      shortName: 'Labeling & Packing',
      icon: '🏷️',
      products: [
        {
          name: 'Front & Back Labeler',
          description: 'Automatic labeling machine for precise front and back bottle labeling with high accuracy and servo motor control.',
          images: ['/images/front/1.jpg', '/images/front/2.jpg'],
          type: 'Automatic Labeling Machine (ALB-620)',
          application: 'Bottles (Front & Back labeling)',
          features: 'Stainless Steel #304 construction, PLC with touch screen, High accuracy (± 1mm), Servo motor driven labeling head (speed synchronized), Push and Press sponge attachment (smooth labeling)',
        },
        {
          name: 'Round bottle Labeler',
          description: 'Versatile labeling machine for round bottles with high precision labeling accuracy for PET, glass, and metal containers.',
          images: ['/images/lab/1.jpg', '/images/lab/2.jpg', '/images/lab/3.jpg'],
          type: 'Labeling Machine',
          application: 'Round Bottles',
          features: 'Labels PET, glass, and metal bottles, Labelling accuracy: +/- 0.5mm, Speed up to 10 – 20 bottles per minute (Semi-automatic model cited), Diameter of bottle: 30 – 150mm',
        },
        {
          name: 'Top sider Labeler',
          description: 'Flexible labeling machine with top, side, or front/back labeling capabilities and optional vision system integration.',
          images: ['/images/top/1.jpg', '/images/top/2.jpg'],
          type: 'Labeling Machine (Top & Side/Front-Back)',
          application: 'Bottles, Jars, Tins, and other containers',
          features: 'Top, Side, or Front/Back labeling capabilities, Suitable for Paper/Transparent/BOPP Labels, Color Touch Screen, Option for Online Printing Device and Camera Vision System, Fully Stainless-Steel Finish',
        },
        {
          name: 'Tablet Counter',
          description: 'High-speed counting machine for tablets and capsules with non-stop counting capability and cGMP compliance.',
          images: ['/images/tab/1.jpg', '/images/tab/2.jpg', '/images/tab/3.jpg'],
          type: 'Counting Machine',
          application: 'Tablets and Capsules',
          features: 'High Counting Speed (600 to 2000+ pcs/min depending on model), PLC control system, Flap Nozzle for Non-Stop counting, Tool Free changeover for product types, Touch screen control panel with memory slots, SUS#304 and cGMP requirement materials',
        },
        {
          name: 'Tube Filling Machine',
          description: 'Fully automatic tube filling machine with precision servo control and GMP compliant stainless steel construction.',
          images: ['/images/tube/1.jpg', '/images/tube/2.jpg'],
          type: 'Tube Filling Machine',
          application: 'Tubes (creams, pastes, etc.)',
          features: 'Automatic tube loading, filling, heating, sealing, cutting and unloading, Servo motor controls filling volume, Inner Heat System using "Leister" hot air system, Plug-in filling type (fills from bottom), All contact parts are Stainless Steel #316 (GMP compliant)',
        },
        {
          name: 'Pouch Packing Machine',
          description: 'Versatile automatic packaging machine for liquid, powder, and granular products in various pouch sizes and configurations.',
          images: ['/images/prod/1.jpg', '/images/prod/2.jpg', '/images/prod/3.jpg'],
          type: 'Automatic Packaging Machine',
          application: 'Liquid, Powder, Granual (in pouches)',
          features: 'Wide range of Pouch Capacities (10g to 1000g), Various Filler Types (Cup Filler, Auger Filler), Various sealing types (Center Seal, Three Side Seal), Speeds from 30 to 60 pouches/minute up to 2000-3000 pouches/hour (Auger Filler model)',
        },
      ],
    },
    {
      category: 'Check Weigher',
      shortName: 'Check Weigher',
      icon: '⚖️',
      products: [
        {
          name: 'Abacus',
          description: 'Advanced auto check weigher with real-time monitoring, auto zero tracking, and integration capabilities for comprehensive quality control.',
          images: ['/images/3000/1.jpg', '/images/3000/2.jpg'],
          type: 'Auto Check Weigher (NWC-3000 Series)',
          application: 'General packaging products',
          features: 'Auto Zero tracking, Variable speed with inverter, Auto data back-up, Real time monitoring with a smart phone, Available to control external equipment (printer, metal detector), Option to integrate with a metal detector',
        },
      ],
    },
  ]

  // Get all products for "All" tab
  const allProducts = productCategories.flatMap(category => 
    category.products.map(product => ({ ...product, categoryName: category.category, categoryIcon: category.icon }))
  )

  // Get products for active tab
  const getDisplayProducts = () => {
    if (activeTab === 'all') {
      return allProducts
    }
    const selectedCategory = productCategories.find(cat => cat.category === activeTab)
    return selectedCategory ? selectedCategory.products.map(product => ({ ...product, categoryName: selectedCategory.category, categoryIcon: selectedCategory.icon })) : []
  }

  const displayProducts = getDisplayProducts()

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Comprehensive solutions for all your coding and packing needs</p>
        
        {/* Tabs */}
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <span className="tab-icon">📋</span>
            <span className="tab-text">All Products</span>
          </button>
          {productCategories.map((category, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === category.category ? 'active' : ''}`}
              onClick={() => setActiveTab(category.category)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-text">{category.shortName || category.category}</span>
            </button>
          ))}
        </div>

        {/* Products Display */}
        <div className="products-content">
          {activeTab === 'all' ? (
            // Show all products grouped by category
            productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="product-category-group">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.category}</h3>
                </div>
                <div className="products-grid">
                  {category.products.map((product, productIndex) => {
                    const productKey = `${category.category}-${productIndex}`
                    const isFlipped = flippedCards[productKey] || false
                    const currentImageIndex = imageIndices[productKey] || 0
                    const productImages = product.images || ['/images/solution.jpg']
                    const hasMultipleImages = productImages.length > 1
                    
                    return (
                      <div
                        key={productIndex}
                        className="flip-card-wrapper"
                        onMouseLeave={() => setFlippedCards(prev => ({ ...prev, [productKey]: false }))}
                      >
                        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front card">
                              {/* Image Slider */}
                              <div className="product-image-container">
                                <img
                                  src={productImages[currentImageIndex]}
                                  alt={product.name}
                                  className="product-image"
                                />
                                {hasMultipleImages && (
                                  <>
                                    <button
                                      className="image-nav-btn prev-btn"
                                      onClick={(e) => prevImage(productKey, productImages.length, e)}
                                    >
                                      ‹
                                    </button>
                                    <button
                                      className="image-nav-btn next-btn"
                                      onClick={(e) => nextImage(productKey, productImages.length, e)}
                                    >
                                      ›
                                    </button>
                                    <div className="image-indicator">
                                      {currentImageIndex + 1} / {productImages.length}
                                    </div>
                                  </>
                                )}
                              </div>
                              
                              <div className="product-card-content">
                                <h4 className="product-name">{product.name}</h4>
                                <p className="product-description">{product.description}</p>
                                
                                <div className="product-buttons">
                                  <div className="buttons-row">
                                    <button
                                      className="btn-learn-more"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        toggleCard(productKey)
                                      }}
                                    >
                                      Learn More
                                    </button>
                                    <button className="btn-download" onClick={(e) => { e.stopPropagation(); }}>
                                      📥
                                    </button>
                                  </div>
                                  <button className="btn-quote" onClick={(e) => { e.stopPropagation(); }}>
                                    Get a Quote
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                            {/* Back Side */}
                            <div className="flip-card-back card">
                              <div className="product-details">
                                <h4 className="product-name">{product.name}</h4>
                                
                                <p className="product-description-back">{product.description}</p>
                                
                                {/* Key Features Section */}
                                {product.features && (
                                  <div className="product-features">
                                    <strong>Key Features:</strong>
                                    <ul>
                                      {product.features.split(', ').map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature.trim()}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                <div className="product-buttons-back">
                                  <button className="btn-quote-back" onClick={(e) => { e.stopPropagation(); }}>
                                    Get a Quote
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          ) : (
            // Show products for selected category
            <div className="products-grid">
              {displayProducts.map((product, productIndex) => {
                const productKey = `category-${productIndex}`
                const isFlipped = flippedCards[productKey] || false
                const currentImageIndex = imageIndices[productKey] || 0
                const productImages = product.images || ['/images/solution.jpg']
                const hasMultipleImages = productImages.length > 1
                
                return (
                  <div
                    key={productIndex}
                    className="flip-card-wrapper"
                    onMouseLeave={() => setFlippedCards(prev => ({ ...prev, [productKey]: false }))}
                  >
                    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                      <div className="flip-card-inner">
                        {/* Front Side */}
                        <div className="flip-card-front card">
                          {/* Image Slider */}
                          <div className="product-image-container">
                            <img
                              src={productImages[currentImageIndex]}
                              alt={product.name}
                              className="product-image"
                            />
                            {hasMultipleImages && (
                              <>
                                <button
                                  className="image-nav-btn prev-btn"
                                  onClick={(e) => prevImage(productKey, productImages.length, e)}
                                >
                                  ‹
                                </button>
                                <button
                                  className="image-nav-btn next-btn"
                                  onClick={(e) => nextImage(productKey, productImages.length, e)}
                                >
                                  ›
                                </button>
                                <div className="image-indicator">
                                  {currentImageIndex + 1} / {productImages.length}
                                </div>
                              </>
                            )}
                          </div>
                          
                            <div className="product-card-content">
                            <h4 className="product-name">{product.name}</h4>
                            <p className="product-description">{product.description}</p>
                            
                            <div className="product-buttons">
                              <div className="buttons-row">
                                <button
                                  className="btn-learn-more"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleCard(productKey)
                                  }}
                                >
                                  Learn More
                                </button>
                                <button className="btn-download" onClick={(e) => { e.stopPropagation(); }}>
                                  📥
                                </button>
                              </div>
                              <button className="btn-quote" onClick={(e) => { e.stopPropagation(); }}>
                                Get a Quote
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Back Side */}
                        <div className="flip-card-back card">
                          <div className="product-details">
                            <h4 className="product-name">{product.name}</h4>
                            
                            <p className="product-description-back">{product.description}</p>
                            
                            {/* Key Features Section */}
                            {product.features && (
                              <div className="product-features">
                                <strong>Key Features:</strong>
                                <ul>
                                  {product.features.split(', ').map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature.trim()}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div className="product-buttons-back">
                              <button className="btn-quote-back" onClick={(e) => { e.stopPropagation(); }}>
                                Get a Quote
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .products-section {
          background: #f8f8f8;
        }
        
        .tabs-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
          border-bottom: 2px solid rgba(235, 28, 36, 0.2);
          padding-bottom: 1rem;
        }
        
        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-black);
          white-space: nowrap;
        }
        
        .tab-button:hover {
          background: rgba(235, 28, 36, 0.1);
          border-color: rgba(235, 28, 36, 0.3);
        }
        
        .tab-button.active {
          background: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }
        
        .tab-icon {
          font-size: 1.2rem;
        }
        
        .tab-text {
          font-size: 0.9rem;
        }
        
        .products-content {
          min-height: 400px;
        }
        
        .product-category-group {
          margin-bottom: 4rem;
        }
        
        .product-category-group:last-child {
          margin-bottom: 0;
        }
        
        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--primary-red);
        }
        
        .category-icon {
          font-size: 2.5rem;
        }
        
        .category-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-black);
          margin: 0;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .flip-card-wrapper {
          perspective: 1000px;
          height: 700px;
        }
        
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
          overflow-y: auto;
        }
        
        .product-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #f0f0f0;
          min-height: 350px;
        }
        
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .image-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(235, 28, 36, 0.8);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .image-nav-btn:hover {
          background: var(--primary-red);
          transform: translateY(-50%) scale(1.1);
        }
        
        .prev-btn {
          left: 10px;
        }
        
        .next-btn {
          right: 10px;
        }
        
        .image-indicator {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.85rem;
        }
        
        .product-card-content {
          padding: 1.5rem 1.5rem 0.75rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .product-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-red);
          margin-bottom: 0.75rem;
        }
        
        .product-description {
          color: var(--subheading-gray);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        
        .product-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          position: relative;
        }
        
        .buttons-row {
          display: flex;
          gap: 0.5rem;
          position: relative;
        }
        
        .product-buttons button {
          padding: 0.75rem 1rem;
          border: none;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .btn-download {
          background: #f0f0f0;
          color: var(--text-black);
          border-radius: 6px;
          padding: 0.75rem;
          min-width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .btn-download:hover {
          background: #e0e0e0;
        }
        
        .btn-learn-more {
          background: var(--primary-red);
          color: white;
          border-radius: 6px;
          flex: 1;
        }
        
        .btn-learn-more:hover {
          background: #c41e28;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(235, 28, 36, 0.3);
        }
        
        .btn-quote {
          background: transparent;
          color: var(--primary-red);
          border: 2px solid var(--primary-red);
          border-radius: 6px;
          margin-top: 0;
          box-shadow: 0 0 0 1px rgba(235, 28, 36, 0.1);
        }
        
        .btn-quote:hover {
          background: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }
        
        .product-details {
          padding: 1.5rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .product-description-back {
          color: var(--subheading-gray);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .product-buttons-back {
          margin-top: auto;
          padding-top: 1.5rem;
        }
        
        .btn-quote-back {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--primary-red);
          color: white;
          border: 2px solid var(--primary-red);
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-quote-back:hover {
          background: #c41e28;
          border-color: #c41e28;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(235, 28, 36, 0.3);
        }
        
        .product-spec-section {
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .product-spec-section:last-of-type {
          border-bottom: none;
        }
        
        .spec-label {
          display: block;
          color: var(--text-black);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        
        .spec-value {
          display: block;
          color: var(--subheading-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .product-features {
          color: var(--text-black);
          margin-top: 1rem;
        }
        
        .product-features strong {
          display: block;
          color: var(--text-black);
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }
        
        .product-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .product-features li {
          color: var(--subheading-gray);
          line-height: 1.8;
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }
        
        .product-features li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-red);
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        @media (max-width: 968px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .category-title {
            font-size: 1.6rem;
          }
          
          .tab-text {
            font-size: 0.85rem;
          }
          
          .tab-button {
            padding: 0.6rem 1.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .flip-card-wrapper {
            height: 650px;
          }
          
          .product-image-container {
            aspect-ratio: 3 / 4;
          }
          
          .tabs-container {
            gap: 0.5rem;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }
          
          .tabs-container::-webkit-scrollbar {
            height: 4px;
          }
          
          .tabs-container::-webkit-scrollbar-thumb {
            background: var(--primary-red);
            border-radius: 2px;
          }
          
          .tab-button {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
            flex-shrink: 0;
          }
          
          .tab-text {
            font-size: 0.8rem;
          }
          
          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .category-title {
            font-size: 1.4rem;
          }
          
          .product-name {
            font-size: 1.2rem;
          }
          
          .product-buttons button {
            padding: 0.6rem 0.8rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}

