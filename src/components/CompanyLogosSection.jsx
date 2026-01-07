import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

// Import company logos
import upstoxLogo from '../assets/Upstox.jfif'
import angelOneLogo from '../assets/Angel Broking.jfif'
import hdfcLogo from '../assets/HDFC BANK LOGO.jfif'
import downloadLogo1 from '../assets/download.jfif'
import downloadLogo2 from '../assets/download (1).jfif'
import sbiLogo from '../assets/State Bank of India (SBI) Logo Vector.jfif'
import pnbLogo from '../assets/Download Punjab national bank, pnb bank logo free vector.jfif'
// Note: Files with special characters in names cause Vite errors, using alternative logos
import axisBankLogo from '../assets/download.jfif'
import bankOfBarodaLogo from '../assets/download.jfif'

const CompanyLogosSection = () => {
  const companies = [
    { name: 'Upstox', logo: upstoxLogo },
    { name: 'Angel One', logo: angelOneLogo },
    { name: 'HDFC Bank', logo: hdfcLogo },
    { name: 'ICICI Direct', logo: axisBankLogo },
    { name: 'M Stock', logo: downloadLogo1 },
    { name: 'Groww', logo: downloadLogo2 },
    { name: 'Kotak Mahindra Bank', logo: sbiLogo },
    { name: '5 Paisa', logo: pnbLogo },
    { name: 'AU Finance Bank', logo: bankOfBarodaLogo },
    { name: 'Yes Bank', logo: axisBankLogo },
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

