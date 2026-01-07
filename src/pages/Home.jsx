import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, Clock, DollarSign, GraduationCap, TrendingUp, 
  Calendar, ArrowRight, Users, Briefcase, Award
} from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import CompanyLogosSection from '../components/CompanyLogosSection'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const heroSlides = [
    {
      title: "No Previous Experience or Technical Skills Required.",
      subtitle: "Welcome to CampaignWala",
      backgroundImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920",
    },
    {
      title: "Jobs for women, men, students, and retirees.",
      subtitle: "Welcome to CampaignWala",
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920",
    },
    {
      title: "Part Time, Full Time, WFH jobs are available.",
      subtitle: "Welcome to CampaignWala",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920",
    },
  ]

  const features = [
    {
      icon: Sparkles,
      title: "Innovative Technology",
      description: "Seamless integration of task assignment and earnings tracking through our user-friendly app.",
    },
    {
      icon: Clock,
      title: "Flexible Work Arrangements",
      description: "Choose your preferred 6-hour shift anytime between 8 am and 8 pm.",
    },
    {
      icon: DollarSign,
      title: "Zero Investment Model",
      description: "No upfront investment required to kickstart your journey with us.",
    },
    {
      icon: GraduationCap,
      title: "Training and Development",
      description: "Comprehensive 3-4 day training program for all new joiners.",
    },
    {
      icon: TrendingUp,
      title: "Our Promotion Scheme",
      description: "Outstanding performance leads to well-deserved promotions and growth.",
    },
    {
      icon: Calendar,
      title: "Weekly Payouts",
      description: "Flexibility to choose weekly or monthly salary withdrawals.",
    },
  ]

  const careerLevels = [
    {
      level: "Entry-Level Positions",
      role: "HR / Customer Service Representative",
      icon: Users,
    },
    {
      level: "Mid-Level Positions",
      role: "Team Lead / Relationship Manager",
      icon: Briefcase,
    },
    {
      level: "Senior-Level Positions",
      role: "Assistant Manager / Manager",
      icon: Award,
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "How To Do Withdrawal Section Free In M Stock Account In Just 10 Rs",
      date: "27 Dec 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    },
    {
      id: 2,
      title: "How To Do Withdrawal Section Free In ICICI Direct Account In just 10 Rs",
      date: "27 Dec 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      id: 3,
      title: "How To Open Account In Bajaj MF In Just 3 Mins",
      date: "20 Dec 2023",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800",
    },
  ]

  // Typewriter effect
  useEffect(() => {
    const currentTitle = heroSlides[currentSlide].title
    setDisplayedText('')
    setIsTyping(true)
    
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50) // Typing speed (adjust as needed)

    return () => clearInterval(typingInterval)
  }, [currentSlide])

  // Auto-slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000) // Increased to 8 seconds to allow typing to complete
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bgSecondary to-dark-bg opacity-90 z-0" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroSlides[currentSlide].backgroundImage}')`
            }}
          />
        </AnimatePresence>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-primary-light text-sm uppercase tracking-wider font-semibold"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight min-h-[1.2em]">
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-1 h-[1em] bg-primary-light ml-1 align-middle"
                  />
                )}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link to="/contacts">
                  <Button size="lg" icon>
                    Get Started
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" size="lg" icon>
                    Explore More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 bg-primary-light'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              CampaignWala <span className="gradient-text">Popular For</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover what makes us the leading choice for work-from-home opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="text-primary-light" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                  alt="Career Growth"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Your Path to <span className="gradient-text">Flexible Work</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you seek part-time, full-time, or freelance roles, we've got you covered. 
                Join us for a fulfilling career, bid farewell to commuting, and embrace the advantages 
                of remote work.
              </p>
              
              <div className="space-y-4 pt-4">
                {careerLevels.map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 glass-card p-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <level.icon className="text-primary-light" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{level.level}</h4>
                      <p className="text-gray-400 text-sm">{level.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/contacts">
                  <Button size="lg" icon>
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
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
              Read Some Latest <span className="gradient-text">Blog & News</span>
            </h2>
            <p className="text-gray-400 text-lg">Stay updated with our latest insights and updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-primary-light text-sm mb-2">{post.date}</p>
                    <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary-light transition-colors">
                      {post.title}
                    </h3>
                    <Link
                      to="/blog"
                      className="inline-flex items-center text-primary-light text-sm font-medium hover:text-primary-dark transition-colors"
                    >
                      Read More <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                View All Posts
              </Button>
            </Link>
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
            <div className="pt-4">
              <Link to="/contacts">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white text-primary rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Tied With Us Section */}
      <CompanyLogosSection />
    </div>
  )
}

export default Home

