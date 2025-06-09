import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XIcon, ExternalLinkIcon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
interface ProjectModalProps {
  project: {
    title: string
    description: string
    image: string
    type: string
    tags: string[]
    url?: string
    technologies?: Array<{
      name: string
      icon: string
    }>
  } | null
  onClose: () => void
}
export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const { theme } = useTheme()
  if (!project) return null
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
        />
        <motion.div
          className={`relative w-full max-w-4xl rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} p-6 overflow-hidden`}
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.9,
            opacity: 0,
          }}
        >
          <button
            onClick={onClose}
            className={`absolute right-4 top-4 p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            <XIcon size={24} />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{
                  scale: 1.1,
                }}
                animate={{
                  scale: 1,
                }}
              />
            </div>
            <div>
              <motion.h3
                className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-violet-400' : ''}`}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-500 mb-4"
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.1,
                }}
              >
                {project.type}
              </motion.p>
              <motion.p
                className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.2,
                }}
              >
                {project.description}
              </motion.p>
              {/* Tech Stack Section */}
              {project.technologies && (
                <motion.div
                  className="mb-6"
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                >
                  <h4
                    className={`text-sm font-medium mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className={`flex items-center gap-2 p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
                        whileHover={{
                          scale: 1.05,
                        }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6"
                        />
                        <span
                          className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm rounded-full ${theme === 'dark' ? 'bg-violet-500/20 text-violet-300' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${theme === 'dark' ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'bg-black hover:bg-gray-800 text-white'}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <span>Visit Site</span>
                  <ExternalLinkIcon size={18} />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
