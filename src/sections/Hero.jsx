import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadCV = () => {
    const filename = language === 'en' ? 'cv_en.pdf' : 'cv_fr.pdf'
    const link = document.createElement('a')
    link.href = `/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme === 'dark' ? '#fff' : '#000'} 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                {t('hero.welcome')}
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-6 transition-colors duration-300"
            >
              {t('hero.greeting')}{' '}
              <span className="relative inline-block">
                <span className="relative z-10">{t('hero.name')}</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-black dark:bg-white opacity-20 dark:opacity-30"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto transition-colors duration-300"
            >
              {t('hero.title')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-none hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.viewWork')}
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-medium rounded-none hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.getInTouch')}
              </motion.button>
              <motion.button
                onClick={handleDownloadCV}
                className="px-8 py-3 border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-none hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-black hover:border-gray-800 dark:hover:border-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.downloadCV')} 📄
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center p-2 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-black dark:bg-white rounded-full transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
