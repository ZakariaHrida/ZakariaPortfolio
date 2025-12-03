import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-gray-400 dark:text-gray-600 transition-colors duration-300">
              {t('footer.copyright').replace('{year}', currentYear)}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 transition-colors duration-300">
              {t('footer.builtWith')}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </footer>
  )
}

export default Footer
