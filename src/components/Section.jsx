import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Section = ({ id, title, subtitle, children, className = '' }) => {
  const { language } = useLanguage()
  
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16"
            >
              {subtitle && (
                <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white transition-colors duration-300">
                  {title}
                </h2>
              )}
            </motion.div>
          </AnimatePresence>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
