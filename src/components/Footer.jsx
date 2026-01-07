import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/blog', label: 'Blog' },
    { path: '/contacts', label: 'Contacts' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-dark-bgSecondary border-t border-dark-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-orange to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-bold text-white">Campaign<span className="gradient-text">Wala</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading telecalling company in India offering work-from-home jobs with flexible schedules and weekly payouts.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Instagram size={18} />
              <span className="text-sm">@campainwala</span>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold text-lg flex items-center space-x-2">
              <Clock size={20} className="text-primary-light" />
              <span>Working Hours</span>
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Monday - Saturday: <span className="text-white">08:00 am - 08:00 pm</span></p>
              <p>Attendance Timing: <span className="text-white">05:00 am - 10:00 am</span></p>
              <p className="font-semibold text-white">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="text-primary-light mt-0.5 flex-shrink-0" />
                <span>Garh road Jalandhar, Punjab, 144022</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-primary-light flex-shrink-0" />
                <a href="mailto:info@campainwala.com" className="hover:text-primary-light transition-colors">
                  info@campainwala.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-primary-light flex-shrink-0" />
                <a href="tel:+918365855029" className="hover:text-primary-light transition-colors">
                  +91-8365855029
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} CampaignWala. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-light transition-colors">
              Terms and Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

