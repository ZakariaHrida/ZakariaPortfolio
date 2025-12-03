import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/Section";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();

  // Tech stacks remain the same for both languages
  const techStacks = [
    ["Html", "Css", "MySQL", "Php"],
    ["Python", "Pygame"],
    ["React", "OpenWeather API", "CSS3"],
    ["Hrml", "Css", "JavaScript"],
    ["Node.js", "TailwindCSS", "Framer Motion", "Vercel"],
    ["Node.js", "Express", "Redis", "Docker"],
  ];

  const projects = t("projects.items").map((project, index) => ({
    ...project,
    stack: techStacks[index] || [],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section
      id="projects"
      subtitle={t("projects.subtitle")}
      title={t("projects.title")}
      className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-black border-2 border-black dark:border-white group cursor-pointer overflow-hidden transition-colors duration-300"
            >
              <div className="p-6 space-y-4">
                <div className="h-48 bg-black dark:bg-white mb-4 flex items-center justify-center transition-colors duration-300">
                  <span className="text-white dark:text-black text-4xl">
                    📦
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 border-2 border-black dark:border-white text-black dark:text-white font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 text-center"
                    >
                      {t("projects.viewCode")}
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 text-center"
                    >
                      {t("projects.live")}
                    </motion.a>
                  )}
                  {!project.demoUrl && !project.liveUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                    >
                      {t("projects.viewProject")}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
