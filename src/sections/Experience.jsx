import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Experience = () => {
  const { t, language } = useLanguage()
  const experiences = t('experience.items')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <Section id="experience" subtitle={t('experience.subtitle')} title={t('experience.title')}>
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black dark:bg-white hidden md:block transition-colors duration-300" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 md:mb-16 pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-black dark:bg-white rounded-full hidden md:block transition-colors duration-300" />
                
                <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 hover:shadow-lg dark:hover:shadow-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <span className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-colors duration-300">
                        {exp.type === 'experience' ? '💼' : '🎓'}
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 transition-colors duration-300">{exp.location}</p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}

export default Experience
