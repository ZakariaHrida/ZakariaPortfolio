import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t, language } = useLanguage()
  
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Html/Css', icon: '🌐' },
    { name: 'Php', icon: '🐘' },
    { name: 'Python', icon: '🐍' },    
    { name: 'Bootstrap', icon: '👢' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <Section id="about" subtitle={t('about.subtitle')} title={t('about.title')}>
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              {t('about.bio1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              {t('about.bio2')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              {t('about.bio3')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">{t('about.skillsTitle')}</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors cursor-default"
                >
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <span className="text-sm font-medium text-black dark:text-white transition-colors duration-300">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

export default About
