import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Target, Eye, Heart, TrendingUp, Users, Briefcase, 
  Award, DollarSign, Building2, ArrowRight
} from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'

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

const About = () => {
  const stats = [
    { icon: Users, value: '20,000+', label: 'Members Guided', year: '2023' },
    { icon: Building2, value: '256+', label: 'Premium Clients' },
    { icon: Briefcase, value: '736+', label: 'Professional Team' },
    { icon: Award, value: '753+', label: 'Winning Awards' },
  ]

  const companies = [
    { name: 'Upstox', accounts: '5000+', since: '2021', logo: upstoxLogo },
    { name: 'Angel One', accounts: '7000+', since: '2021', logo: angelOneLogo },
    { name: 'HDFC Bank', accounts: '5500+', since: '2021', logo: hdfcLogo },
    { name: 'Punjab National Bank', accounts: '7000+', since: '2021', logo: pnbLogo },
    { name: 'State Bank of India', accounts: '4000+', since: '2021', logo: sbiLogo },
    { name: 'Airtel', accounts: '3000+', since: '2021', logo: airtelLogo },
    { name: 'BigBasket', accounts: '2500+', since: '2021', logo: bigbasketLogo },
    { name: 'Blinkit', accounts: '2000+', since: '2021', logo: blinkitLogo },
    { name: 'Flipkart', accounts: '6000+', since: '2021', logo: flipcartLogo },
    { name: 'Jio', accounts: '5000+', since: '2021', logo: jioLogo },
    { name: 'L&T', accounts: '3500+', since: '2021', logo: ltLogo },
    { name: 'Mahindra', accounts: '3000+', since: '2021', logo: mahindraLogo },
    { name: 'Meesho', accounts: '4000+', since: '2021', logo: meeshoLogo },
    { name: 'Myntra', accounts: '4500+', since: '2021', logo: myntraLogo },
    { name: 'Paytm', accounts: '8000+', since: '2021', logo: paytmLogo },
    { name: 'PhonePe', accounts: '7000+', since: '2021', logo: phonepeLogo },
    { name: 'Swiggy', accounts: '5500+', since: '2021', logo: swiggyLogo },
    { name: 'Vodafone', accounts: '3000+', since: '2021', logo: vodafoneLogo },
    { name: 'Zepto', accounts: '2000+', since: '2021', logo: zeptoLogo },
    { name: 'Zomato', accounts: '6000+', since: '2021', logo: zomatoLogo },
  ]

  const purposes = [
    {
      title: 'Inclusive Job Opportunities',
      description: 'Inclusive employment for diverse education levels, offering roles matching skills, talents, and aspirations.',
    },
    {
      title: 'Nationwide Reach',
      description: 'Nationwide services combat regional unemployment, contributing to India\'s economic growth and community development.',
    },
    {
      title: 'Reducing Unemployment',
      description: 'Combatting unemployment, we empower individuals through jobs, fostering financial independence, stability, and growth.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-dark-bg via-dark-bgSecondary to-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              About <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Leading telecalling company helping banks and customers easily open demat accounts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">
                  #1 Telecalling Company
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                About <span className="gradient-text">CampaignWala</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We're the top telecalling company, helping banks and customers easily open demat accounts. 
                Our team guides you every step, making the process simple and efficient. Join us for 
                hassle-free demat account services, where clarity and support come first.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our dedicated team has successfully guided over <span className="text-primary-light font-semibold">20,000+ members</span> in 2023 alone. 
                Join the growing community who trust us to make their account-opening experience seamless and straightforward.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                  alt="Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-bgSecondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="text-primary-light" size={32} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  {stat.year && (
                    <div className="text-primary-light text-xs mt-1">{stat.year}</div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Purpose</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our primary purpose is to combat unemployment by offering jobs that accommodate diverse skill sets and qualifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="text-primary-light" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{purpose.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{purpose.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-20 bg-dark-bgSecondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Vision, Mission, and <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-xl flex items-center justify-center">
                  <Eye className="text-primary-light" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering individuals nationwide through accessible and innovative financial solutions 
                  for a brighter and financially secure future.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-xl flex items-center justify-center">
                  <Target className="text-primary-light" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Foster financial inclusion and empowerment across India by providing accessible financial 
                  services and creating diverse job opportunities.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-xl flex items-center justify-center">
                  <Heart className="text-primary-light" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Values</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We uphold accessibility, job creation, and skill development, fostering collaboration, 
                  supporting entrepreneurship, promoting equality, engaging communities, and embracing 
                  continuous adaptation.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Tied With Us */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Companies <span className="gradient-text">Tied With Us</span>
            </h2>
            <p className="text-gray-400 text-lg">Trusted partnerships since 2021</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Card className="text-center h-full group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3 overflow-hidden">
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const nextSibling = e.target.nextSibling
                          if (nextSibling && nextSibling.style) {
                            nextSibling.style.display = 'flex'
                          }
                        }}
                      />
                    ) : null}
                    {!company.logo && (
                      <Building2 className="text-primary-light" size={40} />
                    )}
                    <div className="hidden w-full h-full items-center justify-center">
                      <Building2 className="text-primary-light" size={40} />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{company.name}</h3>
                  <p className="text-primary-light text-sm font-semibold mb-1">{company.accounts}</p>
                  <p className="text-gray-400 text-xs">Since {company.since}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-accent-cyan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ready to boost your career?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Join CampaignWala today and take control of your career with flexible work-from-home opportunities.
            </p>
            <Link to="/contacts">
              <Button variant="secondary" size="lg" icon className="bg-white text-primary hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

