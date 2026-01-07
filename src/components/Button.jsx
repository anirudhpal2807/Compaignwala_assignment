import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/50',
    secondary: 'bg-dark-card border border-dark-border text-white hover:bg-dark-card/80 hover:border-primary/50',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  // If custom className is provided, use it instead of variant
  const finalClassName = className && className.includes('bg-') 
    ? `${baseStyles} ${sizes[size]} ${className}`
    : `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={finalClassName}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2" size={18} />}
    </motion.button>
  )
}

export default Button

