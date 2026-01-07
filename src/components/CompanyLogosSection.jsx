import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

// Import all company logos from src/assets
import upstoxLogo from '../assets/Upstox.jfif'
import angelOneLogo from '../assets/angelone.jfif'
import hdfcLogo from '../assets/hdfc.jfif'
import pnbLogo from '../assets/pnb.jfif'
import sbiLogo from '../assets/sbi.jfif'
import airtelLogo from '../assets/airtell.jfif'
import bigbasketLogo from '../assets/bigbasket.jfif'
import blinkitLogo from '../assets/blinkit.jfif'
import flipcartLogo from '../assets/flipcart.jfif'
import jioLogo from '../assets/jio.jfif'
import ltLogo from '../assets/lt.jfif'
import mahindraLogo from '../assets/mahindra.jfif'
import meeshoLogo from '../assets/meesho.jfif'
import myntraLogo from '../assets/myntra.jfif'
import paytmLogo from '../assets/paytm.jfif'
import phonepeLogo from '../assets/phonepe.jfif'
import swiggyLogo from '../assets/swiggy.jfif'
import vodafoneLogo from '../assets/vodafone.jfif'
import zeptoLogo from '../assets/zepto.jfif'
import zomatoLogo from '../assets/zomato.jfif'

const CompanyLogosSection = () => {
  const companies = [
    { name: 'Upstox', logo: upstoxLogo },
    { name: 'Angel One', logo: angelOneLogo },
    { name: 'HDFC Bank', logo: hdfcLogo },
    { name: 'Punjab National Bank', logo: pnbLogo },
    { name: 'State Bank of India', logo: sbiLogo },
    { name: 'Airtel', logo: airtelLogo },
    { name: 'BigBasket', logo: bigbasketLogo },
    { name: 'Blinkit', logo: blinkitLogo },
    { name: 'Flipkart', logo: flipcartLogo },
    { name: 'Jio', logo: jioLogo },
    { name: 'L&T', logo: ltLogo },
    { name: 'Mahindra', logo: mahindraLogo },
    { name: 'Meesho', logo: meeshoLogo },
    { name: 'Myntra', logo: myntraLogo },
    { name: 'Paytm', logo: paytmLogo },
    { name: 'PhonePe', logo: phonepeLogo },
    { name: 'Swiggy', logo: swiggyLogo },
    { name: 'Vodafone', logo: vodafoneLogo },
    { name: 'Zepto', logo: zeptoLogo },
    { name: 'Zomato', logo: zomatoLogo },
  ]

  // Duplicate logos for seamless infinite loop
  const duplicatedCompanies = [...companies, ...companies, ...companies]

  return (
    <section className="py-20 bg-dark-bgSecondary border-t border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Companies <span className="gradient-text">Tied With Us</span>
          </h2>
          <p className="text-gray-400 text-lg">Trusted by leading brands & partners</p>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-light to-transparent rounded-full" />
          </div>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bgSecondary via-dark-bgSecondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bgSecondary via-dark-bgSecondary to-transparent z-10 pointer-events-none" />

          {/* Marquee Track with CSS Animation */}
          <div className="marquee-container">
            <div className="marquee-track">
              {duplicatedCompanies.map((company, index) => (
                <div key={`${company.name}-${index}`} className="marquee-item">
                  <motion.div
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="logo-container">
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="logo-image"
                          loading="lazy"
                        />
                      ) : (
                        <Building2 className="text-gray-500 group-hover:text-primary-light transition-colors" size={40} />
                      )}
                    </div>
                    {/* Tooltip on hover */}
                    <div className="logo-tooltip">
                      <div className="tooltip-content">
                        {company.name}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CompanyLogosSection

